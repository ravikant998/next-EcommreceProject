import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { productlist } from '../store/productListSilce'
import BannerList from '../components/BannerList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch()
  const dataproduct = useSelector((state) => state.product)
  const [data, setData] = useState([])
  const [currentPage, SetCurrentpage] = useState(1)
  console.log("currentPage", currentPage)
  const [itemPerPage, SetItemPerPage] = useState(4)
  console.log("itemPerPage>>>", itemPerPage)
  const [pageNumberLimit, SetPageNumberLimit] = useState(5)
  console.log("pageNumberLimit", pageNumberLimit)
  const [maxPageNumberLimit, SetMaxpageNumberLimit] = useState(8)
  console.log("maxPageNumberLimit>>>", maxPageNumberLimit)
  const [minPageumberLimit, SetMinPageNumberLimit] = useState(0)
  // console.log("minPageumberLimit>>>", minPageumberLimit)

  const handleClick = (e) => {
    SetCurrentpage(e.target.id)
  }
  const dataLength = data?.length;

  const pages = [];
  for (let i = 1; i <= Math.ceil(dataLength / itemPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    dispatch(productlist())
  }, [])

  useEffect(() => {
    setData(dataproduct.products)
  }, [dataproduct])

  // const handleScrollinfinite=async()=>{
  //   console.log("scrollHeight" + document.documentElement.scrollHeight);
  //   console.log("innerHeight" +window.innerHeight);
  //   console.log("ScrollTop" + document.documentElement.scrollTop)
  //   try{
  //     if(window.innerHeight + document.documentElement.scrollHeight >= document.documentElement.scrollTop){
  //       setData((prev)=>prev + 1)

  //     }
  //   }
  //   catch(error){
  //     console.log("Error")
  //   }

  // }

  // useEffect(()=>{
  //   window.addEventListener("scroll",handleScrollinfinite)
  // },[])

  const handleNextbtn = () => {
    SetCurrentpage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      SetMaxpageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      SetMinPageNumberLimit(minPageumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    SetCurrentpage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      SetMaxpageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      SetMinPageNumberLimit(minPageumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    SetCurrentpage(itemPerPage + 4);
  };

  return (
    <>
      <Head>
        <title>Ecommerce Next App</title>
        <meta name="description" content="Ecommerce app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <BannerList />

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
              {
                currentItems?.slice(0, 29).map((ele, index) => {
                  return (
                    <Link href={`/products/${ele.id}`} legacyBehavior key={ele.id}>
                      <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                        <a className="block relative  rounded overflow-hidden">
                          <Image src={ele.images[0]} alt="image-alt" className=" m-auto md:mx-0 h-[30vh] md:h-[36vh] block" width="500" height='500'></Image>
                        </a>
                        <div className="mt-4 text-center md:text-left">
                          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{ele.title}</h3>
                          <h2 className="text-gray-900 title-font text-lg font-medium">{ele.brand}</h2>
                          <p className="mt-1">Price:${ele.price}</p>
                          <p className="mt-1">Rating:{ele.rating}</p>
                        </div>
                      </div>
                    </Link>
                  )
                })
              }
            </div>
          </div>
        </section>

        <ul className='flex space-x-2 ml-96 text-orange-400'>

          <li>
            <button onClick={handlePrevbtn}
              disabled={currentPage == pages[0] ? true : false}
            >Prev</button>
          </li>
          {pageDecrementBtn}
          {renderPageNumbers}
          {pageIncrementBtn}

          <li>
            <button onClick={handleNextbtn}
              disabled={currentPage == pages[pages.length - 1] ? true : false}
            >Next</button>
          </li>
        </ul>
        <button onClick={handleLoadMore} className='ml-96 text-blue-400'>Load More</button>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1>Website: {process.env.mysiteUrl}</h1>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Types of e-commerce business and examples of how they work</h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
            </div>
            <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Button</button>
          </div>
        </section>
      </div>

    </>
  )
}

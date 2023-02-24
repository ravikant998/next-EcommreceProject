import Link from "next/link"
import { useEffect } from "react"
import Image from "next/image"
import { useDispatch, useSelector } from 'react-redux'
import { productlist } from '../store/productListSilce'
import { useRouter } from "next/router"
import { categoryList } from "../store/productCategorySlice"

const CategoryByListing = () => {
  const router=useRouter()
  const slug=router.query
  // console.log("id>>>>",slug)
  const dispatch = useDispatch()

  const catListing = useSelector((state) => state.categories)

  useEffect(() => {
    dispatch(categoryList(slug))
  }, [])
  return (
    <div>

<section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">

          <div className="flex flex-wrap -m-4 justify-center">
            {
              catListing?.products?.slice(0, 8).map((ele, index) => {
                // console.log("ele>>>>>>>>>", ele)
                return (
                  <Link href={''} legacyBehavior key={index}>
                    <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                      <a className="block relative  rounded overflow-hidden">
                        {/* <img alt="ecommerce" className=" m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="https://rukminim1.flixcart.com/image/832/832/l1grgcw0/t-shirt/x/o/5/m-t428hs-tm5p-eyebogler-original-imagdf2egzjxeqgk.jpeg?q=70" /> */}
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
    </div>
  )
}

export default CategoryByListing
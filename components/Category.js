import Link from 'next/link'
import { useEffect, useState } from 'react'
const Category = ({ data }) => {
    let catdata = data;
    const [catlist, SetCatList] = useState([])
    // console.log("catlist>>>", catlist)
    useEffect(() => {
        SetCatList(catdata)
    }, [])

    const onClikHandler=()=>{
       
    }
    return (
        <>
            <div>
                <h1>Show by Category</h1>
                <div className='space-x-2 flex'>
                    {
                        catlist?.map((categoryname, index) => {
                            return (
                                <div key={index}>
                                    <Link href={`/products/category/${categoryname}`}  >
                                        <ul>
                                            <li >
                                                {categoryname.toUpperCase()}
                                            </li>
                                        </ul>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Category
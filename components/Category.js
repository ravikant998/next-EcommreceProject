import Link from 'next/link'
import { useRouter } from 'next/router';

import {  useSelector } from 'react-redux'

const Category = ({data}) => {
let catdata=data
// console.log("catdata",catdata)

    return (
        <>
        <h1>Show by Category</h1>
        <div className='space-x-2 flex'>
           
           
            {
                catdata?.map((categoryname, index) => {
                  

                    return (
                        <div key={index}>
                            <Link href={`/products/category/${categoryname}`}>

                                <ul>
                                    <li>
                                        {categoryname.toUpperCase()}
                                        </li>

                                </ul>
                            </Link>
                        </div>

                    )

                })
            }

          
           
        </div>
        </>
    )
}

export default Category
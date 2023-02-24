import Link from 'next/link'
import { useEffect } from 'react'
const Category = ({ data }) => {
    let catdata = data;

    useEffect(()=>{
        
    })
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
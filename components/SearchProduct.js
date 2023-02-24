import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchProduct } from '../store/searchProductSlice'

const SearchProduct = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [searchInput, setSearchInput] = useState('')
    const [listproduct, SetListproduct] = useState()
    let data = useSelector((state) => state.searchdata)

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value); 
    };
    
    useEffect(() => {
        if (searchInput.length > 1)
            dispatch(searchProduct(searchInput))
            SetListproduct(data)
    }, [searchInput])

    const onhandlerSubmit = (e) => {
        e.preventDefault()
        router.push(`/searchlist?search=${searchInput}`)
        SetListproduct(false)
    }
    // useEffect(() => {
       

    // },)
    return (
        <div>
            <div className='mx-10 ' >
                <form onSubmit={onhandlerSubmit}>
                    <input
                        className='text-center'
                        type="text"
                        placeholder="Search data"
                        value={searchInput}
                        onChange={handleChange}
                    />
                </form>
            </div>
            {
                searchInput.length > 1 && listproduct.products?.map((items, index) => {
                    // console.log("items",items)
                    return (
                        <div key={index}>
                            <ul>
                                <li >
                                    <Link href={`/products/${items.id}`} onClick={() => setSearchInput("")}>
                                        {items.title}
                                    </Link>
                                </li>
                            </ul>                   
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SearchProduct
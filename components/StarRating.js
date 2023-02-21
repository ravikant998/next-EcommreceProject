import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
const StarRating = ({ star }) => {

    const ratingStar = Array.from({ length: 5 }, (element, index) => {
        // console.log("index>>",index)
        let number = index + 0.5;
        // console.log("number>>>",number)
        return (
            <span key={index}>
                {
                    star >= index + 1 ? (<FaStar className='icon' />) : star >= number ?
                        <FaStarHalfAlt className='icon' /> :
                        <AiOutlineStar className='icon' />
                }
            </span>
        )
    })

    return (
        <div className=" text-yellow-500 flex">
            {ratingStar}

        </div>
       
    )
}

export default StarRating
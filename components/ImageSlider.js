import { useEffect, useState } from "react"
import Image from "next/image"

const ImageSlider = ({ data }) => {
    // console.log("datattttt>>>", data)
    const [imageData, setImageData] = useState()
    // console.log("imageData", imageData)

    const handleClick = (index) => {
        console.log(index)
        const imageSlider = data.images[index];
        // console.log("imageSlider>>>", imageSlider)
        setImageData(imageSlider)
    }

    useEffect(() => {
        setImageData(data?.images?.[0])
    }, [data])
    if(!data?.images){
        return <div className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded"><Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"} height="300" width="500" alt="images" /></div>
    }
    return (
        <div className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded">
            <Image src={imageData} height="00" width="500" alt="images"  className="border border-x-5"/>
            <div className='flex mt-5'>

                {
                    data?.images?.map((image, i) => {
                        // console.log("image>>>>",image)
                        return (

                            <div key={i}>
                                <Image
                                    src={image}
                                    onClick={() => handleClick(i)}
                                    height='500'
                                    width='500'
                                    alt="images"
                                />

                            </div>

                        )
                    })
                }
            </div>

        </div>
    )
}

export default ImageSlider
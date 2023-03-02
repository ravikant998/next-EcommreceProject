import { useRouter } from "next/router"

const Review=()=>{
    const router=useRouter();
    const {reviewId,blogId}=router.query;
    return(
        <h1>Reviwid {reviewId} and blogid:{blogId}</h1>
        
    )

    
}
export default Review
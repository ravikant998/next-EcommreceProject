import { useRouter } from 'next/router'
import React from 'react'

 const Blogdetails = () => {
    const router=useRouter()
    const id=router.query.blogId;
  return (
    <h1>
    Blog ID: {id}
    </h1>
  )
}
export default Blogdetails

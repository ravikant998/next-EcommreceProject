import Link from "next/link";

function classNames(...classes) {
    // console.log("classes>>>",classes)
    return classes.filter(Boolean).join(" ");
}

const Brand = ({props}) => {
    let data=props;
   
    return (
        <>
         <h1>Show by brand</h1>
         <div className=' space-x-2 flex'>
           {
               data?.map((categoryname, index) => {
                   return (
                       <div key={index}>
                               <ul>
                                   <li>
                                    <Link href={`/products/category/${categoryname}`} >
                                       {categoryname.toUpperCase()}
                                    </Link>
                                       </li>
                               </ul>
                           
                       </div>
                   )
               })
           }
    </div>
        </>
      
    )
}

export default Brand
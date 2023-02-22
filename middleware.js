import { NextResponse } from "next/server";

export default function middleware(req){
    console.log("req>>>",req)
    let verify = req.cookies.get("loggedin");
    let url = req.url
    
    // if(!verify && url.includes('/checkout')){
    //     return NextResponse.redirect("http://localhost:3000/");
    // }

    // if(!verify && url.includes('/products/category/fragrances')){
    //     return NextResponse.redirect("http://localhost:3000/");
    // }


}
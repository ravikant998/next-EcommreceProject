import { NextResponse } from "next/server";

 export default function middleware(req){
    let varify=req.cookies.get("loggedin");
    let url=req.url;

    if(!varify && url.includes("/checkout")){
        return NextResponse.redirect("http://localhost:3000/")
    }
    

   
}
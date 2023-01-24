import Link from "next/link"
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please Enter your name")
    .min(4, "First name must be at least 4 characters")
    .max(20, "First name must be at most 20 characters")
    .matches(/^[A-Za-z ]+$/i, "Please enter valid first name"),
  phone: yup
    .string()
    .required("Please enter mobile")
    .min(7)
    .max(14),

  email: yup
    .string()
    .required("Please enter email address")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please use correct email"
    ),
  password: yup
    .string()
    .required("Please enter the password")
    .min(8, "Password length should be greater than 8"),

  privacyPolicy: yup
    .bool().oneOf([true], "Please check the privacy policy"),

})

const Signup = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  let attachmentfile = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submithnadler = (data) => {
    console.log("dTA", data)
    // dispatch(signupuser(data)
   

    // let signinData = JSON.parse(localStorage.getItem("signup")) || [];
    // localStorage.setItem("signup", JSON.stringify([...signinData, { id: signinData.length + 1, ...data }]))

    // router.push('/login')
  }
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            {/* <img className="mx-auto h-12 w-auto" src=""
              alt="Your Signup" /> */}
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Signup in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {/* Or */}
              <Link href="signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up</Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(submithnadler)} >
            <input type="text" name="remember" />
            <div className="rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">Name</label>
                <div
                  className={`input-wrap ${errors.name ? "has-error" : ""}`}>
                  <input id="name"
                    name="name"
                    type="text"
                    {...register("name")}
                    className="relative block w-full appearance-none rounded-none 
                    rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
                    placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
                    focus:ring-indigo-500 sm:text-sm" placeholder="Your name" />
                  {errors.name && (
                    <span style={{ color: "red" }}>{errors.name.message}</span>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <div
                  className={`input-wrap ${errors.name ? "has-error" : ""}`}></div>
                <input id="phone"
                  name="phone"
                  type="number"
                  {...register("phone")}
                  className="relative block w-full appearance-none rounded-none 
                  rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
                placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
                focus:ring-indigo-500 sm:text-sm" placeholder="Enter Your phone number" />
                {errors.phone && (
                  <span style={{ color: "red" }}>{errors.phone.message}</span>
                )}
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <div
                  className={`input-wrap ${errors.email ? "has-error" : ""}`}></div>
                <input id="email-address"
                  name="email"
                  type="email"
                  {...register("email")}
                  className="relative block w-full appearance-none rounded-none 
                rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
              placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
              focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email.message}</span>
                )}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div
                  className={`input-wrap ${errors.password ? "has-error" : ""}`}></div>
                <input id="password"
                  name="password"
                  type="password"
                  {...register("password")}
                  className="relative block w-full appearance-none rounded-none rounded-b-md 
                  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 
                  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password" />
                {errors.password && (
                  <span style={{ color: "red" }}>{errors.password.message}</span>
                )}
              </div>
            </div>
            <div>
              <input type="file" multiple accept="image/*" ref={attachmentfile} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me"
                  type="checkbox"
                  className={`form-check-input ${errors.privacyPolicy ? "is-invalid" : ""
                    }`}
                  {...register("privacyPolicy")}
                // className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" 
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                {errors.privacyPolicy && (<span style={{ color: "red" }}>{errors.privacyPolicy.message}</span>)}

              </div>

              <div className="text-sm">
                <Link href={'forgetPassword'} className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</Link>

              </div>
            </div>
            <div className="text-sm">
              <Link href={'/login'} className="font-medium text-indigo-600 hover:text-indigo-500">If you have already acount.Please click here</Link>

            </div>
            <div>
              <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
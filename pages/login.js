import Link from "next/link"
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

const schema = yup.object().shape({
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
const Login = () => {
  const router = useRouter()
 
  const [input, setInput] = useState({ email: '', password: '' })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // useEffect(() => {
  //   // if(JSON.parse(localStorage.getItem("signup"))){
  //   //  router.push('/')
  //   // }
  // }, [])

  const submithnadler = (e) => {
    e.preventDefault()
    // // console.log("data",data)
    //     dispatch(signinuser(data))
    //     router.push('/')
    let user = JSON.parse(localStorage.getItem("signup"))
    let x = true
    console.log("x", x)
    user?.forEach(element => {
      if (input.username == element.username && input.password == element.password) {
        localStorage.setItem("login", true)
        router.push('/')
        x = false
      }
    });
    if (x) {
      alert("Inavlid username or password");
      
    }
  }

  return (
    <>
    
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          {/* <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {/* Or */}
            <Link href="signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign Up</Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={submithnadler}>
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">

            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <div className={`input-wrap ${errors.email ? "has-error" : ""}`}>
                <input id="email-address"
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={(e) => setInput({ ...input, email: e.target.value })}
                  // {...register('email')}
                  className="relative block w-full appearance-none rounded-none 
            rounded-t-md border border-gray-300 px-3 py-2 text-gray-900
             placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none
              focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email.message}</span>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className={`input-wrap ${errors.password ? "has-error" : ""}`}>
                <input id="password"
                  name="password"
                  type="password"
                  value={input.password}
                  onChange={(e) => setInput({ ...input, password: e.target.value })}
                  // {...register('password')}
                  className="relative block w-full appearance-none rounded-none rounded-b-md 
                     border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 
                      focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password" />
                {errors.password && (
                  <span style={{ color: "red" }}>{errors.password.message}</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me"
                name="remember-me"
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

          <div>
            <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">

                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
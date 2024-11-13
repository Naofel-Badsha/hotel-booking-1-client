import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const { singIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const auth = getAuth(app);

  //-----Google----Singin----------
  const googleProvider = new GoogleAuthProvider();

  //-----gitHub----Singin----------
  const gitHubProvider = new GithubAuthProvider();

  //--------hendel----login------
  const hendelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //------
    singIn(email, password)
      .then((result) => {
        console.log(result);
        //------navigate-----
        navigate("/");
        return toast.success("Login Successfully");
      })
      .catch((error) => {
        console.log(error);
        // return toast.error("Password Must By 6 Creacter");
      });
  };

  //-----Google----Singin----------
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        //------navigate-----
        navigate("/");
        return toast.success("Login Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //-----gitHub----Singin----------
  const handleGithubSingIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        console.log(result.user);
        return toast.success("User Creatt a successfully");
      })

      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex items-center justify-center h-screen px-2">
      <div className="border-2 border-[#008080] p-5 relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <h4 className="block  text-4xl text-center text-[#008080]  font-bold leading-snug tracking-normal  antialiased">
          Plese Login
        </h4>
        <hr className="mt-2" />
        <p className="mt-1 block font-bold text-base text-center  leading-relaxed text-gray-700 antialiased">
          Enter your details to Login.
        </p>
        <form
          onSubmit={hendelLogin}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="email"
                className="peer text-xl h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-4 font-sans font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#008080] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="Enter Your Email"
                name="email"
              />
              <label className="text-xl before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="password"
                className="peer text-xl h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-4 font-sans font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#008080] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder="Enter Your Password"
                name="password"
              />
              <label className="text-xl before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password
              </label>
            </div>
          </div>
          <div className="inline-flex gap-3 items-center">
            <label
              className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
              data-ripple-dark="true"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#008080] checked:bg-[#008080] checked:before:bg-[#008080] hover:before:opacity-20"
                id="checkbox"
                required
              />
              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <i className="fa-regular fa-circle-check"></i>
              </span>
            </label>
            <label className="mt-px cursor-pointer select-none font-light text-gray-700">
              <p className="flex items-center  text-sm font-semibold leading-normal text-gray-700 antialiased">
                I agree the....!
                <a
                  className="font-bold transition-colors hover:text-[#008080]"
                  href="#"
                >
                  &nbsp;Terms and Conditions
                </a>
              </p>
            </label>
          </div>
          <button className="mt-6 block w-full select-none rounded-lg bg-[#008080] py-3 px-6 text-center align-middle font-bold text-[16px]  uppercase text-white shadow-md transition-all hover:shadow-lg hover:shadow-[#008080] focus:opacity-[0.85] focus:shadow-none  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            LogIn
          </button>
          <p className="mt-4 block text-center font-medium text-base  leading-relaxed text-gray-700 antialiased">
            Already have an account ?..
            <Link
              to="/register"
              className="font-bold text-[#008080] transition-colors hover:text-pink-500"
              href="#"
            >
              Register
            </Link>
          </p>
          <div className="flex justify-around">
            <div className="">
              <img
                onClick={handleGoogleSingIn}
                className="w-[40px] m-auto mt-3 border-2  border-[#008080] rounded-full cursor-pointer"
                src="https://i.ibb.co/Hr1t7L5/Login-1-removebg-preview.png"
              />
            </div>
            <div className="">
              <img
                onClick={handleGithubSingIn}
                className="w-[40px] m-auto mt-3 border-2  border-[#008080] rounded-full cursor-pointer"
                src="https://i.ibb.co/ZdXrZZW/Login-2-removebg-preview.png"
              />
            </div>
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;

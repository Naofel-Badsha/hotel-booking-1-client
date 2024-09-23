import { Link } from "react-router-dom";


const ErroePage = () => {
    return (
        <div>
          <Link to="/">
            <div className=" flex justify-center items-center py-4">
              <h1 className=" text-center font-bold  bg-cyan-600 text-white py-2 px-5 rounded-md">
                Go Back
              </h1>
            </div>
          </Link>
          <img src="https://i.ibb.co/7QqnmS8/404-error.jpg" className="w-full h-[100vh]"  />
        </div>

    );
};

export default ErroePage;
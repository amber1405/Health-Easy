const Navbar = () => {
  return (
    <div className="flex justify-between p-3 shadow-md">
      <div className="flex items-center gap-1">
        <img className="flex size-11 ml-4" src="src\assets\logo.png" alt="" />
        <h1 className="text-3xl items-center cursor-pointer font-edu-sa font-bold text-blue-700">
          HealthEasy
        </h1>
      </div>
      <div className="flex gap-4">
        <ul className="flex items-center gap-6 font-inter mr-4">
          <li className="text-xl hover:text-blue-900 cursor-pointer py-1 transition-all duration-500">
            Home
          </li>
          <li className="text-xl hover:text-blue-900 cursor-pointer py-1 transition-all duration-500">
            Appointments
          </li>
          <li className="text-xl hover:text-blue-900 cursor-pointer py-1 transition-all duration-500">
            HealthBlog
          </li>
          <li className="text-xl hover:text-blue-900 cursor-pointer py-1 transition-all duration-500">
            Reviews
          </li>
        </ul>

        <button className="w-24 p-2 font-semibold font-inter text-xl rounded-full text-richblack-25 hover:bg-blue-600 ease-in-out duration-500 border-2 border-blue-400">
          SignUp
        </button>
        <button className="w-20 p-2 font-semibold font-inter text-xl rounded-full text-richblack-25 hover:bg-blue-600 ease-in-out duration-500 border-2 border-blue-400">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;

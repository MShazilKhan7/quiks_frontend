import React, { useContext, useState } from "react";
import { Tooltip } from "@material-tailwind/react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login(e) {
    e.preventDefault();

    const user = {
      email: email,
      password: password
    }

    if (email.trim() == '' || password.trim() == '') {
      alert("All field are required");
      return;
    }

    axios.post("http://localhost:8000/auth/login", user)
      .then((response) => {
        if (response.data.message === "success") {
          // Successfully login
          setUser(response.data.data);
          navigate('/');
        } else {
          // Backend Error
          alert(response.data.error);
        }
      })
      .catch((error) => {
        alert("Something went wrong");
      })
  }

  return (
    <div className="font-[sans-serif] bg-white flex items-center justify-center md:h-screen p-4">
      <div className="shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] max-w-6xl max-md:max-w-lg rounded-md p-6">
        <button>
          <img
            src="public\vite.svg"
            alt="logo"
            className="w-[40px] h-[40px] md:mb-4 mb-12"
            onClick={() => {
              navigate("/");
            }}
          />
        </button>
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="max-md:order-1 lg:min-w-[450px]">
            <img
              src="src\assets\login_image.svg"
              className="lg:w-11/12 w-full object-cover"
              alt="login-image"
            />
          </div>
          <form className="md:max-w-md w-full mx-auto" onSubmit={login}>
            <div className="mb-12 flex justify-between">
              <h3 className="text-4xl font-extrabold text-secondary">
                Login
              </h3>
            </div>
            <div>
              <div className="relative flex items-center">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  required
                  className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
                <i className="fa-regular fa-envelope w-[18px] h-[18px] absolute right-2 text-primary"></i>
              </div>
            </div>
            <div className="mt-8">
              <div className="relative flex items-center">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type="password"
                  required
                  className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
                <i className="fa-regular fa-eye w-[18px] h-[18px] absolute right-2 text-primary"></i>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="text-gray-800 ml-3 block text-sm"
                >
                  Remember me
                </label>
              </div>
              <div>
                <a
                  href="jajvascript:void(0);"
                  className="text-secondary font-semibold text-sm hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="mt-12">
              <button
                type="submit"
                className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold rounded-md text-white bg-secondary hover:bg-blue-700 focus:outline-none"
              >
                Login
              </button>
              <p className="text-gray-800 text-sm text-center mt-6">
                Don't have an account{" "}
                <button
                  className="text-secondary font-semibold hover:underline ml-1 whitespace-nowrap" onClick={() => { navigate('/signup') }}
                >
                  Register here
                </button>
              </p>
              <div className="flex justify-center gap-3 mt-8 mb-2">
                <Tooltip content="Facebook">
                  <button className="hidden sm:flex h-8 w-8 flex-none items-center justify-center bg-greyaccent hover:bg-accent hover:text-white rounded-full shadow-md">
                    <FaGoogle size={14} />
                  </button>
                </Tooltip>
                <Tooltip content="Google">
                  <button className="hidden sm:flex h-8 w-8 flex-none items-center justify-center bg-greyaccent hover:bg-accent hover:text-white rounded-full shadow-md">
                    <FaFacebookF size={14} />
                  </button>
                </Tooltip>
                <Tooltip content="Linkedin">
                  <button className="hidden sm:flex h-8 w-8 flex-none items-center justify-center bg-greyaccent hover:bg-accent hover:text-white rounded-full shadow-md">
                    <FaLinkedinIn size={14} />
                  </button>
                </Tooltip>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

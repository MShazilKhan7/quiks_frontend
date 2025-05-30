import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axiosInstance from "../../config/axios";

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function signUp(e) {
    e.preventDefault();
    setError('');

    if(firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
      setError("All fields are required");
      return;
    }

    const data = {
      name: firstName.trim() + ' ' + lastName.trim(),
      email: email.trim(),
      password: password
    }

    setIsLoading(true);
    try {
      const response = await axiosInstance.post("/auth/signup", data);
      if(response.data.message === "success") {
        const { data: userData, token } = response.data;
        console.log('Signup successful, setting user context:', userData);
        await login(userData, token);
        navigate('/');
      } else {
        setError(response.data.error || 'Signup failed');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError(err.response?.data?.error || 'Something went wrong during signup');
    } finally {
      setIsLoading(false);
    }
  }

  function togglePasswordView() {
    setShowPassword(!showPassword);
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
              src="src\assets\signup_image.svg"
              className="lg:w-11/12 w-full object-cover"
              alt="login-image"
            />
          </div>
          <form className="md:max-w-md w-full mx-auto" onSubmit={signUp}>
            <div className="mb-12">
              <h3 className="text-4xl font-extrabold text-secondary">
                Signup
              </h3>
            </div>
            {error && (
              <div className="text-red-500 text-sm mb-4">
                {error}
              </div>
            )}
            <div>
              <div className="relative flex items-center">
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  name="first_name"
                  type="text"
                  required
                  className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter first name"
                />
                <i className="fa-regular fa-user w-[18px] h-[18px] absolute right-2 text-primary"></i>
              </div>
            </div>
            <div className="mt-5">
              <div className="relative flex items-center">
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  name="last_name"
                  type="text"
                  required
                  className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter last name"
                />
                <i className="fa-regular fa-user w-[18px] h-[18px] absolute right-2 text-primary"></i>
              </div>
            </div>
            <div className="mt-5">
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
            <div className="mt-5">
              <div className="relative flex items-center">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
                <i className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"} w-[18px] h-[18px] absolute right-2 text-primary cursor-pointer`} onClick={togglePasswordView}></i>
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
                  href="jvascript:void(0);"
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
                disabled={isLoading}
              >
                {isLoading ? 'Signing up...' : 'Signup'}
              </button>
              <p className="text-gray-800 text-sm text-center mt-6">
                Already have an account{" "}
                <button
                  className="text-secondary font-semibold hover:underline ml-1 whitespace-nowrap" onClick={() => {navigate('/login')}}
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

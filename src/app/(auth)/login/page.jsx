'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import {Form, TextField, Label, Input, Button } from 'react-aria-components';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { toast, Slide , Flip } from "react-toastify";


const LoginPage = () => {

  const { register, handleSubmit , watch , formState: { errors } } = useForm();
   
    const handleLogin = async(DATA) => {

         const {email , password } = DATA
           console.log({email , password } )


   const { data : res , error } = await authClient.signIn.email({
    email: email, 
    password: password, 
    rememberMe: true,
    callbackURL: "/",
    });

    console.log("Login Response:", res);
    console.log("Login Error:", error);


    if(error){   
      toast.error("Wrong Attempt! Please try again", {
                    position: "top-center",
                    autoClose: 1300,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide ,
                    });
        
        return;
    }
    else{
        toast.success("You are successfully Login", {
                      position: "top-center",
                      autoClose: 1300,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      transition: Flip ,
                      });
    }







    };

    return (
    <div className="relative h-[850px] bg-[#f4f4f7]">
      {/* Top Background */}
      <div className="w-full h-[230px] md:h-[350px] bg-[#5a2dbd] rounded-b-[25%]" />

      {/* Register Card */}
      <div className="absolute left-1/2 top-[35px] md:top-[40px] -translate-x-1/2 w-[90%] max-w-[420px] bg-white rounded-[30px] shadow-xl px-8 py-10">
        {/* Logo / Title */}
        <div className="text-center mb-5">
          <h1 className="text-3xl font-bold text-[#5a2dbd]">
            BOOK<span className="text-pink-500">LOOP</span>
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Create your account to start your reading adventure.
          </p>
        </div>




        {/* Form */}
        <Form className="space-y-2" onSubmit={handleSubmit(handleLogin)}>

          <TextField>
            <Label className="text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              name="email"
              className="w-full mt-1 rounded-full border border-border/60 px-4 py-3 outline-none focus:ring-2 focus:ring-[#5a2dbd]"
              placeholder="student@gmail.com"
              {...register("email",
              {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address"
                }
              })}
            />

            {
              errors.email && 
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            }


          </TextField>



          <TextField>
            <Label className="text-sm font-medium text-gray-700">
              Password
            </Label>
            <Input
                name="password"
              type="password"
              className="w-full mt-1 rounded-full border border-border/60 px-4 py-3 outline-none focus:ring-2 focus:ring-[#5a2dbd]"
              placeholder="••••••••"

              {...register("password",
              {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />

            {
              errors.password && 
              <span className="text-red-500 text-sm">{errors.password.message}</span>
            }

          </TextField>

          <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 transition rounded-full py-3 font-semibold text-black mt-2">
            Login
          </Button>
        </Form>

                {/* Divider */}
        <div className="flex items-center gap-3 my-3">
          <div className="h-[1px] bg-gray-200 flex-1" />
          <p className="text-xs text-gray-400">OR</p>
          <div className="h-[1px] bg-gray-200 flex-1" />
        </div>
                {/* Google Button */}
        {/* Google Button */}
        <button type='submit' className="w-full border space-x-2 flex justify-center items-center gap-2 border-gray-300 rounded-full py-2 text-sm font-medium hover:bg-gray-50 transition">
          <FaGoogle /> Sign Up With Google
        </button>

                {/* Divider */}
            <div className="flex items-center gap-3 my-3">
            <div className="h-[1px] bg-gray-200 flex-1" />
            </div>


        {/* Login */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Not Registered?{' '}
          <Link href='/register'>
          <span className="text-[#5a2dbd] font-medium cursor-pointer">
            Register
          </span>
          </Link>

        </p>
      </div>
    </div>
    );
};

export default LoginPage;
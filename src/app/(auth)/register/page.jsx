'use client';

import Link from 'next/link';
import {Form, TextField, Label, Input, FieldError, Button } from 'react-aria-components';
import { FaGoogle } from 'react-icons/fa';

const RegisterPage = () => {



    const handleRegister = (e) => {

        e.preventDefault();
        
        const name = e.target["name"].value;
        const email = e.target["email"].value;
        const password = e.target["password"].value;
        const img = e.target["img"].value;
        console.log(name, email, password, img);
        
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

        {/* Google Button */}
        <button className="w-full border space-x-2 flex justify-center items-center gap-2 border-gray-300 rounded-full py-2 text-sm font-medium hover:bg-gray-50 transition">
          <FaGoogle /> Sign Up With Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-3">
          <div className="h-[1px] bg-gray-200 flex-1" />
          <p className="text-xs text-gray-400">OR USE EMAIL</p>
          <div className="h-[1px] bg-gray-200 flex-1" />
        </div>

        {/* Form */}
        <Form className="space-y-2" onSubmit={handleRegister}>
          <TextField>
            <Label className="text-sm font-medium text-gray-700">
              Full Name
            </Label>
            <Input
                name="name"
              className="w-full mt-1 rounded-full border border-border/60 px-4 py-3 outline-none focus:ring-2 focus:ring-[#5a2dbd]"
              placeholder="John Doe"
            />
            <FieldError className="text-xs text-red-500" />
          </TextField>

          <TextField>
            <Label className="text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              name="email"
              className="w-full mt-1 rounded-full border border-border/60 px-4 py-3 outline-none focus:ring-2 focus:ring-[#5a2dbd]"
              placeholder="student@gmail.com"
            />
            <FieldError className="text-xs text-red-500" />
          </TextField>

          <TextField>
            <Label className="text-sm font-medium text-gray-700">
              Avatar URL (Optional)
            </Label>
            <Input
                name="img"
              className="w-full mt-1 rounded-full border border-border/60 px-4 py-3 outline-none focus:ring-2 focus:ring-[#5a2dbd]"
              placeholder="https://image-link.com/avatar.jpg"
            />
            <FieldError className="text-xs text-red-500" />
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
            />
            <FieldError className="text-xs text-red-500" />
          </TextField>

          <Button type='submit' className="w-full bg-yellow-400 hover:bg-yellow-500 transition rounded-full py-3 font-semibold text-black mt-2">
            Register
          </Button>
        </Form>

        {/* Login */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Already member?{' '}
          <Link href='/login'>
          <span className="text-[#5a2dbd] font-medium cursor-pointer">
            Login
          </span>
          </Link>

        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { Form, TextField, Label, Input, Button } from 'react-aria-components';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { toast, Slide, Flip } from "react-toastify";
import { useRouter } from 'next/navigation';


const RegisterPage = () => {

    const router = useRouter();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();


    const handleRegister = async (DATA) => {

        const { name, email, password, image } = DATA;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: image || undefined,
            callbackURL: "/",
        });

        console.log("Register Response:", res);
        console.log("Register Error:", error);

        if (error) {
            toast.error(error.message || "Registration failed! Please try again.", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                transition: Slide,
            });
            return;
        }

        toast.success("🎉 Account created successfully! Please login.", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            transition: Flip,
        });

        setTimeout(() => router.push('/login'), 2100);
    };


    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };


    return (
        <div className="min-h-screen bg-[#f4f4f7] flex flex-col items-center justify-center px-4 py-10">

            {/* Card */}
            <div className="w-full max-w-[460px] bg-white rounded-[32px] shadow-2xl overflow-hidden">

                {/* Card Top Gradient Header */}
                <div className="bg-gradient-to-r from-[#5a2dbd] to-[#7c3aed] px-8 pt-8 pb-10 text-center relative">
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                            backgroundSize: "30px 30px",
                        }}
                    />
                    <div className="relative z-10">
                        <h1 className="text-3xl font-extrabold text-white tracking-wide">
                            BOOK<span className="text-yellow-300">LOOP</span>
                        </h1>
                        <p className="text-purple-200 text-sm mt-1">
                            Create your account &amp; start reading 📚
                        </p>
                    </div>
                </div>

                {/* Card Body */}
                <div className="px-8 py-7">

                    {/* Google Sign Up Button */}
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="w-full border flex justify-center items-center gap-2.5 border-gray-300 rounded-full py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition mb-4"
                    >
                        <FaGoogle className="text-[#EA4335]" />
                        Continue with Google
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px bg-gray-200 flex-1" />
                        <p className="text-xs text-gray-400 font-medium">OR REGISTER WITH EMAIL</p>
                        <div className="h-px bg-gray-200 flex-1" />
                    </div>

                    {/* Form */}
                    <Form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>

                        {/* Full Name */}
                        <TextField>
                            <Label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                Full Name
                            </Label>
                            <Input
                                name="name"
                                className="w-full mt-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#5a2dbd] focus:border-transparent transition"
                                placeholder="John Doe"
                                {...register("name", {
                                    required: "Name is required",
                                    minLength: { value: 2, message: "Name must be at least 2 characters" }
                                })}
                            />
                            {errors.name && (
                                <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>
                            )}
                        </TextField>

                        {/* Email */}
                        <TextField>
                            <Label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                Email Address
                            </Label>
                            <Input
                                name="email"
                                type="email"
                                className="w-full mt-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#5a2dbd] focus:border-transparent transition"
                                placeholder="you@example.com"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/i,
                                        message: "Enter a valid email address",
                                    },
                                })}
                            />
                            {errors.email && (
                                <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>
                            )}
                        </TextField>

                        {/* Avatar URL (Optional) */}
                        <TextField>
                            <Label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                Avatar URL{" "}
                                <span className="text-gray-400 normal-case font-normal">(optional)</span>
                            </Label>
                            <Input
                                name="image"
                                className="w-full mt-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#5a2dbd] focus:border-transparent transition"
                                placeholder="https://example.com/avatar.jpg"
                                {...register("image")}
                            />
                            {errors.image && (
                                <span className="text-red-500 text-xs mt-1 block">{errors.image.message}</span>
                            )}
                        </TextField>

                        {/* Password */}
                        <TextField>
                            <Label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                Password
                            </Label>
                            <Input
                                name="password"
                                type="password"
                                className="w-full mt-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#5a2dbd] focus:border-transparent transition"
                                placeholder="Min. 6 characters"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                })}
                            />
                            {errors.password && (
                                <span className="text-red-500 text-xs mt-1 block">{errors.password.message}</span>
                            )}
                        </TextField>

                        {/* Submit */}
                        <Button
                            type="submit"
                            isDisabled={isSubmitting}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 disabled:cursor-not-allowed transition rounded-full py-3 font-bold text-black text-sm mt-1 shadow-sm"
                        >
                            {isSubmitting ? "Creating Account..." : "Create Account →"}
                        </Button>
                    </Form>

                    {/* Login Link */}
                    <p className="text-center text-sm text-gray-500 mt-5">
                        Already have an account?{" "}
                        <Link href="/login">
                            <span className="text-[#5a2dbd] font-semibold hover:underline cursor-pointer">
                                Login here
                            </span>
                        </Link>
                    </p>
                </div>
            </div>

            {/* Bottom branding */}
            <p className="text-xs text-gray-400 mt-6">
                © {new Date().getFullYear()} BookLoop · Your Reading Companion
            </p>
        </div>
    );
};

export default RegisterPage;
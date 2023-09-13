"use client"
import useAuth from '@/hooks/useAuth';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signIn } = useAuth();
    const { push } = useRouter();
    const onSubmit = async (data) => {
        const { email, password } = data;
        // console.log(data);
        const tostId = toast.loading("Loading...");
        try {
            const user = await signIn(email, password)
            toast.dismiss(tostId);
            toast.success("user singed in successfully")
            push('/dashboard/studentDashboard');
        } catch (error) {
            toast.dismiss(tostId);
            toast.error(error.message || "user not singed")
        }
    }

    const handleGoogleLogin = async () => {
        const tostId = toast.loading("Loading...");
        try {
            const user = await googleLogin()
            toast.dismiss(tostId);
            toast.success("user singed in successfully")
        } catch (error) {
            toast.dismiss(tostId);
            toast.error(error.message || "user not singed")
        }
    }

    return (
        <div className='mt-10'>

            <h3 className='font-bold text-2xl text-center'>Please login</h3>

            <form onSubmit={handleSubmit(onSubmit)}
                className='w-[500px] border px-5 py-5 mx-auto mt-5 '
            >
                <span>Email:</span>
                <input className='px-2 py-2 border w-full mt-1 mb-5' type="email" name="email" id="" placeholder='Enter your email'
                    {...register("email", {
                        required: true,

                    })}
                />

                <span className=''>Password:</span>
                <input className='px-2 py-2 border w-full mt-1' type="password" name="password" id="" placeholder='Enter your password'
                    {...register("password", { required: true, minLength: 6 })}
                />
                {
                    errors.password && (
                        <span className='text-[#9d2235]'>Please enter a password password must be 8 char long</span>
                    )
                }
                <input className=' cursor-pointer  mx-auto mt-5 bg-[#9d2235]  text-white font-bold px-8 py-3 flex gap-2 items-center justify-center hover:bg-black' type="submit" value="Login" />
            </form>
            <p className='px-4 py-2 text-[#9d2235] text-center mt-2'
                onClick={handleGoogleLogin}
            >Continue with Gmail</p>

        </div>
    );
};

export default LoginPage;
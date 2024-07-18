import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { apiLogin } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from './preview/loader';

const LoginForm = () => {
const [isSubmitting,setIsSubmitting]=useState(false);
const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true)
    
    try {
      const res= await apiLogin({
        userName:data.username,
        password: data.password
      })

      console.log("Response: ",res.data)
      toast.success(res.data)
      //redirect to dashboard
      setTimeout(() => {
        navigate('/dashboard');
      },5000);

    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.!");
      
    }
    finally{
      setIsSubmitting(false)
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center mt-10 mb-8">
      <div className="relative mb-4">
        <User className="absolute text-[#FCC73F]" />
        <input
          type="text"
          className="border-b-2 border-[#FCC73F] bg-transparent px-4 w-3/4 transition duration-200"
          placeholder="username"
          {...register("username", { required: "username required" })}

        />
      </div>
      <div className="relative mb-4">
        <Lock className="absolute text-[#FCC73F]" />
        <input
          type="password"
          className="border-b-2 border-[#FCC73F] bg-transparent px-4 w-3/4 transition duration-200"
          placeholder="Password"
          {...register("password", { required: "password needed" })}

        />
         {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
     
      <button
        type="submit"
        className="button rounded-full w-40 h-10 bg-[#12071F] text-[#FCC73F] uppercase font-bold shadow-md hover:border-purple-600 hover:outline-none transition duration-200"
      >
        
        {isSubmitting ? <Loader />
   : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;

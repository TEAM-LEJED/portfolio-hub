import React, { useEffect, useState } from 'react';
import { Lock, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { apiCheckUsernameExists, apiSignup } from '../services/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const checkUserName = async (userName) => {
    try {
      const res = await apiCheckUsernameExists(userName)
      console.log(res.data);
      const user = res.data.user
      if (user) {
        setUsernameNotAvailable(true)
      } else {
        setUsernameAvailable(true)
      }
    } catch (error) {
      console.log(error);

    };
  }

  const userNameWatch = watch('userName')
  console.log(userNameWatch)

  useEffect(() => {
    if (userNameWatch) {
      checkUserName(userNameWatch);
    }

  }, [userNameWatch])

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      email: data.email,
      password: data.password,
      confirmedPassword: data.confirmedPassword
    };
    if (data.otherNames) {
      payload = { ...payload, otherNames: data.otherNames };
    }

    try {
      const res = await apiSignup(payload);
      console.log(res.data);
      toast.success(res.data);
      setTimeout(() => {
        navigate('/login');
      }, 5000);


    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center mt-2 mb-8">
      <div className="relative mb-4">
        <User className="absolute text-[#FCC73F]" />
        <input
          id="First Name"
          type="text"
          className="border-b-2 border-[#FCC73F] bg-transparent px-4 w-3/4 transition duration-200"
          placeholder="First Name"
          {...register("firstName", { required: "First Name required" })}
        />
        <User className="absolute text-[#FCC73F]" />
        <input
          id="Last Name"
          type="text"
          className="border-b-2 border-[#FCC73F] bg-transparent px-4 w-3/4 transition duration-200"
          placeholder="Last Name"
          {...register("lastName", { required: "Last Name required" })}
        />
        <User className="absolute text-[#FCC73F]" />
        <input
          id="Other Name"
          type="text"
          className="border-b-2 border-[#FCC73F] bg-transparent px-4 w-3/4 transition duration-200"
          placeholder="Other Name"
          {...register("OtherName")}
        />
        <User className="absolute text-[#FCC73F]" />
        <input
          id="username"
          type="text"
          className="border-b-2 border-[#FCC73F] bg-transparent px-4 w-3/4 transition duration-200"
          placeholder="username"
          {...register("userName", {
            required: "username required",
            minLength: { value: 6, message: "username must be at least 6 characters" },
          })}
        />
        {errors.userName && (
          <p className="text-red-500">{errors.userName.message}</p>
        )}
        {
          usernameAvailable && <p className='text-green-500'>Username available!</p>
        }
        {
          usernameNotAvailable && <p className='text-red-500'>Username not available!</p>
        }

      </div>
      <div className="relative mb-4">
        <Lock className="absolute text-[#FCC73F]" />
        <input
          id="email"
          type="email"
          className="border-b-2 border-[#FCC73F] bg-transparent px-4 w-3/4 transition duration-200"
          placeholder="email"
          {...register("email", { required: "email required" })}
        />
        {errors.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="relative mb-4">
        <Lock className="absolute text-[#FCC73F]" />
        <input
          id="password"
          type="password"
          className="border-b-2 border-[#FCC73F] bg-transparent px-4 w-3/4 transition duration-200"
          placeholder="Password"
          {...register("password", { required: "password needed" })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <div className="relative mb-4">
        <Lock className="absolute text-[#FCC73F]" />
        <input
          id="confirmedPassword"
          type="password"
          className="border-b-2 border-[#FCC73F] bg-transparent px-4 w-3/4 transition duration-200"
          placeholder="confirm password"
          {...register("confirmedPassword", { required: "password doesn't match" })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="button rounded-full w-40 h-10 bg-[#12071F] text-[#FCC73F] uppercase font-bold shadow-md hover:border-purple-600 hover:outline-none transition duration-200"
      >
        {isSubmitting ? "loading..." : <span>Sign Up</span>}
      </button>
    </form>
  );
};

export default SignupForm;

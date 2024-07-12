import React from 'react';
import { Lock, User } from 'lucide-react';
import { useForm } from 'react-hook-form';

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center mt-4 mb-8">
    <div className="relative mb-4">
        <User className="absolute text-[#FCC73F]" />
        <input
          id="username"
          type="text"
          className="border-b-2 border-[#FCC73F] bg-transparent px-4 w-3/4 transition duration-200"
          placeholder="username"
          {...register("username", { required: "username required" })}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
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
          id="password"
          type="password"
          className="border-b-2 border-[#FCC73F] bg-transparent px-4 w-3/4 transition duration-200"
          placeholder="confirm password"
          {...register("password", { required: "password needed" })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="button rounded-full w-40 h-10 bg-[#3D5A5E] text-[#FCC73F] uppercase font-bold shadow-md hover:border-purple-600 hover:outline-none transition duration-200"
      >
        <span>Sign Up</span>
      </button>
    </form>
  );
};

export default SignupForm;

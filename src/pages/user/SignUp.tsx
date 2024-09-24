
import React from 'react';
import {  Button, } from "@nextui-org/react";
import { signUpSchema } from '@/services/zodeSchema/login';
import { z } from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from '@/api/user';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
type SignUpFormType = z.infer<typeof signUpSchema>

const SignUp: React.FC = () => {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    },
    mode:"onTouched"
  });


  const onSubmit = async(data: SignUpFormType) => {
    try {
      console.log(data);
      const response = await signUp(data)
      console.log('....',response?.data.message);
      if(response?.status == 200){
        toast.success(response.data.message)
        navigate('/otp',{
          state:{
            email:data.email,
            name:data.name,
            phone:data.phone,
            password:data.password
          }
        })
      }
      
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <div className="flex justify-center  absolute inset-0 -z-10 h-full w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

      <div className="bg-blue-600 sm:w-[30%] p-8 sm:p-12 rounded-3xl shadow-2xl text-center backdrop-filter backdrop-blur-sm bg-opacity-5 border border-blue-500">
        <h2 className='text-white mb-5 font-semibold text-3xl'>Sign Up</h2>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register('name')}
            className='mt-3 border-blue-700 text-white shadow appearance-none border rounded-xl w-full py-3 px-6 leading-tight focus:outline-none focus:shadow-outline  backdrop-blur-sm bg-white/20 placeholder-white 
           hover:bg-white/40 hover:border-blue-500 transition duration-200 ease-in-out text-md'
            placeholder='Name'
          />  
          {errors.name && <p className='text-red-500'>{errors.name.message}</p>}        
          <input
            type="email"
            {...register('email')}
            className='mt-3 border-blue-700 text-white shadow appearance-none border rounded-xl w-full py-3 px-6 leading-tight focus:outline-none focus:shadow-outline  backdrop-blur-sm bg-white/20 placeholder-white 
             hover:bg-white/40 hover:border-blue-500 transition duration-200 ease-in-out text-md' 
            placeholder='Email'
            
          />    
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}        
      
          <input
            type="text"
            {...register('phone')}
            className='mt-3 border-blue-700 text-white shadow appearance-none border rounded-xl w-full py-3 px-6 leading-tight focus:outline-none focus:shadow-outline  backdrop-blur-sm bg-white/20 placeholder-white 
             hover:bg-white/40 hover:border-blue-500 transition duration-200 ease-in-out text-md' 
            placeholder='Phone'
          />    
                    {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}        
      
          <input
            type="password"
            {...register('password')}
            className='mt-3 border-blue-700 text-white shadow appearance-none border rounded-xl w-full py-3 px-6 leading-tight focus:outline-none focus:shadow-outline  backdrop-blur-sm bg-white/20 placeholder-white 
             hover:bg-white/40 hover:border-blue-500 transition duration-200 ease-in-out text-md'
            placeholder='Password'
            autoComplete="off"
          />   
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}        
       
          <input
            type="password"
            {...register('confirmPassword')}
            className='mt-3 border-blue-700 text-white shadow appearance-none border rounded-xl w-full py-3 px-6 leading-tight focus:outline-none focus:shadow-outline  backdrop-blur-sm bg-white/20 placeholder-white 
          hover:bg-white/40 hover:border-blue-500 transition duration-200 ease-in-out text-md'
            placeholder='Confirm password'
          />
                    {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}        

          <div className="mt-5 self-center w-[50%]">
            <Button
              radius="full"
              type='submit'
              className="bg-gradient-to-tr mt-2 mb-3 font-semibold from-pink-500 to-yellow-500 text-white shadow-lg w-full"
            >
              Sign Up
            </Button>
          </div>
        </form>
        <span className='text-white mt-3 '>Already have a account ? <span className='text-blue hover:font-semibold hover:text-green-700 m-5 cursor-pointer'>Login </span></span>
      </div>
    </div>
  );
}

export default SignUp;



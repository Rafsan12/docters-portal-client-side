import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
      signInWithEmailAndPassword,
      eUser,
      eLoading,
      eError,
    ] = useSignInWithEmailAndPassword(auth);
    let singInError;

    if( eLoading || gLoading ){
      return <Loading></Loading>
     

    }

    if(eError || gError ){
      singInError= <p>{eError?.message || gError?.message}</p>

    }

    if(gUser){
        console.log(gUser);
    }
    const onSubmit = data => {
      signInWithEmailAndPassword(data.email, data.password)
      console.log(data);
    }
    return (
        <div className='flex h-screen justify-center items-center'>
           <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-2xl font-bold">Log in!</h2>
    <form onSubmit={handleSubmit(onSubmit)}>

    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text"> Email</span>
    
  </label>
  <input 
  type="email" 
  placeholder="Your Email Address" 
  class="input input-bordered w-full max-w-xs" 
  {...register("email",  {
    register:{
      value: true,
      message:' Email is Required'
    },
    pattern:{
      value: /[A-Za-z]{3}/,
    message: 'please enter your email address'

    }
       
  })}
  />
  <label class="label">
  {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
    
    
  </label>
</div>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text"> Email</span>
    
  </label>
  <input 
  type="password" 
  placeholder="Enter Your Valid Password" 
  class="input input-bordered w-full max-w-xs" 
  {...register("password",  {
    register:{
      value: true,
      message:' Password is Required'
    },
    minLength:{
      value: 6,
    message: 'Must be at least 6 characters or longer'
    }
  })}
  />
  <label class="label">
  {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type === ' minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
    
    
  </label>
</div>

{
  singInError
}
      
      <input className='btn btn-info w-full max-w-XS' type="submit" value='Login' />
    </form>



    <div class="divider">OR</div>
    <button 
    onClick={() => signInWithGoogle()}
    
    class="btn btn-outline btn-info">Continue with Google</button>
    

  
    
    </div>
  </div>
</div>
      
    );
};

export default Login;
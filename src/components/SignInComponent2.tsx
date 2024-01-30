import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Define Zod schema
const schema =  z.object({
  username: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <main className="flex-1 flex flex-col gap-4 items-center p-4 justify-center">
      <section className="w-full max-w-md">
        <h1 className="font-semibold text-2xl dark:text-zinc-100 text-zinc-900 w-full mb-1">
          Sign in
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8 w-full">
          New to demo? <a href="/register" className="dark:text-blue-400 text-blue-600 underline underline-offset-2 font-medium">Create an account</a>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-3 w-full">
          <div className="grid grid-cols-1 gap-2">
            <label htmlFor="email" className="font-medium dark:text-zinc-300 text-zinc-900 text-sm">Email</label>
            <input {...register('email')} id="email" type="email" className="rounded-md py-1 px-3 dark:bg-zinc-800 dark:text-zinc-300 border bg-zinc-50 border-zinc-300 dark:border-zinc-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:bg-zinc-900 focus:bg-white focus:ring-opacity-60" />
              {errors.email && errors.email.message && <p>{errors.email.message as string}</p>}
          </div>
          <label htmlFor="password" className="font-medium dark:text-zinc-300 text-zinc-900 text-sm">Password</label>
          <input {...register('password')} id="password" type="password" className="rounded-md py-1 px-3 dark:bg-zinc-800 dark:text-zinc-300 border bg-zinc-50 border-zinc-300 dark:border-zinc-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:bg-zinc-900 focus:bg-white focus:ring-opacity-60" />
          {errors.password && errors.password.message && <p>{errors.password.message as string}</p>}
          <button type="submit" className="dark:bg-zinc-100 bg-zinc-900 border-zinc-900 py-1.5 border dark:border-zinc-100 rounded-md mt-2 dark:text-zinc-900 text-zinc-100 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed">Sign In</button>
        </form>
        <hr className="h-0 border-t mt-8 dark:border-zinc-600 border-zinc-300" />
      <p className="-mt-2.5 text-xs text-center dark:text-zinc-400 text-zinc-500">
        <span className="dark:bg-zinc-900 bg-zinc-50 px-4">Or with</span>
      </p>
      <form
        action="/api/auth/signin"
        method="post"
        className="w-full max-w-md mt-6 flex flex-col gap-2"
      >
        <button
          value="google"
          name="provider"
          className="w-full dark:bg-zinc-100 p-1.5 border border-zinc-300 dark:border-zinc-100 flex justify-center items-center gap-2 rounded-md mt-2 dark:text-zinc-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-auto"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 256 262"
          >
            <path
              fill="#4285F4"
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            ></path>
            <path
              fill="#34A853"
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            ></path>
            <path
              fill="#FBBC05"
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
            ></path>
            <path
              fill="#EB4335"
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            ></path>
          </svg>
           Sign in with Google
        </button>
      </form>
      </section>
    </main>
  );
}
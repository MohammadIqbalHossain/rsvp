import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { BsLinkedin } from 'react-icons/bs';
import Modal from './Modal';
import { useForm } from 'react-hook-form';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';

function Form() {

  const { register, formState: { errors }, handleSubmit } = useForm();



  const [
    signInWithGoogle,
    googleUser,
    googleLoading,
    googleError
  ] = useSignInWithGoogle(auth);

  if (googleLoading) {
    return <Spinner />
  }

  let authError;
  if (googleError) {
    authError = <p className="text-sm text-red-600">
      {googleError?.message}
    </p>

  }


  const onSubmit = data => {

    const email = data.email
    const url = `https://nameless-reaches-54875.herokuapp.com/login`
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.setItem('accessToken', data?.accessToken);
      })
  };





  return (
    <div>
      <div className="md:w-[600px] bg-gradient-to-br from-blue-300 to-green-500 h-screen">
        <h1 className="text-center text-red-500 font-bold text-5xl uppercase">Rsvp</h1>

        <p className="text-left m-5 text-white font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque fugiat dignissimos totam odit, quisquam incidunt ipsam quidem est quis animi, necessitatibus facilis alias tempora, facere aliquid fugit amet? Laboriosam praesentium ex obcaecati aut sint quos earum doloremque deserunt recusandae voluptate ipsum, placeat voluptates accusantium. Dignissimos porro dolores tenetur consectetur!</p>


        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mx-10 flex justify-between">

            <div className="form-control w-full max-w-xs">

              <label className="label">
                <span className="label-text">Enter Your Name.</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required"
                  },
                })}
              />

              <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
              </label>

            </div>

            <div className="form-control w-full max-w-xs ml-5">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required"
                  },
                  pattern: {
                    value: /(.+)@(.+){2,}\.(.+){2,}/,
                    message: 'Your email is not valid'
                  }
                })}
              />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>

          </div>

          <div className="mx-10 flex justify-between">

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Answer.</span>
              </label>
              <input
                name="answer"
                type="text"
                placeholder="Your Answer"
                className="input input-bordered"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Answer is required"
                  },
                })}
              />

              <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
              </label>
            </div>

            <div className="form-control w-full max-w-xs ml-5">
              <label className="label">
                <span className="label-text">Conflict of interect screening.</span>
              </label>
              <input
                name="screening"
                type="text"
                placeholder="Please write answer."
                className="input input-bordered"
                {...register("name", {
                  required: {
                    value: true,
                    message: "This field is required"
                  },
                })}
              />

              <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
              </label>
            </div>

          </div>


          <div className="ml-10 mt-20 flex">
            <input type="radio" name="radio-2" className="radio radio-primary" checked />
            <p className="mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus quod consequuntur error odio optio sed aliquam, sunt ipsa quam?</p>
          </div>


          <div className="flex justify-center items-center my-10">
            <button className="btn mr-10 uppercase">
              <label htmlFor="my-modal-6" className="btn modal-button">select slot</label>
            </button>


            <input
              className="form-control mt-4 btn btn-primary"
              type="submit"
              value="Submit"
            />

          </div>

        </form>


        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center my-10 flex-col">
            <button className="flex items-center border-2 border-black p-3 rounded-lg text-lg hover:bg-primary hover:text-white"
              onClick={() => signInWithGoogle()}
            >
              <FcGoogle className="mx-5 text-2xl" />
              Continue with google
            </button>

            <h2>{authError}</h2>
          </div>

          <div className="flex justify-center items-center my-10 ml-5">
            <button className="flex items-center border-2 border-black p-3 rounded-lg text-lg hover:bg-primary hover:text-white"

            >
              <BsLinkedin className="mx-5 text-2xl" />
              Continue with Linkedin
            </button>
          </div>
        </div>

      </div>
      <Modal />
    </div>
  )
}

export default Form
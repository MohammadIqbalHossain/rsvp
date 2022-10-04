import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { BsLinkedin } from 'react-icons/bs';
import Modal from './Modal';

function Form() {
  return (
    <div>
      <div className="md:w-[600px] bg-gradient-to-br from-blue-300 to-green-500 h-screen">
        <h1 className="text-center text-red-500 font-bold text-5xl uppercase">Rsvp</h1>

        <p className="text-left m-5 text-white font-semibold text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque fugiat dignissimos totam odit, quisquam incidunt ipsam quidem est quis animi, necessitatibus facilis alias tempora, facere aliquid fugit amet? Laboriosam praesentium ex obcaecati aut sint quos earum doloremque deserunt recusandae voluptate ipsum, placeat voluptates accusantium. Dignissimos porro dolores tenetur consectetur!</p>


        <div className="mx-10 flex justify-between">

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs" />
          </div>

          <div className="form-control w-full max-w-xs ml-5">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs" />
          </div>

        </div>

        <div className="mx-10 flex justify-between">

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs" />
          </div>

          <div className="form-control w-full max-w-xs ml-5">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs" />
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
          <button className="btn btn-primary uppercase">Submit</button>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center my-10">
            <button className="flex items-center border-2 border-black p-3 rounded-lg text-lg hover:bg-primary hover:text-white"

            >
              <FcGoogle className="mx-5 text-2xl" />
              Continue with google
            </button>
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
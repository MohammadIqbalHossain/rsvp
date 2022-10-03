import React from 'react'

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

      </div>
    </div>
  )
}

export default Form
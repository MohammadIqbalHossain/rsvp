import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { ImLinkedin } from 'react-icons/im';


function NewForm() {
    return (
        <div class="p-5">
            <div class="mt-8 p-4">
                <div>
                    <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">Full Name</div>
                    <div class="flex flex-col md:flex-row">
                        <div class="w-full flex-1 mx-2 svelte-1l8159u">
                            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input placeholder="First Name" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                        </div>
                        <div class="w-full flex-1 mx-2 svelte-1l8159u">
                            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input placeholder="Last Name" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row">
                        <div class="w-full mx-2 flex-1 svelte-1l8159u">
                            <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Username</div>
                            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input placeholder="Just a hint.." class="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                        </div>
                        <div class="w-full mx-2 flex-1 svelte-1l8159u">
                            <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Your Email</div>
                            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input placeholder="jhon@doe.com" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center md:flex-row p-2 mt-4">
                    <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition my-2 md:my-0"><FcGoogle className="mx-2 text-2xl"/>Continue with Google</button>

<button class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200  bg-gray-100 text-gray-700 border duration-200 ease-in-out  border-gray-600 transition md:ml-2 my-2 md:my-0"><ImLinkedin className="mx-2 text-2xl"/> Continue with Linkedin</button>

                  

                    <div class="flex-auto flex flex-row-reverse">
                        <button class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer  hover:bg-teal-600  bg-teal-600 text-teal-100 
        border duration-200 ease-in-out 
        border-teal-600 transition my-2 md:my-0">Select Slot</button>
                        <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-200  
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out  
        border-teal-600 transition my-2 md:my-0">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewForm
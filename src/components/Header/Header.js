import React from 'react';
import './Header.css';
import image from '../../Assets/master-image.jpg'
import Form from '../Form/Form';

function Header() {
  return (
    <div className="flex justify-between items-center border bg-gradient-to-br from-sky-400 to-green-500">


      <div className="md:w-[900px] md:h-[500px]">

        <div className="w-full">
          <img src={image} alt="" />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium laboriosam magnam minus rem quidem, deleniti cumque porro aperiam at delectus. Modi neque vitae sunt nostrum ratione voluptates perferendis enim dicta amet quasi quidem a nisi voluptas eum nemo fugiat sint et consectetur error, possimus repellat eaque inventore aliquam. Voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus et recusandae voluptates facere provident id ab, modi rerum dolores laborum iste incidunt non odit, molestiae ut nobis est quidem nostrum.
        </p>
      </div>

      <div>
        <Form />
      </div>

    </div>
  )
}

export default Header
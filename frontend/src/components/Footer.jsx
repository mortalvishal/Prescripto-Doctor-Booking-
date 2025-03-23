import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* -------Left Section------ */}
            <div>
                <img className='mb-5 w-40' src={assets.logo}/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>A doctor booking website simplifies healthcare access by allowing patients to find, compare, and schedule appointments with doctors online. It features real-time availability, patient reviews, and secure booking options. Users can search by specialty, location, or insurance, ensuring a seamless experience.</p>
            </div>
            {/* -------Center Section------ */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* -------Right Section------ */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 987654321</li>
                    <li>admin@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            {/* --------CopyRight Text-------- */}
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright © 2024 Prescripto - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
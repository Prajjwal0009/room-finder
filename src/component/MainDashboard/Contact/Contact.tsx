import React from 'react'
import { useForm } from 'react-hook-form'

const Contact = (props: any) => {
  const { onSubmit } = props
  const { register, handleSubmit } = useForm();
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col  justify-center sm:py-12">
      <img src='https://ap.rdcpix.com/779680209/03369f3ab67dd55cb296e98ee25fb0fdl-m4xd-w1020_h770_q80.jpg' alt='kjbhv' className='absolute w-full h-[700px] top-[55px]' />

      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-indigo-500 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">C</div>
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Contact Us</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">Fill in the form below to get in touch with us.</p>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label htmlFor="name" className="leading-loose">Name</label>
                  <input type="text" id="name" {...register('name')} placeholder="Your Name" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="leading-loose">Email</label>
                  <input type="email" id="email" {...register('email')} placeholder="Your Email" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="leading-loose">Message</label>
                  <textarea id="message" {...register('message')} placeholder="Your Message" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="leading-loose">Phone</label>
                  <input type="text" id="phone" {...register('phone')} placeholder="Your Number" className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button onClick={handleSubmit(onSubmit)} className="bg-indigo-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-indigo-600 transition-colors duration-300">
                  <span >Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact





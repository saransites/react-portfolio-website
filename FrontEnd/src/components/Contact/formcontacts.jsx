import React, { useState } from "react";
import axios from 'axios'

const Formcontacts = () => {
  const [data,setdata]=useState(
    {
      name: "",
      email:"",
      message:""
    }
  )
  const handlechange=(e)=>{
    setdata({...data,
      [e.target.name]:e.target.value
    })
  }
  console.log()
  const handlesubmit= async (e)=>{
    e.preventDefault()
    try{
      const res=await axios.post(`${window.location.origin}/sendemail`,{
        name: data.name,
        email: data.email,
        message: data.message
      })
      if(res.status == 200){
        alert(res.data + "Check Your Gmail")
      }
    }catch(err){
      console.error(err.message)
    }
  }
  return (
    <section className="body-font relative">
      <div className="text-[var(--text)] p-4">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
            Contact Us
          </h1>
        </div>
        <form onSubmit={handlesubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handlechange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  onChange={handlechange}
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></input>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handlechange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <input type="submit" className="cursor-pointer flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-all duration-500">
              </input>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Formcontacts;

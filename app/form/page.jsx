'use client'
import React from "react";
import tem12 from "../../public/temp12.jpg"
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
// import { FaPhone } from "react-icons/fa";
// // import { CiCircleRemove } from "react-icons/ci";
// import contactposter from "../img/contact-poster.jpg";
// import StudentsIonfo from "./StudentsIonfo";
// import Footer from "./Footer";
// import { Link } from "react-router-dom";
import Link from "next/link";
import Navigation from "@/components/Navigation";
export default function Contactform() {




  const [state, handleSubmit] = useForm("xblrwojo");

  const handleFormSubmit = (event) => {
    // Your custom form validation logic goes here
    // For example, check if name, email, and message are not empty
    if (!event.target.name.value || !event.target.email.value || !event.target.message.value) {
      // Show an error message or handle the validation error
      console.error("Please fill out all required fields");
      return;
    }

    // If validation passes, proceed with the form submission
    handleSubmit(event);
  };

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <>
      <main className="bg-gray-100">
        <Navigation />
        
        <div className="bg-gray-100 flex flex-col md:flex-row justify-center gap-4 mx-auto">
          <div className="w-full md:w-auto flex flex-col m-2" >
            <div className="header-text p-4 flex bg-gray-900 " >
              <span>
                <h2 className="md:text-3xl text-2xl ml-4 font-bold text-white">Request Callback</h2>
                <h6 className=" text-white ml-4">Fill out this form below!</h6>
              </span>

            </div>
            <form onSubmit={handleFormSubmit} className="grid grid-cols justify-center align-items-center gap-3">
              
              <input id="Username" type="Username" name="name" placeholder="Enter You Name" className="mt-2 p-2"

                required
              />
              <ValidationError
                prefix="Username"
                field="name"
                errors={state.errors}
              />
              <input id="email" type="email" name="email" placeholder="Enter Your Email"

                className=" p-2"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <input id="Phone" name="Phone" placeholder="Enter Your Phone no."

                className=" p-2"
                required
              />
              <ValidationError
                prefix="Phone"
                field="Phone"
                errors={state.errors}
              />
              <label htmlFor="course" className="text-muted text-start md:ml-0 ml-2" >Service Interested*</label>
              <select name="course" id="course" className="p-2">
                <option >Select Course</option>
                <option value="Data Science">Cars Rental</option>
                <option value="Web Development">Buying</option>
                <option value="Cloud computing">Order</option>
                <option value="Cyber Security">Other</option>
              </select>
              <ValidationError
                prefix="Course"
                field="Course"
                errors={state.errors}
              />
              <label htmlFor="course" className="text-muted text-start ">Message</label>
              <textarea
                id="message"
                name="message"
                className="my-0 p-2"
                rows="3"
                cols="50"
                placeholder="text.."

              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}

              />
              <button type="submit" disabled={state.submitting} className="m-3 bg-gray-900 text-white mx-auto px-8 py-2 rounded-lg" >
                Submit
              </button>
              <p className="text-muted" >By continuing, you confirm that you have read and agreed to Ed-Tech&apos;s <span >Terms</span> and <span >Privacy policy</span></p>

            </form>
          </div>
          <Image src={tem12} alt="" className="h-[600px] m-2 w-[600px]" />
        </div>
      </main>

    </>
  );
}
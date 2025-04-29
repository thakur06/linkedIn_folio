"use client";
import React, { useRef, useState, useEffect } from "react";
import { Util } from "../libs/utils";
import { Label } from "../Components/Label";
import Input from "../Components/Input";
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({ message: "" });
  const [lname, setLname] = useState("");
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [emailSuccess, setEmailSuccess] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timeout = setTimeout(() => setEmailSuccess(""), 4000);
    return () => clearTimeout(timeout);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name.trim() || !emailAddress.trim()) {
      setEmailSuccess("Please fill in all required fields");
      setTimeout(() => setEmailSuccess(""), 4000);
      return;
    }

    setEmailSuccess("Sending email...");
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_PUBLIC_KEY }
      )
      .then(
        () => {
          setEmailSuccess("Sent Successfully");
          setFormData({ message: "" });
          setName("");
          setLname("");
          setEmailAddress("");
        },
        (error) => {
          setEmailSuccess(`Failed: ${error.text}`);
        }
      )
      .finally(() => {
        setTimeout(() => setEmailSuccess(""), 4000);
      });
  };

  return (
    <div className="flex w-full   text-white py-12 p-5">
      <style>
        {`
          @keyframes slideInFromLeft {
            0% { transform: translateX(-50px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .input-focus {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .input-focus:focus {
            transform: scale(1.02);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
          }
          .button-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .button-hover:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>

      <div className="w-full space-y-6 text-center text-white ">
      <h2 className="text-4xl font-bold text-center mt-[-3rem] md:mt-0 font-['Shojumaru',cursive] relative">
          <span className="relative inline-block">
            EXPERIENCE
            <span className="absolute h-1 w-full bg-[#66d1f3] bottom-[-8px] left-0 transform scale-x-100 origin-left transition-transform duration-500"></span>
          </span>
        </h2>

        <form className="space-y-6 w-full md:p-10 p-5 " ref={form} onSubmit={sendEmail}>
          <div
            className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 gap-3 ${
              isVisible ? "animate-fadeIn" : "opacity-0"
            }`}
            style={{
              animation: isVisible ? "fadeIn 0.7s ease-out 0.3s forwards" : "none",
            }}
          >
            <LabelInputContainer>
              <Label htmlFor="firstname">First Name</Label>
              <Input
                id="firstname"
                func={setName}
                value={name}
                placeholder="Abhishek"
                name="user_name"
                type="text"
                className="input-focus"
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="lastname">Last Name</Label>
              <Input
                id="lastname"
                func={setLname}
                value={lname}
                placeholder="Rajput"
                type="text"
                className="input-focus"
              />
            </LabelInputContainer>
          </div>

          <LabelInputContainer
            className={`${
              isVisible ? "animate-fadeIn" : "opacity-0"
            }`}
            style={{
              animation: isVisible ? "fadeIn 0.7s ease-out 0.6s forwards" : "none",
            }}
          >
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              func={setEmailAddress}
              value={emailAddress}
              placeholder="your.email@gmail.com"
              name="user_email"
              type="email"
              className="input-focus"
            />
          </LabelInputContainer>

          <LabelInputContainer
            className={`${
              isVisible ? "animate-fadeIn" : "opacity-0"
            }`}
            style={{
              animation: isVisible ? "fadeIn 0.7s ease-out 0.9s forwards" : "none",
            }}
          >
            <Label htmlFor="message">Message</Label>
            <textarea
              className="w-full h-24 border-none bg-[#E1EBED] text-[#291c3a] rounded-md px-4 py-3 text-sm placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 input-focus resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              id="message"
              name="message"
              placeholder="Enter your message"
            />
          </LabelInputContainer>

          <button
            className={`relative  p-4 text-center pb-3 h-12 text-white font-medium rounded-md bg-[#63b9f7] button-hover overflow-hidden ${
              isVisible ? "animate-fadeIn" : "opacity-0"
            }`}
            style={{
              animation: isVisible ? "fadeIn 0.7s ease-out 1.2s forwards" : "none",
            }}
            type="submit"
          >
            Send →
            <BottomGradient />
          </button>

          {emailSuccess && (
            <div
              className="font-bold text-rose-400"
              style={{
                animation: "fadeIn 0.5s ease-out 1.5s forwards",
              }}
            >
              {emailSuccess}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={Util("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

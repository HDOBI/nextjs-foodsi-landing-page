"use client";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function ContactUS() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function submitUserData() {
    console.log("userInfo:", JSON.stringify(userInfo, null, 2));
  }

  return (
    <div className="flex flex-col gap-3 max-w-[800px] mx-auto py-10 sm:py-20 px-3">
      <h5 className="text-[40px] leading-[45px] sm:text-[45px] sm:leading-[50px] font-semibold text-center">
        Contact us
      </h5>
      <p className="max-w-[680px] mx-auto text-[20px] leading-[25px] sm:text-[24px] sm:leading-[29px] text-center">
        We'd love to hear from you. Send us a message and we’ll respond as soon
        as possible.
      </p>
      <div>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
          <Input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            label="Name/Restaurant"
          />
          <Input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            label="Email"
          />
        </div>
      </div>
      <p>
        <label className="text-[17px] font-medium pb-1.5">Message</label>
      </p>
      <textarea
        name="message"
        rows="5"
        value={userInfo.message}
        onChange={handleChange}
        className="outline-none border border-lightGray rounded-[10px] sm:rounded-[7px] p-2"
      />
      <Button
        name="Let's Talk"
        className="mt-1 sm:mt-2 py-3 sm:py-2 text-[21px] sm:text-[17px]"
        onClick={submitUserData}
      />
      <p className="font-medium text-center sm:text-left">
        By submitting this form, I agree to the{" "}
        <span className="text-orange">privacy policy.</span>
      </p>
    </div>
  );
}

export default ContactUS;

"use client"; // This marks the file as a client component
import { useState } from "react";
export default function Sun() {
  const [text, setText] = useState("");
  const showAlert = () => {
      alert("Email is sent");
  };
  return (
    <div className="container px-52 flex flex-col justify-center  items-center w-96 space-y-4 mx-auto m-52 p-6 rounded bg-neutral-100">
      {/* Header Section */}
      <div className="flex items-center justify-center space-x-5">
        <h2 className="text-3xl italic">To</h2>
        <label htmlFor="email"></label>
        <input
          id="email"
          list="email-send"
          type="text"
          placeholder="Choose receiver"
          className="bg-white w-80 min-h-10 max-h-11  outline-none rounded"
        />
        <datalist id="email-send">
          <option value="maftabsattar256@gmail.com"></option>
          <option value="xubairjamil@gmail.com"></option>
          <option value="musanaeem.01@outlook.com"></option>
        </datalist>
      </div>
      {/* Textarea Section */}
      <div className="flex items-center justify-center">
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Write message here..."
          className="w-96 bg-white min-h-[100px] p-2 outline-none block rounded"
        ></textarea>
      </div>
      {/* Button Section */}
      <div className="flex-box">
        <button
          onClick={showAlert}
          className="bg-green-500 w-28 rounded py-2 text-white self-end "
        >
          Send Mail
        </button>
      </div>
    </div>
  );
}


import React, { useState } from "react";

function Login({ setLoginForm }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-50">
      <div className="bg-white rounded p-5">
        <div className="flex items-center justify-between">
          <p>Login</p>
          <button
            onClick={() => {
              setLoginForm(false);
            }}
            className="text-[#292E1E]"
          >
            X
          </button>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label>Email</label>
              <input className="w-full border px-2 py-1 rounded border-gray-300"></input>
            </div>

            <div>
              <label>Password</label>
              <input className="w-full border px-2 py-1 rounded border-gray-300"></input>
            </div>
          </div>
        </div>
        
        
        <div className="flex justify-end">
          <button className="bg-[#B400DD] text-white mt-2 px-10 py-1 rounded">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;

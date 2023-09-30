"use client";
import Input from "@/components/Input/input.component";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center">
      <div className="">
        <Input
          onChange={() => {}}
          placeholder="Email"
          name="email"
          value={email}
          height="7.042253521126761vh"
          width="30.447916666666664vw"
        />

        <Input
          onChange={() => {}}
          placeholder="Email"
          name="email"
          value={email}
          height="7.042253521126761vh"
          width="30.447916666666664vw"
        />
      </div>
    </div>
  );
};

export default Login;

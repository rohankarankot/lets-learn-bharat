"use client";
import Input from "@/components/Input/input.component";
import { Button } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 ">
       <Button>
       {/* // <Image/> */}
       </Button>
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

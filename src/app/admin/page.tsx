"use client"

import Link from "next/link"

import { PrimaryBtn } from "@/hoc/CustomButton/Buttons"
import { FormInput } from "@/hoc/Input/input.component"
import { useState } from "react"
import { useDispatch } from "react-redux"

const Login = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const handleSubmit = (e: any) => {
    e.preventDefault()
    // validation logic
  }
  return (
    <div className="w-full max-w-[1280px] px-10 py-6 md:px-10 mx-auto h-screen">
      {/* 
        <SecondaryBtn className="text-white">second</SecondaryBtn>
        <LinkBtn className="text-white">link</LinkBtn> */}
      <div className="h-screen ">
        <h1 className="text-3xl text-center text-SurfieGreen font-semibold">
          Welcome back!
        </h1>
        {/* <!-- Left column container with background--> */}
        <div className="g-12 flex  flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          {/* <!-- Right column container --> */}
          <div className="mb-12 md:mb-0  lg:w-5/12 xl:w-5/12">
            <form>
              {/* <!-- identifier input --> */}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <FormInput
                  name="email"
                  type="text"
                  onChange={(e: any) => {
                    setFormData({ ...formData, email: e.target.value })
                  }}
                  placeholder="Email Address or username"
                  value={formData.email}
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <FormInput
                  name="password"
                  type="text"
                  onChange={(e: any) => {
                    setFormData({ ...formData, password: e.target.value })
                  }}
                  placeholder="password"
                  value={formData.password}
                />
              </div>

              <div className="mb-6 flex items-center justify-between">
                {/* <!--Forgot password link--> */}
                <a href="#!">Forgot password?</a>
              </div>

              {/* <!-- Login button --> */}
              <div className="text-center lg:text-left">
                <div>
                  <PrimaryBtn
                    className="text-white"
                    onClick={(e: any) => handleSubmit(e)}
                    loading={false}
                  >
                    Login
                  </PrimaryBtn>

                  <br />

                  <a
                    className="inline-flex  border-0 py-2 focus:outline-none  rounded cursor-pointer"
                    onClick={() => {}}
                  >
                    populate guest credentials
                  </a>
                </div>

                {/* <!-- Register link --> */}
                <Link href="/register">
                  <p className="mb-0 mt-2 pt-1  font-semibold">
                    Don't have an account?
                    <span className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
                      {" Register"}
                    </span>
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

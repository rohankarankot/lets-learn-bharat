"use client";
import { IMAGES } from "@/components/utils/constant";
import Wrapper from "@/components/utils/wrapper.component";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";

const Signup = () => {
  const [formValues, setFormValue] = useState<any>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [passwordCheck, setPasswordCheck] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false)

  useEffect(() => {
    if (
      formValues?.password?.length > 0 &&
      formValues?.confirm_password?.length > 0
    ) {
      if (formValues?.password === formValues?.confirm_password) {
        setPasswordCheck(false);
        setDisable(false)
      } else {
        setPasswordCheck(true);
        setDisable(true)
      }
    }
  }, [formValues?.password,formValues?.confirm_password]);

  const handleSubmit = (event: any) => {
    if(passwordCheck){
      setDisable(true)
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormValue((prev: any) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <Wrapper>
      <section className="py-10 ">
        <div className="h-full">
          <h1 className="text-5xl text-center from-neutral-500 font-semibold pb-10">
            CREATE AN ACCOUNT
          </h1>
          <h4 className="text-m text-center from-neutral-500 font-semibold pb-10">
            Already have an account?{" "}
            <Link href="/" className="text-purple-300 font-bold text-base">
              Log in
            </Link>
          </h4>
          {/* <!-- Left column container with background--> */}
          <div className="g-6 flex  flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <Image
                src={IMAGES?.FORM_IMAGE}
                width={500}
                height={500}
                alt="form-image"
              />
            </div>

            {/* <!-- Right column container --> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Please enter your first name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Please enter your last name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Please enter you email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="confirm_password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm_password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="•••••••••"
                    onChange={handleChange}
                    required
                  />
                  {passwordCheck && <p className="text-red-600">Your password and confirm password should match.</p>}
                </div>
                <div className="flex items-start mb-6 mt-8">
                  <div className="flex items-center h-5">
                    <input
                      name="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      I agree with the{" "}
                      <a href="#" className="text-purple-700 hover:underline ">
                        terms and conditions
                      </a>
                      .
                    </label>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className={`text-white bg-purple-700 ${disable?"":"hover:bg-purple-700"} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:purple-700 dark:${disable?"unset":"hover:bg-gray-300"}  ${disable?"bg-gray-300":"initial"}`}
                    disabled={disable}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
export default Signup;

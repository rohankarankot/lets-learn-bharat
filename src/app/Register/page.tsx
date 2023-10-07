"use client"

import { createUserWithEmailAndPassword } from "firebase/auth"
import Link from "next/link"

import { PrimaryBtn } from "@/hoc/CustomButton/Buttons"
import { FormInput } from "@/hoc/Input/input.component"
import { addDoc, collection } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { auth, db } from "../../../config/firebase.config"

const Signup = () => {
  const [form, setForm] = useState({
    name:"",
    email: "",
    password: "",
    cPassword: "",
  })
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false)
  const [disable, setDisable] = useState<boolean>(false)

  useEffect(() => {
    if (form?.password?.length > 0 && form?.cPassword?.length > 0) {
      if (form?.password === form?.cPassword) {
        setPasswordCheck(false)
        setDisable(false)
      } else {
        setPasswordCheck(true)
        setDisable(true)
      }
    }
  }, [form?.password, form?.cPassword])

  const handleRegister = (event: any) => {
    if (passwordCheck) {
      setDisable(true)
    }
    event.preventDefault()
    setLoading(true)
    createUserWithEmailAndPassword(auth, form?.email, form?.password)
      .then(async (userCredential) => {
        await addDoc(collection(db, "user"), {
          admin: true,
          uid: userCredential.user.uid,
        })
      })
      .catch((error) => {
        console.log("error", error)
        const errorCode = error.code
        const errorMessage = error.message
      })
      .finally(() => setLoading(false))
    router.push("/")
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target
    console.log("event?.target?.value", event.target)
    setForm({ ...form, [name]: value })
  }

  return (
    <div className="w-full max-w-[1280px] px-10 py-6 md:px-10 mx-auto">
      <div className="h-full">
        <h1 className="text-3xl text-center text-SurfieGreen font-semibold">
          Register Yourself
        </h1>
        {/* <!-- Left column container with background--> */}
        <div className="g-6 flex  flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          {/* <!-- Right column container --> */}
          <div className="mb-12 mt-10 md:mb-0  lg:w-5/12 xl:w-5/12">
            <form>
              {/* <!-- identifier input --> */}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <FormInput
                  name="name"
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter your name"
                  value={form.name}
                />
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <FormInput
                  name="email"
                  type="text"
                  onChange={handleChange}
                  placeholder="Email Address or username"
                  value={form.email}
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <FormInput
                  name="password"
                  type="text"
                  onChange={handleChange}
                  placeholder="password"
                  value={form.password}
                />
              </div>
              {/* <!-- Confirm Password input --> */}
              <div className="relative mb-6" data-te-input-wrapper-init>
                <FormInput
                  name="cPassword"
                  type="text"
                  onChange={handleChange}
                  placeholder="confirm password"
                  value={form.cPassword}
                />
              </div>
              {passwordCheck && (
                <p className="text-red-600">
                  Your password and confirm password should match.
                </p>
              )}

              <div className="mb-6 flex items-center justify-between">
                {/* <!--Forgot password link--> */}
                <a href="#!">Forgot password?</a>
              </div>

              {/* <!-- Login button --> */}
              <div className="text-center lg:text-left">
                <div>
                  <PrimaryBtn
                    className="text-white"
                    onClick={handleRegister}
                    loading={loading}
                  >
                    Lets Go
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
                <Link href="/login">
                  <p className="mb-0 mt-2 pt-1  font-semibold">
                    Already Registered?
                    <span className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
                      {" Login "}
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

export default Signup

"use client"

import { Router } from "next/router"
import { useState, useEffect } from "react"
import Loader from "./loader"

export const PageTransitionLoader = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    let prevPathName = window?.location?.pathname
    Router.events.on("routeChangeStart", (url) => {
      const currentPathName = url?.split("?")?.[0]
      if (currentPathName === prevPathName) return
      else setLoading(true)
    })

    Router.events.on("routeChangeComplete", (url) => {
      const currentPathName = url?.split("?")?.[0]
      if (prevPathName === currentPathName) return
      setLoading(false)
      prevPathName = currentPathName
    })
  }, [])

  return <>{loading && <Loader />}</>
}
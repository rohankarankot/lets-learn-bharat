"use client"
import { useRouter } from "next/navigation"
import { ReactNode, useEffect, useMemo } from "react"
import { useSelector } from "react-redux"

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter()
  const {
    auth: {
      user: { accessToken },
    },
  } = useSelector((state: any) => state)
  const ProtectedRoutes = useMemo(() => ["/dashboard", "/my-couprses"], [])

  useEffect(() => {
    let currentPath = window.location.pathname
    if (ProtectedRoutes?.includes(currentPath)) {
      !accessToken && router.push("/login")
    }
  }, [ProtectedRoutes, accessToken, router])

  return <>{children}</>
}

export default ProtectedRoute

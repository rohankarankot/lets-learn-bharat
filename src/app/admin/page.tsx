"use client"

import { useRouter } from "next/navigation";

const AdminPage = () => {
    const router=useRouter();
  return (
    <div onClick={()=>router.push("/admin/adminPages")}>AdminPage</div>
  )
}

export default AdminPage
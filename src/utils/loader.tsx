import React from "react"

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        zIndex: "10",
        position: "fixed",
        background: "rgba(0,0,0,0.98)",
        alignItems: "center",
        opacity: "0.9",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <img src="./page-loader.gif" alt="loader" />
    </div>
  )
}

export default Loader

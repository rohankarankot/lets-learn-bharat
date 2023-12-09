
export const Loader = () => {
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

export const Equiliser=()=>{
  return (
    <div
    style={{
     
      color:"red",
     
    }}
    >
      <img src="./Equalizer.gif" alt="loader"  className="h-[20px] bg-purple-500 " />
    </div>
  )
}

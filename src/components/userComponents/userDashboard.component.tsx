import React from "react"

const UserDashboardComponent = () => {
  return (
    <>
      <div className="bg-smoke h-full">
        <div>{"user dashboard content"}</div>
        <div className="general-statistic">
          <h2 className="text-pepermint font-bold text-3xl">
            Overview General Statistic
          </h2>
          <div className="flex flex-wrap my-[40px] ml-[5px]">
            <div className="flex">
              <h1 className="text-8xl font-bold text-pepermint">10</h1>
              <div className="w-[10%] my-auto">
                <h3 className="text-xl font-semibold text-black">
                  Certificate Earned
                </h3>
              </div>
            </div>
            <div className="flex">
              <h1 className="text-8xl font-bold text-pepermint">10</h1>
              <div className="w-[10%] my-auto">
                <h3 className="text-xl font-semibold text-black">
                  Certificate Earned
                </h3>
              </div>
            </div>
            <div className="flex">
              <h1 className="text-8xl font-bold text-pepermint">10</h1>
              <div className="w-[10%] my-auto">
                <h3 className="text-xl font-semibold text-black">
                  Certificate Earned
                </h3>
              </div>
            </div>
            <div className="flex">
              <h1 className="text-8xl font-bold text-pepermint">10</h1>
              <div className="w-[10%] my-auto">
                <h3 className="text-xl font-semibold text-black">
                  Certificate Earned
                </h3>
              </div>
            </div>
            </div>
            <div className="graph">
                {/* <Graph/> */}
            </div>
          </div>
        </div>
    </>
  )
}

export default UserDashboardComponent

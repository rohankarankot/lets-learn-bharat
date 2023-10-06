'use client'
import Card from "@/hoc/Card/custum.card"
import ChartField from "@/hoc/chart/custum.chart"
import { useEffect, useState } from "react"
import data from '../../mock-data/dashboard.data.json'
import StudentList from "./StudentList.dashboard"
const Dashboard = () => {
  const [time, setTime] = useState<Array<string>>(() => {
    const storedTime = window.localStorage.getItem('h');
    return storedTime ? JSON.parse(storedTime) : [];
  });

  useEffect(() => {
    const currentDate = new Date();

    if (currentDate.getMinutes() === 0) {
      const hours = currentDate.getHours();
      window.localStorage.setItem("h", JSON.stringify([...time, hours]));
      setTime((prevTime:any) => [...prevTime, hours]);
    }
  }, [new Date().getHours()]);

    
  return (
    <div>
    <div className="flex    lg:h-[300px]  justify-around h-auto">
    <div className="px-[12px] py-[12px] flex flex-wrap  gap-6  ">
      {
        data?.map((mappedData,index) => <Card className={'py-[20px] '} key={index}>
         <div className="flex flex-col  py-[20px]  px-[30px] gap-2 ">
         <p>{mappedData.name}</p>
          <p>{mappedData.total}</p>
          <div className="w-[150px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className={`bg-blue-600 h-2.5 rounded-full w-[${mappedData.increses}]`} ></div>
          </div>
         </div>
         
        </Card>)
      }

    </div>
    <div className=" w-[100%] ">
     <ChartField data={[12, 19, 3, 5, 2, 3]} labels={time}/>
    </div>
    
    </div>
    <StudentList/>
    </div>
  )
}

export default Dashboard
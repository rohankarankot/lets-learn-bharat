'use client';
import Card from "@/hoc/Card/custum.card";
import ChartField from "@/hoc/chart/custum.chart";
import { useEffect, useState } from "react";
import data from '../../mock-data/dashboard.data.json';
import StudentList from "./components/StudentList.dashboard";

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
      setTime((prevTime: any) => [...prevTime, hours]);
    }
  }, [new Date().getHours()]);

  return (
    <div className="h-[100vh] overflow-y-scroll scroll-auto ">
      <div className="ml-2 sm:flex w-full sm:flex-wrap">
        <div className="w-full sm:w-1/2 gap-3 sm:grid sm:grid-cols-2 p-4">
          {data?.map((mappedData, index) => (
            <Card
              key={index}
              className="p-4 sm:p-2 h-24  sm:w-auto text-sm sm:text-base mt-3 w-1/2"
            >
              <p>{mappedData.name}</p>
              <p>{mappedData.total}</p>
              <div className="bg-gray-200 rounded-full dark:bg-gray-700 ">
                <div
                  className={`bg-blue-600 h-[1vh] rounded-full w-[${mappedData.increses}]`}
                ></div>
              </div>
            </Card>
          ))}
        </div>
        <div className="w-auto sm:w-1/2 p-4">
          <ChartField data={[12, 19, 3, 5, 2, 3]} labels={time} />
        </div>
      </div>

      <StudentList />
    </div>
  );
};

export default Dashboard;

import Card from "@/hoc/Card/custum.card"
import data from '../../mock-data/dashboard.data.json'
import StudentList from "./StudentList.dashboard"
const Dashboard = () => {
  return (
    <div>
    <div className="flex    h-[300px]  justify-around">
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
    <div className=" bg-SurfieGreen w-[100%] ">

    </div>
    
    </div>
    <StudentList/>
    </div>
  )
}

export default Dashboard
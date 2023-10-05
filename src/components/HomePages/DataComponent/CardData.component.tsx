import CardWithLeftContent from "@/components/card-with-left-content"
import { Size } from "@/utils/Size/screen.Size"
import { useDispatch } from "react-redux"

import cmsData from '../../../mock-data/card.json'
const DataComponent = () => {
  const dispatch = useDispatch()
  // const cmsData = useSelector((state: any) => state.cmsData.cmsData)
  const deviceSize = Size()
  // useEffect(() => {
  //   // Dispatch the fetchData action when the component mounts
  //   dispatch(fetchCmsData())
  // }, [dispatch])

  console.log("!!!!",cmsData)

  return (
    <div
      className={`flex ${
        deviceSize.isMobile ? "gap-4" : "gap-20"
      } flex-wrap justify-center w-full pb-[30px]`}
    >
      {cmsData ? (
        cmsData.map((data: any) => (
          <CardWithLeftContent data={data} key={data.id} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default DataComponent

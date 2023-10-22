import CardWithLeftContent from "@/components/card-with-left-content"
import { Size } from "@/utils/Size/screen.Size"

import { useSelector } from "react-redux"
const DataComponent = () => {
  const cmsData = useSelector((state: any) => state.cmsData.cmsData)
  const deviceSize = Size()

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

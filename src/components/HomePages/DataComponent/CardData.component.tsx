import CardWithLeftContent from "@/components/card-with-left-content";
import Card from "@/hoc/Card/custum.card";
import { Size } from "@/utils/Size/screen.Size";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
const DataComponent = () => {
  const { cmsData, searchData } = useSelector((state: any) => state.cmsData)
  const deviceSize = Size()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className={`py-12`}>
    <Card className={`w-[${deviceSize.fullWidth}] p-6`}>
      <Carousel

  responsive={responsive}
  className="px-12 justify-evenly"
  //  infinite
  // autoPlay={true}
  autoPlaySpeed={3000}
  transitionDuration={500}
  keyBoardControl={true}
  customTransition="all .5"
  containerClass="carousel-container"
   arrows={true}
   
>
{cmsData ? (
  ( cmsData).map((data: any) => (
    <CardWithLeftContent data={data} key={data.id} />
  ))
) : (
  <p>Loading...</p>
)}
</Carousel>
</Card> 
</div>
 
   )
}

export default DataComponent

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AllCmsData } from '@/components/redux/slice/cmsData.slice'; // Import the specific action
import { CmsDataState } from '@/components/utils/declareType/type';
import CardWithLeftContent from '@/components/card-with-left-content';
import { Size } from '@/components/utils/Size/screen.Size';

const DataComponent = () => {
  const dispatch = useDispatch();
  const cmsData= useSelector((state:any) => state.cmsData.cmsData);
const deviceSize=Size();
  useEffect(() => {
    // Dispatch the fetchData action when the component mounts
    dispatch(AllCmsData());
  }, [dispatch]);

  console.log( cmsData?.cmsData);

  return (
    <div className={`flex ${deviceSize.isMobile?'gap-4':'gap-20'} flex-wrap justify-center w-full pb-[30px]`}>
      {cmsData ? (
        cmsData.map((data: any) => (
          <CardWithLeftContent data={data} key={data.id} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  
  );
  
};

export default DataComponent;

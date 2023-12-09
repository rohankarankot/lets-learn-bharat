import * as Yup from 'yup';

export interface AddProductInterface {
  image: string;
  title: string;
  time: string;
  price: string;
  free: boolean;
  offerPrice: string;
  instituteName: string;
  rating: string;
  ratingCount: string;
  id:any;
  isCertification:boolean
}

export const AddProductSchema = Yup.object().shape({
  image: Yup.string()
    .required("Image is required"),
  title: Yup.string().required("Title is required"),
  time: Yup.string().required("Time is required"),
  price: Yup.string().required("Price is required"),
  offer: Yup.boolean(),
  offerPrice: Yup.string(),
  instituteName: Yup.string().required("Institute name is required"),
  rating: Yup.string().required("Rating is required"),
  ratingCount: Yup.string().required("Rating count is required"),
  isCertification:Yup.string().required("Certification is required ")
});
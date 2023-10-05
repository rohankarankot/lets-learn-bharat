import * as Yup from 'yup';

const Schema = Yup.object().shape({
  tag: Yup.string().required('Tag is required'),
  image: Yup.string().url('Image must be a valid URL').required('Image is required'),
  title: Yup.string().required('Title is required'),
  time: Yup.string().required('Time is required'),
  price: Yup.string().required('Price is required'),
  offer: Yup.boolean(),
  offerPrice: Yup.string(),
  instituteName: Yup.string().required('Institute name is required'),
  rating: Yup.string().required('Rating is required'),
  ratingCount: Yup.string().required('Rating count is required'),
  primaryAction: Yup.string().required('Primary action is required'),
  buttonType: Yup.string().required('Button type is required'),
  ctaLabel: Yup.string().required('CTA label is required'),
  added: Yup.string().required('Added date is required'),
});

export default Schema;

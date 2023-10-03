
const Validator = ({ name, value }: any) => {
  // Define regular expressions and validation functions for each field
  const validators: { [key: string]: (value: string) => boolean } = {
    tag:(value)=>value.length>3,
    image: (value) => /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif))$/i.test(value),
    title: (value) => value.length > 0, // Example: Non-empty title
    time: (value) => /^\d+$/.test(value), // Example: Numeric time
    price: (value) => /^\d+(\.\d{1,2})?$/.test(value), // Example: Numeric price with up to 2 decimal places
    offerPrice: (value) => /^\d+(\.\d{1,2})?$/.test(value), // Example: Numeric offer price with up to 2 decimal places
    // Add more fields and their validation functions as needed
  };

  // Perform validation based on the name
  if (validators[name] && !validators[name](value)) {
    return <div className="error">Invalid {name}</div>;
  }

  // Return null if validation passes (no error)
  return null;
};

export default Validator;


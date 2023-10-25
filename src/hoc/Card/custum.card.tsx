const Card = ({ children, className, ...rest }: any) => {
  return (
    <div
      className={` bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

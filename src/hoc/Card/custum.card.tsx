const Card = ({ children, ...rest }: any) => {
  return (
    <div
      className={
        " max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-white"
      }
    >
      {children}
    </div>
  );
};

export default Card;

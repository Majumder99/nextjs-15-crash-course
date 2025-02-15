const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-[200px] h-[200px] bg-blue-500 border-2 rounded-lg">
        {children}
      </div>
    </>
  );
};

export default Card;

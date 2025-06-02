interface PrimaryCardProps {
  number: number;
  title: string;
}

const PrimaryCard = ({ number, title }: PrimaryCardProps) => {
  const words = title.split(" ");
  const isGrayCard = number === 2 || number === 3 || number === 4;
  return (
    <div
      className={` flex flex-col justify-between h-[193px] w-[187px] p-4 rounded-[30px] ${
        isGrayCard ? "bg-graycard" : "bg-white"
      }`}
    >
      <div>
        <p className={`${isGrayCard ? "text-white" : "text-black"} opacity-30`}>
          0{number}
        </p>
      </div>
      <div>
        {words.map((word, index) => (
          <p key={index} className="text-black text-[16px] font-bold">
            {word}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PrimaryCard;

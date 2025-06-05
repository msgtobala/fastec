interface RoundedDesignProps {
  size: "small" | "medium" | "large" | "xlarge";
  icon: React.ReactNode;
  isTransparent?: boolean;
  isPointer?: boolean;
}

const RoundedDesign = ({
  size,
  icon,
  isTransparent,
  isPointer,
}: RoundedDesignProps) => {
  const padding =
    size === "small" ? 2 : size === "medium" ? 4 : size === "large" ? 5 : 5;
  return (
    <div
      className={`rounded-full ${isPointer && "cursor-pointer"} p-${padding} ${
        isTransparent
          ? "bg-white border-2 border-gradient-secondary-to-primary"
          : "bg-gradient-secondary-to-primary"
      } `}
    >
      {icon}
    </div>
  );
};

export default RoundedDesign;

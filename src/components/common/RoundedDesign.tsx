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
  const paddingClass =
    size === "small"
      ? "p-2"
      : size === "medium"
      ? "p-4"
      : size === "large"
      ? "p-5"
      : "p-5";
  return (
    <div
      className={`rounded-full ${
        isPointer && "cursor-pointer"
      } ${paddingClass} ${
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

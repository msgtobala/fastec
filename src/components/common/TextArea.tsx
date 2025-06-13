interface TextAreaProps {
  label: string;
  required: boolean;
}

const TextArea = ({ label, required }: TextAreaProps) => {
  return (
    <div className="font-family-inter font-medium">
      <label className="text-sm font-medium block mb-2 text-white/90">
        {label}
      </label>
      <textarea
        className="input-field h-26 md:h-20 max-sm:h-18 resize-none"
        required={required}
      />
    </div>
  );
};

export default TextArea;

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
        className="w-full h-26 px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
        required={required}
      />
    </div>
  );
};

export default TextArea;

interface InputFieldProps {
  label: string;
  type: string;
  required: boolean;
}

const InputField = ({ label, type, required }: InputFieldProps) => {
  return (
    <div className="font-family-inter font-medium">
      <label className="text-sm font-medium block mb-2 text-white/90">
        {label}
      </label>
      <input
        type={type}
        className="w-full h-14 px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        required={required}
      />
    </div>
  );
};

export default InputField;

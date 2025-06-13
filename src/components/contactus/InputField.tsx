interface InputFieldProps {
  label: string;
  type: string;
}

const InputField = ({ label, type }: InputFieldProps) => {
  return (
    <div className="font-family-inter font-medium">
      <label className="text-sm font-medium block mb-2 text-white/90">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="w-full h-26 px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
          required
        />
      ) : (
        <input
          type={type}
          className="w-full h-14 px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          required
        />
      )}
    </div>
  );
};

export default InputField;

import InputField from "./InputField";
import TextArea from "./TextArea";

interface DynamicFormBuilderProps {
  label: string;
  type: string;
  required: boolean;
}

const DynamicFormBuilder = (props: DynamicFormBuilderProps) => {
  const { label, type, required } = props;

  if (type === "text" || type === "email" || type === "tel") {
    return (
      <>
        <InputField type={type} required={required} label={label} />
      </>
    );
  }

  if (type === "textarea") {
    return (
      <div className="w-full">
        <TextArea required={required} label={label} />
      </div>
    );
  }

  return null;
};

export default DynamicFormBuilder;

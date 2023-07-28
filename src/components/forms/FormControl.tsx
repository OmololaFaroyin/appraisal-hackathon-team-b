import InputComponent from "./InputComponent";

interface ControlProps {
  control: string;
  label: string;
  name: string;
  [key: string]: any;
}

const FormControl = ({ control, ...rest }: ControlProps) => {
  switch (control) {
    case "input":
      return <InputComponent {...rest} />;
    default:
      return null;
  }
};

export default FormControl;

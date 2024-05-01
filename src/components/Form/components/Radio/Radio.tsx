import * as RadioGroup from "@radix-ui/react-radio-group";
import ErrorFeedback from "../../../ErrorFeedback";
import { RadioGroupItem } from "./styles";

interface RadioProps {
  options: {
    value: string;
    label: string;
  }[];
  error?: string;
  onChange: (value: string) => void;
}

const Radio = ({ error, options, onChange }: RadioProps) => {
  return (
    <RadioGroup.Root
      className="flex flex-col "
      onValueChange={(value) => onChange(value)}
    >
      <div style={{ display: "flex", alignItems: "cente", gap: "16px" }}>
        {options.map((opt) => (
          <div key={opt.value} className="flex items-center gap-2">
            <RadioGroupItem
              className={
                " border-blue-theme outline-none cursor-default data-[state=checked]:bg-blue-theme" +
                (error ? " border-red-900" : "")
              }
              value={opt.value}
              id={opt.label}
            />
            <label htmlFor={opt.label} className={error ? "text-red-900" : ""}>
              {opt.label}
            </label>
          </div>
        ))}
      </div>

      {error && <ErrorFeedback message={error} />}
    </RadioGroup.Root>
  );
};

export default Radio;

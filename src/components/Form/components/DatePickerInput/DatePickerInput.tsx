import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import DatePicker from "../../../DatePicker";
import ErrorFeedback from "../../../ErrorFeedback";

interface DatePickerInputProps {
  className?: string;
  error?: string;
  value?: Date;
  onChange: (date: Date) => void;
}

const DatePickerInput = ({
  className,
  error,
  onChange,
  value,
}: DatePickerInputProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    value ?? undefined
  );

  const handleChangeDate = (date: Date) => {
    setSelectedDate(date);
    onChange(date);
  };

  function formatDate(date: Date) {
    return Intl.DateTimeFormat("pt-BR").format(date);
  }

  const inlineStyles: React.CSSProperties = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={inlineStyles}>
      <span>Data de Nascimento</span>

      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            type="button"
            style={{
              outline: "none",
              border: "1px solid #3182ce",
              width: "100%",
              borderRadius: "10px",
              height: "36px",
              padding: "0.25rem 0.5rem",
              ...(error ? { borderColor: "red" } : {}),
            }}
            className={className}
          >
            {!!selectedDate && <span>{formatDate(selectedDate)}</span>}
          </button>
        </Popover.Trigger>

        <Popover.Content className="z-[99] bg-white border border-blue-theme rounded-[10px] p-2 ">
          <DatePicker
            onChange={(date) => handleChangeDate(date)}
            value={selectedDate}
          />
        </Popover.Content>
      </Popover.Root>

      {error && <ErrorFeedback message={error} />}
    </div>
  );
};

export default DatePickerInput;

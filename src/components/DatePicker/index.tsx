import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import { StyledDayPicker } from "./styles";

interface DatePickerProps {
  value: Date | undefined;
  onChange: (date: Date) => void;
}

const DatePicker = ({ onChange, value }: DatePickerProps) => {
  return (
    <StyledDayPicker
      locale={ptBR}
      selected={value}
      mode="single"
      toYear={new Date().getFullYear() - 18}
      onSelect={(date) => onChange(date ?? new Date())}
      pagedNavigation
      formatters={{
        formatCaption: (date, options) => {
          return (
            <span className="text-gray-900 tracking-[-0.408px] font-medium capitalize">
              {format(date, "LLLL yyyy", options)}
            </span>
          );
        },
      }}
    />
  );
};

export default DatePicker;

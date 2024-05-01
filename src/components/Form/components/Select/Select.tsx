import { useState } from "react";
import * as RdxSelect from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import ErrorFeedback from "../../../ErrorFeedback";
import { Activity } from "../../../../interface/Activity";
import { EPI } from "../../../../interface/EPI";
import { Position } from "../../../../interface/Position";
import {
  Container,
  Content,
  Icon,
  Item,
  RelativeContainer,
  ScrollDownButton,
  ScrollUpButton,
  Trigger,
  Viewport,
} from "./styles";

interface SelectProps {
  disabled?: boolean;
  className?: string;
  value?: string;
  error?: string;
  onChange: (value: string) => void;
  options: Activity[] | EPI[] | Position[];
}

const Select = ({
  className,
  options,
  value,
  error,
  onChange,
  disabled,
}: SelectProps) => {
  const [, setSelectedValue] = useState(value);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <Container className={className}>
      <RelativeContainer>
        <RdxSelect.Root onValueChange={handleSelect} value={value}>
          <Trigger disabled={disabled} error={error}>
            <RdxSelect.Value />

            <Icon>
              <ChevronDownIcon className="icon" />
            </Icon>
          </Trigger>

          <RdxSelect.Portal>
            <Content>
              <ScrollUpButton>
                <ChevronUpIcon />
              </ScrollUpButton>

              <Viewport>
                {options.map((opt) => (
                  <Item key={Math.random()} value={opt.name}>
                    <RdxSelect.ItemText>{opt.name}</RdxSelect.ItemText>
                  </Item>
                ))}
              </Viewport>

              <ScrollDownButton>
                <ChevronDownIcon />
              </ScrollDownButton>
            </Content>
          </RdxSelect.Portal>
        </RdxSelect.Root>
      </RelativeContainer>

      {error && <ErrorFeedback message={error} />}
    </Container>
  );
};

export default Select;

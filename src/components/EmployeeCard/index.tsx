import { useState } from "react";
import { Employee } from "../../interface/Employee";
import Button from "../Button";
import { ContainerCard, DropdownItem, DropdownMenu } from "./styles";

interface EmployeeCardProps {
  employee: Employee;
}

const Badge = ({ children }: { children: React.ReactNode }) => {
  return <span className="badge">{children}</span>;
};

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleEdit = () => {
    console.log("Alterar funcionário:", employee);
  };

  const handleDelete = () => {};

  return (
    <ContainerCard>
      <div>
        <p>{employee.name}</p>

        <div>
          <Badge>{employee.cpf}</Badge>

          {employee.EPIS.length > 0 ? (
            <Badge>{employee.EPIS[0].activity}</Badge>
          ) : (
            <Badge>Não usa EPI</Badge>
          )}

          <Badge>{employee.empPosition}</Badge>
        </div>
      </div>

      <Button onClick={toggleDropdown}>...</Button>

      {dropdownOpen && (
        <DropdownMenu>
          <DropdownItem onClick={handleEdit}>Alterar</DropdownItem>
          <DropdownItem onClick={handleDelete}>Excluir</DropdownItem>
        </DropdownMenu>
      )}
    </ContainerCard>
  );
};

export default EmployeeCard;

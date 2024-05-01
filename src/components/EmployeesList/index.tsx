import { Plus } from "lucide-react";
import { showForm } from "../../redux//actions";
import useEmployeesListController from "./useEmployeesListController";
import EmployeeCard from "../EmployeeCard";
import Switch from "../Switch";
import Button from "../Button";

import {
  DashboardContainer,
  Header,
  ControlsContainer,
  ContainerInfoEployees,
  ErrorMessage,
  CustomButton,
} from "./styles";

const EmployeesList = () => {
  const {
    showOnlyActiveEmployees,
    activeEmployees,
    conclusedStage,
    isFormVisible,
    currentStage,
    employees,
    isError,
    setShowOnlyActiveEmployees,
    dispatch,
    clearFilters,
    employeesToShow,
  } = useEmployeesListController();

  if (isFormVisible || currentStage !== 1) {
    return null;
  }

  return (
    <DashboardContainer>
      <Header>
        <h1>Funcionário(s)</h1>
      </Header>

      <ControlsContainer>
        <Button onClick={() => dispatch(showForm())}>
          <Plus />
          <span>Adicionar funcionário</span>
        </Button>

        <div>
          <div style={{ display: "flex", gap: "20px", width: "100%" }}>
            <CustomButton
              showOnlyActiveEmployees={showOnlyActiveEmployees}
              onClick={() => setShowOnlyActiveEmployees((prev) => !prev)}
            >
              Ver apenas ativos
            </CustomButton>
            <CustomButton onClick={clearFilters}>Limpar Filtros</CustomButton>
          </div>

          <span>
            Ativos {activeEmployees}/{employees.length}
          </span>
        </div>

        {!isError && (
          <ContainerInfoEployees>
            {employeesToShow.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </ContainerInfoEployees>
        )}

        {isError && (
          <ErrorMessage>
            Ops ocorreu um erro ao carregar os funcionários, tente novamente
            depois!
          </ErrorMessage>
        )}

        <div className="w-full flex items-end justify-end gap-2 mt-8 pr-2 text-sm text-gray-theme300">
          <span>A etapa está concluída ?</span>
          <Switch
            onChange={() => {}}
            checked={conclusedStage}
            checkedIcon={<span className="pl-2">Sim</span>}
            uncheckedIcon={<span className="pr-2">Não</span>}
          />
        </div>
      </ControlsContainer>
    </DashboardContainer>
  );
};

export default EmployeesList;

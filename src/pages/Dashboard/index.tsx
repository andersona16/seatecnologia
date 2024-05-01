import { useDispatch } from "react-redux";
import { useSelector } from "../../hooks/useSelector";
import { reset } from "../../redux/actions";

import Button from "../../components/Button";
import CommentBlock from "../../components/CommentBlock/";
import EmployeesList from "../../components/EmployeesList";
import Form from "../../components/Form";
import MultiStep from "../../components/MultiStep/";
import Sidebar from "../../components/Sidebar/";

import {
  DashboardContainer,
  ContentContainer,
  MainContainer,
  NextButtonContainer,
} from "./styles";

const Dashboard = () => {
  const { formVisible, completedStage, currentStage } = useSelector(
    (state) => state.dashboard
  );
  const dispatch = useDispatch();

  const isButtonDisabled = !completedStage;

  const shouldShowNextButton = !formVisible && currentStage === 1;

  return (
    <DashboardContainer>
      <Sidebar />

      <ContentContainer>
        <MultiStep />
      </ContentContainer>

      <MainContainer>
        <CommentBlock />
        <EmployeesList />
        <Form />
      </MainContainer>

      {shouldShowNextButton && (
        <NextButtonContainer>
          <Button
            disabled={isButtonDisabled}
            onClick={() => dispatch(reset())}
            className={isButtonDisabled ? "cursor-not-allowed bg-gray-400" : ""}
          >
            Próximo passo
          </Button>
        </NextButtonContainer>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;

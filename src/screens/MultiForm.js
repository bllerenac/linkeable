import Steps from "../components/Steps";
import { RiCloseCircleLine } from "react-icons/ri";
import styled from "@emotion/styled";
import { useEffect, useReducer, useState } from "react";
import { useHistory } from "react-router";
import formReducer from "../reducers/formReducer";
import Experiences from "../components/form/Experiences";
import Personal from "../components/form/Personal";
import Avatar from "../components/form/Avatar";
import Button from "../components/Button";
import { ButtonContainer } from "../ui";
const stepsData = ["Personal Information", "Work experience", "Avatar"];

export default function MultiFrom({ onFormSubmit }) {
  const history = useHistory();
  const [isDisabled, setIsDisabled] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [state, dispatch] = useReducer(formReducer, {
    name: "",
    phone: "",
    gender: "",
    birthday: "",
    country: { name: "", code: "" },
    bio: "",
    profession: "",
    experiences: [{ occupation: "", company: "", startDate: "", endDate: "" }],
    avatarUrl: "",
  });

  useEffect(() => {
    setIsDisabled(
      !state.name ||
      !state.phone ||
      !state.gender ||
      !state.birthday ||
      !state.bio ||
      !state.profession ||
      !state.country.name ||
      !state.country.code
    );
  }, [state]);

  const handleChange = (name, value) => {
    dispatch({ type: "CHANGE_FIELD", payload: { name, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(state);
    history.push("/search");
  };

  const handleCancel = () => {
    dispatch({ type: "RESET" });
    history.push("/search");
  };

  return (
    <Container>
      <Header>
        <h2>Create a new Candidate</h2>
        <RiCloseCircleLine
          style={{ cursor: "pointer" }}
          onClick={handleCancel}
        />
      </Header>
      <Steps steps={stepsData} currentStep={currentStep} />
      <Form onSubmit={handleSubmit}>
        {currentStep === 1 && fieldsStep1(state, handleChange)}
        {currentStep === 2 && fieldsStep2(state, handleChange)}
        {currentStep === 3 && fieldsStep3(state, handleChange)}
      </Form>
      {currentStep === 1 && (
        <Button
          disabled={isDisabled}
          size="large"
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          Next
        </Button>
      )}
      {currentStep > 1 && currentStep < stepsData.length && (
        <ButtonContainer>
          <Button size="large" onClick={() => setCurrentStep(currentStep - 1)}>
            Previous
          </Button>
          <Button size="large" onClick={() => setCurrentStep(currentStep + 1)}>
            Next
          </Button>
        </ButtonContainer>
      )}
      {currentStep === stepsData.length && (
        <ButtonContainer>
          <Button size="large" onClick={() => setCurrentStep(currentStep - 1)}>
            Previous
          </Button>
          <Button size="large" onClick={handleSubmit}>
            Finish
          </Button>
        </ButtonContainer>
      )}
    </Container>
  );
}

const fieldsStep1 = (state, handleChange) => (
  <Personal state={state} handleChange={handleChange} />
);

const fieldsStep2 = (state, handleChange) => (
  <Experiences state={state} handleChange={handleChange} />
);

const fieldsStep3 = (state, handleChange) => (
  <Avatar state={state} handleChange={handleChange} />
);

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  & > h2,
  svg {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > button {
    align-self: center;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

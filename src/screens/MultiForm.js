import Steps from "../components/Steps";
import { RiCloseCircleLine } from "react-icons/ri";
import styled from "@emotion/styled";
import { useReducer, useState } from "react";
import { useHistory } from "react-router";
import formReducer from "../reducers/formReducer";
import Experience from "../components/form/Experience";
import Personal from "../components/form/Personal";
import Avatar from "../components/form/Avatar";

const stepsData = ["Personal Information", "Work experience", "Avatar"];

function MultiForm({ onFormSubmit }) {
  const history = useHistory();
  const [currentStep, setCurrentStep] = useState(1);
  const [state, dispatch] = useReducer(formReducer, {
    name: "",
    phone: "",
    gender: "",
    birthday: "",
    country: { name: "", code: "" },
    bio: "",
    profession: "",
    experiences: [{ occupation: "", company: "", startDate: "", endDate: ""}],
    avatarUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
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
        {currentStep === 1 &&
          fieldsStep1(state, handleChange, currentStep, setCurrentStep)}
        {currentStep === 2 &&
          fieldsStep2(state, handleChange, currentStep, setCurrentStep)}
        {currentStep === 3 &&
          fieldsStep3(state, handleChange, currentStep, setCurrentStep)}
      </Form>
    </Container>
  );
}

const fieldsStep1 = (state, handleChange, currentStep, setCurrentStep) => (
  <Personal
    state={state}
    handleChange={handleChange}
    currentStep={currentStep}
    setCurrentStep={setCurrentStep}
  />
);

const fieldsStep2 = (state, handleChange, currentStep, setCurrentStep) => (
  <Experience
    state={state}
    handleChange={handleChange}
    currentStep={currentStep}
    setCurrentStep={setCurrentStep}
  />
);

const fieldsStep3 = (state, handleChange, currentStep, setCurrentStep) => (
  <Avatar
    state={state}
    handleChange={handleChange}
    currentStep={currentStep}
    setCurrentStep={setCurrentStep}
  />
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

export default MultiForm;

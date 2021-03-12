import { InputText } from '../Inputs';
import { RiCalendarTodoLine } from 'react-icons/ri';
import styled from '@emotion/styled';
import Button from '../Button';

export default function Experience({ state, handleChange, currentStep, setCurrentStep }) {
  return (
    <>
      <InputText
        label="Occupation"
        placeholder="Frontend developer"
        name="occupation"
        value={state.occupation}
        onChange={handleChange}
      />
      <InputText
        label="Company"
        placeholder="Some Company SA"
        name="company"
        value={state.company}
        onChange={handleChange}
      />
      <InputText
        label="Start date"
        placeholder="Pick a date"
        name="startDate"
        value={state.startDate}
        onChange={handleChange}
        icon={<RiCalendarTodoLine />}
      />
      <InputText
        label="End date"
        placeholder="Pick a date"
        name="endDate"
        value={state.endDate}
        onChange={handleChange}
        icon={<RiCalendarTodoLine />}
      />
      <ButtonContainer>
          <Button size="large" onClick={() => setCurrentStep(currentStep - 1)}>
            Previous
          </Button>
          <Button size="large" onClick={() => setCurrentStep(currentStep + 1)}>
            Next
          </Button>
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;
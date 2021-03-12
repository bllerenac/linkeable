import { InputText } from '../Inputs';
import { RiCalendarTodoLine } from 'react-icons/ri';
import { ButtonContainer } from '../../ui';
import { css } from '@emotion/react';
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
        type="date"
        value={state.startDate}
        onChange={handleChange}
        // icon={<RiCalendarTodoLine />}
      />
      <InputText
        label="End date"
        placeholder="Pick a date"
        name="endDate"
        type="date"
        value={state.endDate}
        onChange={handleChange}
        // icon={<RiCalendarTodoLine />}
      />
      <Button css={css`margin-bottom: 35px;`} type="button" syze="small">Add another experience</Button>
      <ButtonContainer>
          <Button type="button" size="large" onClick={() => setCurrentStep(currentStep - 1)}>
            Previous
          </Button>
          <Button type="button" size="large" onClick={() => setCurrentStep(currentStep + 1)}>
            Next
          </Button>
      </ButtonContainer>
    </>
  );
}
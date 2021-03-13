import { InputText } from "../Inputs";
import { RiCalendarTodoLine } from "react-icons/ri";
import { css } from "@emotion/react";
import Button from "../Button";
import styled from '@emotion/styled';
import { colors } from '../../ui';

export default function Experiences({ state, handleChange }) {
  const addExperience = () => {
    const newExperience = { occupation: "", company: "", startDate: "", endDate: "" }
    handleChange("experiences", [...state.experiences, newExperience]);
  }

  const manageDataExperiences = (e, index) => {
    const updateExperiences = state.experiences.map((experience, i) => {
      if(i === index) {
        return { ...experience, [e.target.name]: e.target.value }
      }
      return experience
     })
     handleChange("experiences", updateExperiences);
  }

  return (
    <>
      {state.experiences.map((experience, index) => (
        <Experience
          key={index}
          state={experience}
          handleChange={(e) => manageDataExperiences(e, index)}
        />
      ))}
      <Button
        css={css`
          margin-bottom: 35px;
        `}
        type="button"
        syze="small"
        onClick={() => addExperience()}
      >
        Add another experience
      </Button>
    </>
  );
}

function Experience({ state, handleChange }) {
  return (
    <StyledExperience>
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
    </StyledExperience>
  );
}

const StyledExperience = styled.div`
  padding: 8px;
  border: 1px solid ${colors.gray4};
  border-radius: 8px;
`
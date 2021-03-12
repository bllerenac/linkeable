import { InputText } from "../Inputs";
import { RiCalendarTodoLine } from "react-icons/ri";
import { css } from "@emotion/react";
import Button from "../Button";
import { useReducer } from "react";
import styled from '@emotion/styled';
import { colors } from '../../ui';

export default function Experiences() {
  const [state, dispatch] = useReducer(experiencesReducer, {
    experiences: [ { occupation: "", company: "", startDate: "", endDate: ""} ]
  })

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_FIELD", payload: { name, value, index } })
  }

  return (
    <>
      {state.experiences.map((experience, index) => (
        <Experience
          key={index}
          state={experience}
          handleChange={(e) => handleChange(e, index)}
        />
      ))}
      <Button
        css={css`
          margin-bottom: 35px;
        `}
        type="button"
        syze="small"
        onClick={() => dispatch({ type: 'ADD_EXPERIENCE' })}
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

const experiencesReducer = (prevstate, action) => {
  switch (action.type) {
    case "CHANGE_FIELD":
      const { name, value, index } = action.payload
      const updatedExperiences = prevstate.experiences.map((experience, i) => {
        if(i === index) {
          return { ...experience, [name]: value }
        } 
        return experience;
      })
      return { experiences: updatedExperiences }
    case "ADD_EXPERIENCE":
      const newExperience = { occupation: "", company: "", startDate: "", endDate: "" }
      return { experiences: [...prevstate.experiences, newExperience] }
    default:
      throw new Error("Action is not recognized!")
  }
}

const StyledExperience = styled.div`
  padding: 8px;
  border: 1px solid ${colors.gray4};
  border-radius: 8px;
`
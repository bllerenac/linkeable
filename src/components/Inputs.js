import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../ui";

const StyledInput = styled.input`
  width: 100%;
  border: none;
  color: ${colors.gray2};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.gray5};
  }
`;

const StyledSelect = styled.select`
  border: none;
  width: 100%;
  color: ${colors.gray2};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.gray5};
  }
  option:first-of-type {
    color: red;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  border: none;
  resize: none;
  color: ${colors.gray2};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${colors.gray5};
  }
`;

const Container = styled.div(
  (props) => css`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 4px 12px;
    background: ${colors.white};
    border: ${`1px solid ${props.error ? colors.red : colors.gray6}`};
    box-sizing: border-box;
    border-radius: 8px;
    gap: 4px;
    height: fit-content;
    &:hover {
      border: ${`1px solid ${colors.gray4}`};
    }
    &:focus-within {
      border: ${`1px solid ${colors.gray3}`};
      box-shadow: ${`0px 0px 4px ${colors.gray3}`};
    }
  `
);

const FieldContainer = styled.div(
  ({ cssProp }) => css`
    display: flex;
    flex-direction: column;
    gap: 2px;
    ${cssProp}
  `
);

const InputLabel = styled.label`
  font-size: 14px;
  line-height: 17px;
`;

const Caption = styled.span(
  (props) => css`
    font-size: 14px;
    line-height: 17px;
    color: ${props.error ? colors.red : colors.gray4};
  `
);

const MainRadio = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 10px 0;
`

const ContainerRadio = styled.div`
  input {
    display: none;
  }

  label {
    cursor: pointer;
    transition: all 300ms;
    font-size: 14px;
    padding: 6px 10px;
  }

  input:checked + label {
    background-color: gray;
    color: white;
    border: 1px solid transparent;
  }
`

const LabelRadio = styled.label`
  padding: 8px 12px;
  width: fit-content;
  border: 1px solid ${colors.gray4};
`

function InputText({
  label = "",
  caption = "",
  icon,
  error = false,
  placeholder = "",
  name = "",
  value = "",
  type = "",
  onChange,
  cssProp,
}) {
  return (
    <FieldContainer cssProp={cssProp}>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Container error={error}>
        <StyledInput
          value={value}
          type={type}
          name={name}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
        />
        {icon}
      </Container>
      {caption && <Caption error={error}>Caption test</Caption>}
    </FieldContainer>
  );
}

function InputsRadio({ label, onChange }) {
  return(
    <FieldContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <MainRadio>
        <ContainerRadio>
          <input type="radio" id="male" name="gender" value="male" onChange={onChange}/>
          <LabelRadio htmlFor="male">Male</LabelRadio>
        </ContainerRadio>
        <ContainerRadio>
          <input type="radio" id="female" name="gender" value="female" onChange={onChange}/>
          <LabelRadio htmlFor="female"> Female </LabelRadio>
        </ContainerRadio>
        <ContainerRadio>
          <input type="radio" id="other" name="gender" value="other" onChange={onChange}/>
          <LabelRadio htmlFor="other">Other</LabelRadio>
        </ContainerRadio>
        </MainRadio>
    </FieldContainer>
  )
}

function Select({
  label = "",
  caption = "",
  icon,
  error = false,
  placeholder = "",
  name = "",
  value,
  options = [],
  onChange,
}) {
  return (
    <FieldContainer>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Container error={error}>
        <StyledSelect
          type="select"
          value={value}
          name={name}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
        >
          <option disabled value="">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </StyledSelect>
        {icon}
      </Container>
      {caption && <Caption error={error}>Caption test</Caption>}
    </FieldContainer>
  );
}

function TextArea({
  label = "",
  caption = "",
  error = false,
  placeholder = "",
  name = "",
  value = "",
  onChange,
}) {
  return (
    <FieldContainer>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Container>
        <StyledTextarea
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </Container>
      {caption && <Caption error={error}>{caption}</Caption>}
    </FieldContainer>
  );
}

export { InputText, Select, TextArea, InputsRadio };

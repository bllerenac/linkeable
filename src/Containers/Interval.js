import { InputText } from "../components/Inputs";
import styled from "@emotion/styled";
import { colors } from "../ui";
import { css } from "@emotion/react";

const StyledLabel = styled.label`
  font-size: 14px;
  line-height: 17px;
  color: ${colors.gray2};
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 4px;
`;

const StyledInterval = styled.div`
  display: flex;
  flex-direction: column;
`;

function Interval ({ label, onChange, min_value , max_value}){
  return (
    <StyledInterval>
      <StyledLabel>{label}:</StyledLabel>
              <StyledDiv>
                <InputText
                  label="Min"
                  placeholder="0"
                  name="queryMinExp"
                  value={min_value}
                  onChange={onChange}
                  cssProp={css`
                    flex-direction: row;
                    align-items: center;
                    width: 100px;
                  `}
                />
                <InputText
                  label="Max"
                  placeholder="0"
                  name="queryMaxExp"
                  value={max_value}
                  onChange={onChange}
                  cssProp={css`
                    flex-direction: row;
                    align-items: center;
                    width: 100px;
                  `}
                />
              </StyledDiv>
    </StyledInterval>
  );
}

export default Interval;
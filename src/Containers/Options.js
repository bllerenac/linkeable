import styled from "@emotion/styled";
import { colors } from "../ui";
import { css } from "@emotion/react";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  & > div{
    display: flex;
    flex-direction:row
  }
  & > p{
    font-size: 14px;
    line-height: 17px;
    color: ${colors.gray4}
  }
`;

const StyledLabel = styled.label`
  font-size: 14px;
  line-height: 17px;
  color: #4F4F4F;
  padding: 8px 12px;
  border: 1px solid #BDBDBD;
  & > input{
    display: none;
  }
`;

function Options ({value, onChange}){
return (
  <StyledDiv>
    <div>
      {value.map(gender =>{
        return(
            <StyledLabel key={gender} id={gender}>
              <input type="checkbox" id={gender} name="gender" value={gender} onChange={onChange}/>
              {gender}
            </StyledLabel>
        )
      })}
    </div>
    <p>Choose one or more</p>
  </StyledDiv>
)}

export default Options;
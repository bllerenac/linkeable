import styled from "@emotion/styled";
import { colors } from "../ui";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 8px 0px;

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

const StyledLabelTittle = styled.label`
  font-size: 14px;
  line-height: 17px;
  color: ${colors.gray2};
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

function Options ({label, value, onChange}){
return (
  <StyledDiv>
    <StyledLabelTittle>{label}:</StyledLabelTittle>
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
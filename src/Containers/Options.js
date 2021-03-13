import styled from "@emotion/styled";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function Options ({value}){
return (
  <StyledDiv>
    <input type="radio" id="male" name="gender" value="male" />
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female" />
    <label for="female">Female</label>
    <input type="radio" id="other" name="gender" value="other" />
    <label for="other">Other</label>
  </StyledDiv>
)}

export default Options;
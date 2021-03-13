import styled from "@emotion/styled";
import { colors } from "../ui";
import { css } from "@emotion/react";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function Options ({value, onChange}){
return (
  <StyledDiv>
    {value.map(gender =>{
      return(
        <>
          <input type="checkbox" id={gender} name="gender" value={gender} onChange={onChange}/>
          <label for={gender}>{gender}</label>
        </>
      )
    })}
  </StyledDiv>
)}

export default Options;
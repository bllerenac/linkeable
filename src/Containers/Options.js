import styled from "@emotion/styled";

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
        <div  key={gender}>
          <label>
            <input type="checkbox" id={gender} name="gender" value={gender} onChange={onChange}/>
            {gender}
          </label>
        </div>
      )
    })}
  </StyledDiv>
)}

export default Options;
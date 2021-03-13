/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { colors } from "../ui";
import Icon from "../components/Icons";

const Viewlabel = styled.a`
  display: flex;
  flex-direction: row;
  gap: 5.17px;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 12px;
  border-radius: 8px;
  background-color: ${colors.gray3};
  padding: 3px 4px;
  color: ${colors.white};
`;
const countries = ["Peru", "Mexico", "Venezuela"];
const Select = styled.select`
  width: 240px;
  height: 32px;
  padding: 6.5px 12px;
  border: 1px solid ${colors.gray4};
  color: ${colors.gray4};
  border-radius: 8px;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  line-height: 17px;
  color: ${colors.gray2};
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function SelectPicker ({onChange, select_label}) {
 return(
  <SelectContainer>
    <StyledLabel>{select_label}</StyledLabel>
    <Select onChange={onChange} placeholder="Hello World">
      <option hidden selected >Selecciona una opción</option>
      {countries.map(country =>{
        return(<option value={country}>{country}</option>)
      })}
    </Select>
  </SelectContainer>
 )
}

function SelectLabel ({children, onClick}) {
  return(
    <Viewlabel >
      {children}
      <Icon type="delete" onClick={onClick} color={colors.white}/>
    </Viewlabel>
  )
}

export  {SelectLabel, SelectPicker};

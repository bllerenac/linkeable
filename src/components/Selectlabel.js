import styled from "@emotion/styled";
import { colors } from "../ui";
import Icon from "../components/Icons"

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

function SelectLabel ({children, onClick}) {
  return(
    <Viewlabel >
      {children}
      <Icon type="delete" onClick={onClick} color={colors.white}/>
    </Viewlabel>
  )
}

export default SelectLabel;

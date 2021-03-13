import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { colors } from "../ui";
import { IoMdArrowDropdown } from 'react-icons/io';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;
  padding: 8px;
  background: ${colors.white};
  border: 1px solid ${colors.gray4};
  box-sizing: border-box;
  box-shadow: 2px 2px 0px ${colors.gray4};
  border-radius: 8px;
  & > svg {
    font-size: 20px;
    cursor: pointer;
  }
`;

const AvatarContainer = styled.div(
  ({ avatarUrl, cssProp }) => css`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-image: url(${avatarUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: ${colors.gray6};
    border: 1px solid ${colors.gray4};
    ${cssProp}
  `
);

const Information = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const InfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const InfoHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  & > header {
    display: flex;
    flex-direction: row;
    align-items: center;
    & > h3 {
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      margin-left: 4px;
    }
  }
  & > h4, span {
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #828282;
  }
`;

const InfoArrow = styled.div`
  position: absolute;
  bottom: -4px;
  right: 10px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  & > svg {
    font-size: 20px;
  }
`;

const InfoBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  & > div {
    width: 50%;
    & > h4 {
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
    }
    & > p {
      color: #828282;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
    }
  }
`;

function toggleCard(dropdown) {
  console.log(dropdown.dropdown)
  dropdown.dropdown = !dropdown.dropdown;
  console.log(dropdown.dropdown);
};

function CandidateCard({
  country = { name: "Peru", code: "pe" },
  name = "No name",
  profession = "No Profession",
  experience = 0,
  avatarUrl,
  gender,
  phone = "No phone",
  birthday,
  bio = "No Bio",
  dropdown,
}) {
  return (
    <Card
      onClick={ () => toggleCard({dropdown}) }
      >
      <Information>
        <InfoHeader>
          <AvatarContainer avatarUrl={avatarUrl}></AvatarContainer>
          <InfoHeaderContainer>
            <header>
              <img
                src={`/assets/32x32/${country.code}.png`}
                width="14px"
                alt="flag"
              />
              <h3>{name}</h3>
            </header>
            <h4>{profession}</h4>
            <span>{`${experience} years of experience`}</span>
          </InfoHeaderContainer>
          <InfoArrow>
            <IoMdArrowDropdown />  
          </InfoArrow> 
        </InfoHeader>
        <InfoBody>
          <div>
            <h4>Gender</h4>
            <p>{gender}</p>
            <h4>Phone</h4>
            <p>{phone}</p>
            <h4>Birthday</h4>
            <p>{birthday}</p>
          </div>
          <div>
            <h4>Bio</h4>
            <p>{bio}</p>
          </div>
        </InfoBody>
      </Information>  
    </Card>
  );
}

export default CandidateCard;
export { AvatarContainer };

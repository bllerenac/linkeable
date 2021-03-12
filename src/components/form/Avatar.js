import { InputText } from '../Inputs';
import { ButtonContainer } from '../../ui';
import Button from '../Button';
import { AvatarContainer } from '../CandidateCard';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export default function Avatar({ state, handleChange, currentStep, setCurrentStep }) {
  return (
    <>
      <InputText
        label="Avatar URL"
        placeholder="https://..."
        name="avatarUrl"
        value={state.avatarUrl}
        onChange={handleChange}
      />
      <SmallContent>Preview:</SmallContent>
      <AvatarContainer
        cssProp={css`
          width: 90px;
          height: 90px;
          margin: 8px auto;
        `}
        avatarUrl={state.avatarUrl}
      />
      <ButtonContainer>
        <Button type="button" size="large" onClick={() => setCurrentStep(currentStep - 1)}>
          Previous
        </Button>
        <Button size="large">Finish</Button>
      </ButtonContainer>
    </>
  );
}

const SmallContent = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
`;

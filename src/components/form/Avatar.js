import { InputText } from '../Inputs';
import { AvatarContainer } from '../CandidateCard';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export default function Avatar({ state, handleChange }) {
  return (
    <>
      <InputText
        label="Avatar URL"
        placeholder="https://..."
        name="avatarUrl"
        value={state.avatarUrl}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
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

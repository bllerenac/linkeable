import styled from "@emotion/styled";
import CandidateCard from "./CandidateCard";
import { useState } from "react";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
`;

function CandidateList({ candidates }) {

  const toggleCandidate = index => {
    candidates.map((candidate, i) => {
      if (i === index) {
        candidate.open = !candidate.open
      } else {
        candidate.open = false;
      }
      return candidate;
    })
  }
  
  return (
    <ListContainer>
      {candidates.map((candidate, i) => (
        <CandidateCard
          candidate={candidate}
          index={i}
          toggleCandidate={toggleCandidate}
        />
      ))}
    </ListContainer>
  );
}

export default CandidateList;

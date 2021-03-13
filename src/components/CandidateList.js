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

  const [candidatesList, setCandidatesList] = useState(candidates);

  const toggleCandidate = index => {
    setCandidatesList(candidatesList.map((candidate, i) => {
      if (i === index) {
        candidate.open = !candidate.open
      } else {
        candidate.open = false;
      }
      return candidate;
    }))
  }

  return (
    <ListContainer>
      {candidatesList.map((candidate, i) => (
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

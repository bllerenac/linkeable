import styled from "@emotion/styled";
import CandidateCard from "./CandidateCard";
import { useState } from "react";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
`;

function CandidateList({list}) {
  const [candidates, setCandidates] = useState(list);
  if(list !== candidates){
    setCandidates(list);
  }
  const toggleCandidate = index => {
    setCandidates(candidates.map((candidate, i) => {
      if (i === index) {
        candidate.open = !candidate.open
      } else {
        candidate.open = false;
      }
      return candidate;
    })
    )
  }

  return (
    <ListContainer>
      {candidates.map((candidate, i) => (
        <CandidateCard
          key={i}
          candidate={candidate}
          index={i}
          toggleCandidate={toggleCandidate}
        />
      ))}
    </ListContainer>
  );
}

export default CandidateList;

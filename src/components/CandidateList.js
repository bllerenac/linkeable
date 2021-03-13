import styled from "@emotion/styled";
import CandidateCard from "./CandidateCard";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
`;

function CandidateList({ candidates, index, toggleCandidate }) {

  const [setCandidates] = useState(candidates);

  const toggleCandidate = index => {
    setCandidates(candidates.map((candidate, i) => {
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
      {candidates.map((candidate, i) => (
        <CandidateCard
          key={candidate.name} {...candidate}
        />
      ))}
    </ListContainer>
  );
}

export default CandidateList;

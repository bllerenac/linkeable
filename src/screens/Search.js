import { useEffect, useState, useReducer } from "react";
import styled from "@emotion/styled";
import Button from "../components/Button";
import { InputText } from "../components/Inputs";
import CandidateList from "../components/CandidateList";
import CircleButton from "../components/CircleButton";
import { RiAddLine } from "react-icons/ri";
import { RiHome2Line } from "react-icons/ri";
import { RiArrowDownSFill, RiSearch2Line } from "react-icons/ri";
import { colors } from "../ui";
import { useHistory } from "react-router";
import queryReducer from "../reducers/queryReducer";
import {SelectLabel, SelectPicker} from "../components/Selectlabel";
import Interval from "../Containers/Interval"
import Options from "../Containers/Options"

const SearchForm = styled.form``;

const MainSearch = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: fit-content;
`;

const AdvanceSearch = styled.div(
  ({ isOpen }) => `
  flex-direction: column;
  gap: 8px;
  display: ${isOpen ? "flex" : "none"};
`
);

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 32px;
  right: 32px;
  bottom: 16px;
`;

const FiltersContainer = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 4px;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  color: ${colors.gray3};
`;

const FilterCountries = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 17px;
  margin: 0px 4px;
`;

function Search({ candidates }) {
  const history = useHistory();
  const [state, dispatch] = useReducer(queryReducer, {
    queryName: "",
    queryProfession: "",
    queryMinExp: "",
    queryMaxExp: "",
    queryMinAge: "",
    queryMaxAge: "",
    queryCountry: [],
  });
  const [filteredCandidates, setFilteredCandidates] = useState(null);
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const handleHomeClick = () => {
    history.push("/");
  };

  const handleAddClick = () => {
    history.push("/multiform");
  };

  const handleQueryChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_FIELD", payload: { name, value } });
  };

  const handleCountryChange = (e) => {
    const { value } = e.target;
    dispatch({ type: "ADD_COUNTRY", payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameRegex = new RegExp(state.queryName, "i");
    const professionRegex = new RegExp(state.queryProfession, "i");
    const filtered = candidates.filter(
      (candidate) =>
        nameRegex.test(candidate.name) &&
        professionRegex.test(candidate.profession) &&
        parseInt(candidate.experience) >= state.queryMinExp &&
        parseInt(candidate.experience) <= (state.queryMaxExp || Infinity) &&
        parseInt(candidate.age) >= state.queryMinAge &&
        parseInt(candidate.age) <= (state.queryMaxAge || Infinity) &&
        state.queryCountry.includes(candidate.country.name)
    );
    setFilteredCandidates(filtered);
  };

  useEffect(() => {
    if (!state.queryName) setFilteredCandidates(null);
  }, [state.queryName]);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}>
        <MainSearch>
          <InputText
            label="Search for candidates"
            placeholder="John Doe"
            name="queryName"
            value={state.queryName}
            onChange={handleQueryChange}
          />
          <Button size="medium">Search</Button>
        </MainSearch>
        <FiltersContainer onClick={() => setAdvancedOpen(!advancedOpen)}>
          <p>More filters</p>
          <RiArrowDownSFill />
        </FiltersContainer>
        <AdvanceSearch isOpen={advancedOpen}>
          <InputText
            label="Profession"
            placeholder="query"
            name="queryProfession"
            value={state.queryProfession}
            onChange={handleQueryChange}
            icon={<RiSearch2Line />}
          />
          <div>
              <Interval label= "Years of Experience" 
              onChange={handleQueryChange} 
              min_value={state.queryMinExp} 
              max_value={state.queryMaxExp}/>
              <SelectPicker select_label="Country" onChange={handleCountryChange}/>
              <FilterCountries>
                <span>Selected:</span>
                  {state.queryCountry.map((c, i) => (
                    <SelectLabel key={i}
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_COUNTRY",
                        payload: { removeCountry: c },
                      })
                    }>
                      {c}
                    </SelectLabel>
                  ))}
              </FilterCountries>
              <Interval label= "Age" 
              onChange={handleQueryChange} 
              min_value={state.queryMinAge} 
              max_value={state.queryMaxAge}/>
              <Options/>
          </div>
        </AdvanceSearch>
      </SearchForm>
      <CandidateList candidates={filteredCandidates || candidates} />
      <ButtonContainer>
        <CircleButton onClick={handleHomeClick}>
          <RiHome2Line />
        </CircleButton>
        <CircleButton>
          <RiAddLine onClick={handleAddClick} />
        </CircleButton>
      </ButtonContainer>
    </div>
  );
}

export default Search;

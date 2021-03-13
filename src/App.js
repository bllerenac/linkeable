import Welcome from "./screens/Welcome";
import Search from "./screens/Search";
import MultiForm from "./screens/MultiForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

const initialCandidates = [
  {
    country: { name: "Peru", code: "pe" },
    name: "Jimon Simenez",
    profession: "Developer",
    experience: "2",
    avatarUrl: "/assets/avatars/avatar.png",
    gender: "Male",
    phone: "987-654-321",
    birthday: "2000-10-24",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
    open: true,
  },
  {
    country: { name: "Mexico", code: "mx" },
    name: "Jamon Ramonez",
    profession: "Developer as well",
    experience: "5",
    avatarUrl: "/assets/avatars/avatar.png",
    gender: "Male",
    phone: "954-654-123",
    birthday: "1994-10-27",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
    open: false,
  },
  {
    country: { name: "Venezuela", code: "ve" },
    name: "Francisco Gaviria",
    profession: "Speaker",
    experience: "10",
    avatarUrl: "/assets/avatars/avatar.png",
    gender: "Male",
    phone: "999-654-321",
    birthday: "1990-07-07",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
    open: false,
  },
];

function App() {
  const [candidates, setCandidates] = useState(initialCandidates);

  const handleAddCandidate = (newCandidate) => {
    setCandidates([...candidates, newCandidate]);
  };

  return (
    <Router>
      <Switch>
        <Route path="/search">
          <Search candidates={candidates} />
        </Route>
        <Route path="/multiform">
          <MultiForm onFormSubmit={handleAddCandidate} />
        </Route>
        <Route path="/" component={Welcome} />
      </Switch>
    </Router>
  );
}

export { initialCandidates };
export default App;

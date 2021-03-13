import Welcome from "./screens/Welcome";
import Search from "./screens/Search";
import MultiForm from "./screens/MultiForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

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
    open: false,
    jobs: [
      { occupation: "Frontend developer", company: "The Greatest Company SA", start_date: "13-01-2018", end_date: "20-02-2020" },
      { occupation: "Backend developer", company: "The Main Company SA", start_date: "11-03-2020", end_date: "19-01-2021" },
    ],
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
    jobs: [
      { occupation: "Frontend developer", company: "The Other Company SA", start_date: "12-11-2020", end_date: "20-02-2021" },
      { occupation: "Fullstack developer", company: "The Code Company SA", start_date: "16-03-2018", end_date: "19-01-2020" },
    ],
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
    jobs: [
      { occupation: "Fullstack developer", company: "The Greatest Company SA", start_date: "29-01-2017", end_date: "20-02-2020" },
      { occupation: "Backend developer", company: "The Code Company SA", start_date: "11-01-2016", end_date: "19-01-2017" },
    ],
  },
];

function App() {
  const [candidates, setCandidates] = useState(initialCandidates);

  const handleAddCandidate = (newCandidate) => {
    setCandidates([...candidates, newCandidate]);
  };

  return (
    <Router>
      <Auth0ProviderWithHistory>
        <Switch>
          <Route path="/search">
            <Search candidates={candidates} />
          </Route>
          <Route path="/multiform">
            <MultiForm onFormSubmit={handleAddCandidate} />
          </Route>
          <Route path="/" component={Welcome} />
        </Switch>
      </Auth0ProviderWithHistory>
    </Router>
  );
}

export default App;

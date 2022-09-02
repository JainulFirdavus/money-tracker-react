import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar.js'
import Dashboard from './pages/Dashboard'
import About from './pages/About.js'
import Settings from './pages/Settings.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
    {/* <Route path="/" element={<App />}> */}
        <Route index element={<Dashboard />} />
        <Route path="/about"  element={<About />} />
        <Route path="/settings" element={<Settings />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
       {/* </Route>  */}
       
    </Routes>
    </Sidebar>
  </BrowserRouter>
  );
}

export default App;

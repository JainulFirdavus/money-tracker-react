import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar.js'
import Dashboard from './pages/Dashboard'
import About from './pages/About.js'
import Settings from './pages/Settings.js'
import NavBar from './components/NavBar.js'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
 

import { ThemeProvider } from './components/ThemeContext';

function App() {
// const [darkTheme ,setDarkTheme]=useState(true)
  return (
    <ThemeProvider>

    <BrowserRouter>

    <Sidebar>
    <NavBar>
      
    </NavBar>
    <section className='' style={{padding:"20px"}}>
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
    </section>
    </Sidebar>
  </BrowserRouter>
  </ThemeProvider>

  );
}

export default App;

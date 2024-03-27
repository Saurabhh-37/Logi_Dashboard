import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Train from "./scenes/train"
import Truck from "./scenes/truck"
import GlobalMap from "./scenes/globalmap";
import { Routes, Route } from "react-router-dom";

import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { getDatabase, ref, onValue } from "firebase/database";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>  
      <CssBaseline />
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/train" element={<Train />}/>
            <Route path="/truck" element={<Truck />}/>
            <Route path="/globalmap" element={<GlobalMap />}/>
          </Routes>
        </main>
      </div>
      </ThemeProvider>
      </ColorModeContext.Provider>
      );
    }

export default App;

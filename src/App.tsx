import React from "react";
import "./App.css";
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from './utils/usePersistedState';


import TopPage from "./components/TopPage";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
// import GlobalStyle from './styles/global';


import light from './styles/themes/light';
import dark from './styles/themes/dark'; 


function App() {

  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme}/>
        <TopPage />
        <Portfolio />
      </ThemeProvider>
    </div>
  );
}

export default App;

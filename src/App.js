import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';


const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <Router>
      <div className={darkTheme ? 'dark' : ''}>
        <Routes>
          <Route exact path ='/' element={<Home darkTheme={darkTheme} setDarkTheme={setDarkTheme} />}/>
          <Route path ='/search' element={<SearchPage darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>}/>
        </Routes>
      </div>
      </Router>

  )

}

export default App;
  



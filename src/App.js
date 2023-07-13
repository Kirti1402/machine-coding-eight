import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Home } from './Component/Home';
import MeetupDetail from './Component/MeetupDetail';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/meetupdetail" element={<MeetupDetail/>}/>
    </Routes>
    </div>
  );
}

export default App;

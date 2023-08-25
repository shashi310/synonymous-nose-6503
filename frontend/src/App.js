import logo from './logo.svg';
import './App.css';
import MainRoute from './routes/MainRoute';

import SignUp from './components/Signup';
import Login from './components/Login';
import Homepage from './pages/Homepage';
import SingleCoursePage from './pages/SingleCoursePage';


function App() {
  return (
    <div >
     {/* <Homepage/> */}
     <SingleCoursePage/>
     {/* <MainRoute />
     <SignUp />
     <Login /> */}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import MainRoute from './routes/MainRoute';
import SignUp from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div >
     <MainRoute />
     <SignUp />
     <Login />
    </div>
  );
}

export default App;

import './App.css';
import signUpImg from './assets/signUp.jpg'
import Signup from './components/Signup';
function App() {
  return (
    <div className="container mt-3">

      <div className="row">
        <div className="col-md-5">
          <Signup/>
        </div>
        <div className="col-md-7">
          <img className="img-fluid" src= {signUpImg} alt="" width="500" height="900"></img>
        </div>
      </div>
    </div>
  );
}

export default App;

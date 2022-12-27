import "./App.css";
import HeaderContainer from "./Containers/HeaderContainer"; 
import MainContainer from "./Containers/Main";

const App = () => {

  return (
    <div className="container">
      <HeaderContainer />
      <MainContainer/>
    </div>
  );
};

export default App;

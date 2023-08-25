//Passing Function
import Test from "./Test";

const App = () => {
  const myAlert=()=>{
    alert("Hello React Props")
  }
 return(
  <div>
    <Test alertButton={myAlert} ></Test>
  </div>
 )

};

export default App;
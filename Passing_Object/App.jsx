//Passing Object
import Test from "./Test";

const info = {
  name: "Ahsan",
  class: "Ten",
  roll: 1
}

const App = () => {
 return(
  <div>
    <Test item={info} ></Test>
  </div>
 )

};

export default App;
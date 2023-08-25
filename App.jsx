//Immediately Invoked Function Expression (IIFE)
let marks = 32;
const App = () => {
  return (
    <div>
      {( ()=>{
        if(marks>=33){
          return <h1>Pass</h1>
        }
        else{
          return <h1>Fail</h1>
        }
      } ) ()}
    </div>
  );
};

export default App;
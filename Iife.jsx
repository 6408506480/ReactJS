//Immediately Invoked Function Expression (IIFE)

let marks = 82;

const App = () => {
  return (
    <div>
      { marks>80 ? <h1>Brilliant Result</h1> : <h1>Average Result</h1> }
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
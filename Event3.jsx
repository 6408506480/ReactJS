//onClick Event

const App = () => {
  function handler(){
    alert("Hello React");
  }

  return (
    <div>
      <button onClick={handler}>Submit</button>
    </div>
  );

};

export default App;
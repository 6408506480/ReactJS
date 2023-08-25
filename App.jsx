let marks = 82;
const App = () => {
  return (
    <div>
      { marks>80 ? <h1>Brilliant Result</h1> : <h1>Average Result</h1> }
    </div>
  );
};

export default App;
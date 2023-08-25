//map() for looping
let name = ["Ahsan", "Habib", "Sajib"];
const App = () => {
  return (
    <div>
     <ul>
      { 
        name.map( (item, i)=>{
          return <li key={i.toString()}> {item} </li>
        })
      }
     </ul>
    </div>
  );
};

export default App;
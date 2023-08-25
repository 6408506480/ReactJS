//JSX Condition
const statusButton =(status)=>{
  if(status){
    return <button>Logout</button>
  }
  else{
    return <button>Login</button>
  }
}

const App = () => {
  return (
    <div>
     <h1>Login Status</h1> 
     { statusButton(true) }
    </div>
  );

};

export default App;
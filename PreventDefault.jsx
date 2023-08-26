//onClick Event
 
 const App = () => {

  const postData=(event)=>{
    event.preventDefault();
    alert("Form Submitted");
  }

  return (
    <div>
       <form onSubmit={postData}>
        <input placeholder="Type your name"></input>
        <br></br>
        <button type="submit">Submit</button>
       </form>
    </div>
  );
 };
 
 export default App;
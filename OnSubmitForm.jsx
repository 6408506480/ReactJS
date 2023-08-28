import { useState } from "react";

function App() {
	let [formObj, setFormObj] = useState( {fName: "Ahsan", lName: "", city: "", gender: "Male"} );
	
	const inputHandler = (key, value)=>{
		setFormObj( prevObj=>({
			...prevObj,
			[key]: value
		}) )
	}

	const formSubmit = (e)=>{
		e.preventDefault();
		alert( JSON.stringify(formObj) );
	}

  return (	
	<div>
	  <form onSubmit={formSubmit}>
		First Name:
		<input value={formObj.fName} onChange={ (e)=>{  inputHandler("fName", e.target.value) } } ></input> 
		<br></br><br></br>
		Last Name:
		<input value={formObj.lName} onChange={ (e)=>{ inputHandler("lName", e.target.value) } } ></input> 
		<br></br><br></br>
		<select value={formObj.city} onChange={ (e)=>{ inputHandler("city", e.target.value) } } >
			<option value="">Choose City</option>
			<option value="Dhaka">Dhaka</option>
			<option value="Rajshahi">Rajshahi</option>
			<option value="Rangpur">Rangpur</option>
		</select>
		<br></br><br></br>
		<input type="radio" name="gender" onChange={ (e)=>{ inputHandler("gender", "Male" ) } } checked={formObj.gender=="Male" } /> Male
		<input type="radio" name="gender" onChange={ (e)=>{ inputHandler("gender", "Female" ) } } checked={formObj.gender=="Female"} /> Female
		<br></br><br></br>
		<button type="submit">Submit</button>
	  </form>
		

	</div>	
  );

};

export default App;

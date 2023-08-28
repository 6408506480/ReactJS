import { useState } from "react";

function App() {
	const [list, setList] = useState([]);
	const [item, setItem] = useState("");

	const addToList = ()=>{
		list.push(item);
		setList([...list]);
	}

	const removeItem=(index)=>{
		list.splice(index, 1);
		setList([...list]);     //JavaScript spread operator
	}

	//Ternary Operator { list.length!==0 ? ( list.map() ) : () }
  return (	
	<div>
		<table>
			<tbody>
				{ list.length!==0 ? 
				( list.map( (element, index) =>{ 
					return ( 
					<tr> 
					  <td> {element} </td>
					  <td> <button onClick={()=>{removeItem(index)}}>Remove</button> </td>
					</tr>)}) 
				) : 
				(<tr></tr>) }
			</tbody>
		</table>

		<input onChange={ (event)=>setItem(event.target.value)} placeholder="Item"></input>
		<br></br> <br></br>

		<button onClick={addToList}>Add</button>

	</div>	
  );

};

export default App;

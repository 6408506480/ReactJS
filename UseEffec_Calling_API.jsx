import { useEffect, useState } from "react";

function App() {
	let [data, setData] = useState();

	useEffect( ()=>{
		fetch("https://dummyjson.com/products/1")
		.then( res=>res.json() )
		.then( json=>setData(json) )
	}, [])

  return (	
	<div>
	  {JSON.stringify(data)}
	</div>	
  );

};

export default App;

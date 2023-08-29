import { useEffect } from "react";

function App() {
	useEffect( ()=>{
		console.log("Hello useEffect");
	}, [1, 2])

  return (	
	<div>
	  

	</div>	
  );

};

export default App;

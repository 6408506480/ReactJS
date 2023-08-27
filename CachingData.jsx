import React, {useRef} from 'react';

function App() {

let APIdata = useRef(null);
let showText = useRef();

const fetchData = async() => {
	const response = await fetch("https://dummyjson.com/users");
	APIdata.current = await response.json();
};

const showData = () => {
  showText.current.innerText = JSON.stringify(APIdata.current);
};

return (	
	<div>
		<p ref={showText}></p>
		<button onClick={fetchData}>Call API</button>
		<button onClick={showData}>Show Data</button>
	</div>	
);

};

export default App;

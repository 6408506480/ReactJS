import React, {useRef} from 'react';

function App() {

// Creating a ref object using useRef hook
const myText = useRef();

const handler = () => {
	myText.current.innerText = "The quick brown fox jumps over the lazy dog.";
};

return (	
	<div>
    <h2 ref={myText}></h2>
		<button onClick={handler}> ACTION </button>
	</div>	
);

};

export default App;

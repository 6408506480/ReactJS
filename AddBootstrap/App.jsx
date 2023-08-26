import React, {useRef} from 'react';

function App() {

let myText = useRef();

const handler = () => {
	myText.current.classList.add("text-danger");
};

return (	
	<div>
    <h1 ref={myText} className='text-success'>This is my Text</h1>
		<button onClick={handler}> Submit </button>
	</div>	
);

};

export default App;

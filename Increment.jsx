import React, {useRef} from 'react';

function App() {

let myText = useRef(0);

const handler = () => {
	 myText.current.innerText++ ;
  
};

return (	
	<div>
    <h1 ref={myText} ></h1>
		<button onClick={handler}> Increment </button>
	</div>	
);

};

export default App;

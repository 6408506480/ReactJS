import React, {useRef} from 'react';

function App() {

// Creating a ref object using useRef hook
const myImg = useRef();

const handler = () => {
	myImg.current.src = "https://placehold.co/600x400?text=Hello+World";
  myImg.current.setAttribute("width", "300px");
  myImg.current.setAttribute("height", "200px");
};

return (	
	<div>
    <img ref={myImg} src='https://placehold.co/600x400'></img>
		<button onClick={handler}> ACTION </button>
	</div>	
);

};

export default App;

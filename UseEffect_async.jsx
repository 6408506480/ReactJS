import  { useEffect, useState } from "react";

function App() {
	const [posts, setPosts] = useState([]);

	const fetchPost = async () => {
		const response = await fetch('https://dummyjson.com/products/1');
		const data = await response.json();
	  	setPosts(data);
	};
  
	useEffect(() => {
	  fetchPost();
	}, []);

	return (
	  <div>
		<p> {JSON.stringify(posts)} </p>
	  </div>
	);

  }

export default App;
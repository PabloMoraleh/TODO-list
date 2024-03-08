import React, { useState } from "react";


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li>
					<input 
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							if (e.key == "Enter") {
								setTodos(todos.concat(inputValue));
								setInputValue("");
							}
						}}
						placeholder="What do you need to do?" />
				</li>
				{todos.map((item,index) => (
					<li>
						{item} {" "}
						<i
						 className="fas fa-times"
						 onClick={() => 
							setTodos(
								todos.filter(
									(t, currentIndex) => 
										index != currentIndex))}></i>
					</li>))}
			</ul>
			<div>{todos.length} Tasks</div>
		</div>
	);
};

export default Home;

import React from "react";

import Tick from "./tick.jsx";
import CountDown from "./countdown.jsx";

const homeStyles = {
	fontSize: "42px",
	backgroundColor: "#222",
	padding: "2em 0",
	color: "white",
    textAlign: "center",
}

const startTime = new Date();

// if Tick is functional
function Home() {
	return (
		<div style={homeStyles}>
			<Tick 
				date={new Date()} 
				seconds={Math.floor((new Date() - startTime) / 1000)}
			/>
			<CountDown />
		</div>
	)
};

// if Tick is class
// function Home() {
// 	return (
// 		<div style={homeStyles}>
// 			<Tick />
// 		</div>
// 	)
// };

export default Home;

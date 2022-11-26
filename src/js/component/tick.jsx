import React from "react";

// FUNCTIONAL COMPONENT
function Tick(props){
    const element = (
        <div>
            <h1>This is 'Tick'</h1>
            <i className="fa-regular fa-clock text-white"></i>
            <h2>It is {props.date.toLocaleTimeString()}h local time.</h2>
            <h2>Seconds passed since loading: {props.seconds} s</h2>
        </div>
    )
    return element;
}
// end FUNCTIONAL COMPONENT

// CLASS COMPONENT
// class Tick extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             startTime: new Date(),
//             date: new Date()
//         }
//     }

//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.second(),
//             1000
//         );
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }

//     second() {
//         this.setState({
//             date: new Date()
//         })
//     }

//     render() {
//         let start = this.state.startTime;
//         let now = this.state.date;
//         return (
//             <div>
//                 <h1>This is 'Tick'</h1>
//                 <h2>It loaded at {start.toLocaleTimeString()}</h2>
//                 <h2>It is {now.toLocaleTimeString()}</h2>
//                 <h2>{Math.floor((now - start) / 1000)} seconds</h2>
//             </div>
//         )
//     }
// }
// end CLASS COMPONENT

export default Tick;
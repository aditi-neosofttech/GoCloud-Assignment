// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import Select from 'react-select';
// import data from "./data.json"

// class App extends React.Component {
// constructor(props){
//   super(props);

//   this.state = {
//     userNames: [],
// } 
// }

// componentDidMount() {
//     let allUsers = [];
//     fetch('./data.json')
//         .then(response => {
//             return response.json();
//         }).then(data => {
//             allUsers = data.results.map((user) => {
//             return user
//         });
//         console.log(allUsers);
//         this.setState({
//             userNames: allUsers,
//         });
//     });
// }


// render(){
//     let optionItems = this.state.userNames.map((user) =>
//                 <option key={user.id}>{user.name}</option>
//             );
// return (
//     <div>
//         <select> {optionItems}</select>
//     </div>
// )
// }
// }

// export default App;

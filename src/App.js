// import React from 'react';
// import './App.css';
// import { connect } from 'react-redux';
// import { IncAction } from './actions';
// import { DecAction } from './actions';

// const App=({local_variable, IncAction,DecAction}) => {
//   return (
//     <div>
//       <center>
//         <h1>{local_variable}</h1>
//         <button onClick={IncAction}>Increment</button>
//         <button onClick={DecAction}>Decrement</button>
//       </center>
//     </div>
//   )
// }

// const mapStateToProps = state =>({
//   local_variable: state
// })

// export default connect(mapStateToProps, {IncAction, DecAction})(App);


import Counter from "./features/counter/Counter";

function App() {
  return (
    <main className="App">
      <Counter />
    </main>
  );
}

export default App;

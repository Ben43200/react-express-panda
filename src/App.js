// import logo from './logo.svg';
// import './App.css';

// import './App.css';
import './app.scss';
import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import FormMailer from "./formMailer"
import  Contact  from './Contact';



function App() {
  // const [ bubble, setBubble ] = useState("Please give me pets!");
  // const [ hasPetted, setHasPetted ] = useState(false);
  // const [ imageURL, setImageURL ] = useState('sadpanda');

  // useEffect(() => {
  //   const petPanda = async () => {
  //     try {
  //       const getPandaResponse = await axios.post('https://react-express-panda.onrender.com/pet', {hasPetted: hasPetted}, {});
  //       setBubble(getPandaResponse.data.message);
  //       setImageURL(getPandaResponse.data.image);
  //     } catch(e) {
  //       alert("Unable to pet panda :(");
  //     }
  //   };
  //   petPanda();
  // });

  return (
    <div className="App">
    {/* //   <nav>.Meet Panda</nav>
    //   <header className="App-header">
    //     <p>{bubble}</p>
    //     <img src={`/images/${imageURL}.png`} className="App-logo" alt="panda" onClick={() => setHasPetted(!hasPetted)}/>
    //   </header> */}
      <Contact />
    </div>
  );
}

export default App;

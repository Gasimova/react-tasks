import React from 'react'
import { Coin } from './components/Coin';
import { ColorBox } from './components/Colors';
import { Dice } from "./components/Dice";
import { FormData } from './components/FormData';

function App() {
  return (
    <>
      <Dice />
      <Coin />
      <ColorBox />
      <FormData />
    </>
  );
}

export default App;

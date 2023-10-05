
import './App.css';
import Main from './Components/Main';
import Button from './Components/Button';
import Header from './Components/Header';
import Count from './Components/Count';
import UseEffectHook from './Components/UseEffectHook';
import { useState } from 'react';
import Board from './Components/Tictoctio/Board';
// import TimerUseEffect from './Components/TimerUseEffect';

function App() {
  const  [isVisible, setVisible] = useState(true);
  return (

  <div className='todo-container'>
    <Board></Board>
  <Header></Header>
  <Count></Count>
  <Main text='Eat'></Main>
  <Main text='code'></Main>
  <Main text='play' ></Main>
  <Main text='code'></Main>
  <Main text='sleep'></Main>
  <Button></Button>
  <div style={{backgroundColor : "red"}}>
  {isVisible ? <UseEffectHook></UseEffectHook> : ""}
  <button onClick={()=> setVisible(!isVisible)}>toggle</button>
  </div>

  {/* <TimerUseEffect></TimerUseEffect> */}
  </div>

  );
}

export default App;

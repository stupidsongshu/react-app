import React from 'react';
import logo from './logo.svg';
import './App.css';

import NormalHello from './hoc/normal/Hello'
import NormalBye from './hoc/normal/Bye'

import DecoratorHello from './hoc/decorator/Hello'
import DecoratorBye from './hoc/decorator/Bye'

import Hijack from './hoc/hijack'

import { Counter as HookUseState} from './hooks/useState'

import CounterUseEffect from './hooks/useEffect'
import COunterUseMemo from './hooks/useMemo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <fieldset>
          <legend>高阶组件-普通方式</legend>
          <NormalHello />
          <NormalBye />
        </fieldset>

        <fieldset>
          <legend>高阶组件-装饰器方式</legend>
          <DecoratorHello />
          <DecoratorBye />
        </fieldset>

        <fieldset>
          <legend>高阶组件-继承/劫持</legend>
          <Hijack />
        </fieldset>

        <fieldset>
          <legend>hook - useState</legend>
          <HookUseState />
        </fieldset>

        <fieldset>
          <legend>hook - useEffect</legend>
          <CounterUseEffect />
        </fieldset>

        <fieldset>
          <legend>hook - useMemo</legend>
          <COunterUseMemo />
        </fieldset>
      </header>
    </div>
  );
}

export default App;

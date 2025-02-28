
import './App.css'
import Balance from './assets/components/Balance.jsx';
import Operation from './assets/components/Operation.jsx';
import { useState } from 'react';

function App() {
  const[balance, setBalance] = useState(0);
  const deposit = sum => setBalance(prevBalance => prevBalance + sum);
  const withdraw = sum => setBalance(prevBalance => prevBalance < sum ? prevBalance : prevBalance - sum);

  return (
    <>
      <div>
        <Balance balance={balance}/>
        <Operation deposit={deposit} withdraw={withdraw}/>
      </div>
    </>
  )
}

export default App

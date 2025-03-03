import {useState} from "react";
import {deposit, withdraw} from "../actions/accountActions.js";
import {useDispatch} from "react-redux";
import { fetchQuote} from '../actions/quoteAction.js';

const Operation = () => {
  const [sum, setSum] = useState(0);
  const dispatch = useDispatch();

    return (
      <>
        <div className={'flex justify-center mb-8'}>
          <button
            className={'bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold px-4 py-2 text-lg mr-5'}
            onClick={() => dispatch(withdraw(sum))}>Withdraw
          </button>
          <input className={'text-center border rounded-lg text-white text-xl '}
                 type={'number'} onChange={e => setSum(+e.target.value)}
                 value={sum}/>
          <button
            className={'bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold px-4 py-2 text-lg ml-5'}
            onClick={() => dispatch(deposit(sum))}>Deposit
          </button>
        </div>
        <div className={'flex justify-center'}>
          <button
            onClick={() => dispatch(fetchQuote())}
            className={'bg-blue-300 hover:bg-blue-400 text-white font-bold text-lg rounded-lg py-2 px-9 ml-7 mt-1'}
          >Get Quote
          </button>
        </div>
      </>
    );
  };

  export default Operation;

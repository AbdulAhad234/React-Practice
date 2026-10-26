import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState({})
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState({})

  const { data: currencyInfo, error: currencyError } = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const currencySwap = () => {
    setFrom(to)
    setTo(from)

    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convertCurrency = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap 
        justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1920&q=80")',
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border 
            border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convertCurrency()                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onAmountChange={(amount) => setAmount(amount)}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectedCurrency={from}                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 
                            -translate-y-1/2 border-2 border-white 
                            rounded-md bg-blue-600 text-white px-2 
                            py-0.5"
                            onClick={currencySwap}>
                            Swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectedCurrency={to}
                            amountDisabled                            
                        />
                    </div>
                    {currencyError && (
                        <p role="alert" className="mb-3 text-sm text-red-700">
                            Unable to load currency rates: {currencyError}
                        </p>
                    )}
                    <button type="submit" className="w-full bg-blue-600 
                    text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
)}

export default App

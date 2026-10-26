import {useState, useEffect} from 'react'


function useCurrencyInfo(currency) {
    const[data, setData] = useState({})
    const [error, setError] = useState("")

    useEffect(() => {
        const controller = new AbortController();

        async function fetchCurrencyInfo() {
          setData({});
          setError("");

          try {
            const response = await fetch(
              `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`,
              { signal: controller.signal },
            );

            if (!response.ok) {
              throw new Error(
                `Currency rates request failed (${response.status}).`,
              );
            }

            const result = await response.json();
            const rates = result[currency.toLowerCase()];

            if (!rates || typeof rates !== "object") {
              throw new Error("The currency rates response was invalid.");
            }

            setData(rates);
          } catch (fetchError) {
            if (fetchError.name !== "AbortError") {
              setError(fetchError.message);
            }
          }
        }

        fetchCurrencyInfo();

        return () => controller.abort();
    }, [currency])
    return {data, error};
}

export default useCurrencyInfo;
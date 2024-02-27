import React from 'react'

const TopTradingCoin = () => {

    React.useEffect(() => {
        // Dynamically create script tag
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://files.coinmarketcap.com/static/widget/currency.js';
        script.async = true;
        // Append the script to the document body
        document.body.appendChild(script);

        // Cleanup: remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);
  return (
    <>
    
             {/* CoinMarketCap widget */}
            
                <div className="coinmarketcap-currency-widget" data-currencyid="1" data-base="USD" data-secondary="" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-statsticker="true" data-stats="USD"></div>

    </>
  )
}

export default TopTradingCoin
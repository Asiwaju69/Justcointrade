import React, { useEffect } from 'react';

const CoinPriceBlockWidget: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://files.coinmarketcap.com/static/widget/coinPriceBlock.js';
        script.async = true;
    
        script.onload = () => {
            // Once the script is loaded, the widget should be available
            // So you can set up any additional configurations here
            // For example, if you want to initialize the widget:
            // window.initializeCoinPriceBlockWidget();
        };
    
        document.body.appendChild(script);
    
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    

    return (
        <div className="mt-10 w-full p-8 bg-white rounded-lg">
            {/* Title */}
            <div className="pb-5 border-b text-sm text-gray-700 font-semibold">
                <h2>Current Coin Prices</h2>
            </div>

            {/* CoinMarketCap coin price block widget */}
            <div id="coinmarketcap-widget-coin-price-block" ></div>
        </div>
    );
};

export default CoinPriceBlockWidget;

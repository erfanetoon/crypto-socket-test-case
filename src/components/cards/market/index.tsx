import { numberWithCommas } from "@utilities/utilities";
import { FC } from "react";

const MarketCard: FC<Market> = ({ title, title_fa, price_info, currency1 }) => {
    return (
        <div className="border-0 border-b border-solid border-gray-100 flex items-center p-2">
            <div className="inline-flex items-center w-96">
                <img src={currency1.image} className="w-12 h-12 ml-2" />
                <div className="font-bold ml-4">{title_fa}</div>
                <div className="text-gray-600 text-sm">{title}</div>
            </div>

            <div className="w-64">{numberWithCommas(price_info.price)}</div>

            <div
                className={`font-numeric w-24 text-center py-2 rounded-sm ltr ${
                    price_info.change > 0
                        ? "bg-green-500"
                        : price_info.change === 0
                        ? "bg-gray-500"
                        : "bg-red-500"
                }`}>
                {numberWithCommas(price_info.change)}
            </div>
        </div>
    );
};

export default MarketCard;

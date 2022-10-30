import MarketCard from "@components/cards/market";
import Request from "@services/request";
import { useEffect, useState } from "react";

const Markets = () => {
    const [markets, setMarkets] = useState<Array<Market>>([]);
    const [updatedPrice, setUpdatedPrice] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await new Request().get<IReturnValue<Market>>(
                "MARKETS",
            );

            setMarkets(data.results || []);
        })();

        const socket = new WebSocket("wss://ws.bitpin.ir");

        socket.onopen = (e) => {
            socket.send(
                JSON.stringify({
                    method: "sub_to_price_info",
                }),
            );
        };

        socket.onmessage = ({ data }) => {
            const parsedData = JSON.parse(data);

            if (parsedData.event === "currency_price_info_update") {
                setUpdatedPrice(parsedData);
            }
        };
    }, []);

    return (
        <div className="bg-white shadow-sm p-4">
            {markets.map((item, i) => (
                <MarketCard
                    {...item}
                    price_info={updatedPrice[item.id] || item.price_info}
                    key={i}
                />
            ))}
        </div>
    );
};

export default Markets;

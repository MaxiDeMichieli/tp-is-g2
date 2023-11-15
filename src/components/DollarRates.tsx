import { useState, useEffect } from "react";
import axios from "axios";

const DollarRates = () => {
  const [blueRate, setBlueRate] = useState(null);
  const [officialRate, setOfficialRate] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchDollarRates = async () => {
      try {
        const response = await axios.get(
          "https://www.dolarsi.com/api/api.php?type=dolar"
        );
        const rates = response.data;

        const blueDollar = rates.find(
          (rate) => rate.casa.nombre.toLowerCase() === "blue"
        );
        const officialDollar = rates.find(
          (rate) => rate.casa.nombre.toLowerCase() === "oficial"
        );

        setBlueRate(blueDollar?.casa);
        setOfficialRate(officialDollar?.casa);
      } catch (error) {
        console.error("Error fetching dollar rates:", error);
      }
    };

    fetchDollarRates();
  }, []);

  const handleToggleExpansion = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <>
      {blueRate || officialRate ? (
        <div
          className={`fixed bottom-0 right-0 m-4 p-4 rounded-lg shadow-lg bg-green-700 text-white transition-transform cursor-pointer ${
            !isExpanded ? "translate-y-20" : ""
          }`}
          onClick={handleToggleExpansion}
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">Cotización del dólar</h2>
          </div>
          <div>
            <p>
              <strong>Blue:</strong> Compra: {blueRate?.compra}, Venta:{" "}
              {blueRate?.venta}
            </p>
            <p>
              <strong>Oficial:</strong> Compra: {officialRate?.compra}, Venta:{" "}
              {officialRate?.venta}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DollarRates;

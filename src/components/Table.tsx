"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import Pagnation from "./Pagnation";
import CryptoTableRow from "./TableRow";
import { Modal } from "./Modal";

export interface Crypto {
  id: number;
  name: string;
  symbol: string;
  total_supply: number;
  circulating_supply: number;
  quote: {
    USD: {
      price: number;
      market_cap: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      volume_24h: number;
      
      fully_diluted_market_cap: number;
    };
  };
}

interface TableDemoProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}
export function TableDemo({searchValue}: TableDemoProps) {
  const [data, setData] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      fetch("/api/crypto")
        .then((res) => res.json())
        .then((json) => {
          setData(json.data || []);
          setLoading(false);
        });
    };
    fetchData(); // initial load
    const interval = setInterval(fetchData, 5000); // refresh every 10 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  let indexOne = page * 10;
  const indexTwo = (page + 1) * 10;
  if (indexOne < 0) indexOne = 0;
  else if (indexOne === 0 && indexTwo >= 20) indexOne = 10;
// console.log("index 1:" + indexOne, indexTwo);
let cutData = data.slice(indexOne, indexTwo);
  if (searchValue) {
    cutData = data.filter((crypto) =>
      crypto.name.toLowerCase().includes(searchValue.toLowerCase())
    );
   
  }
  
console.log("cutData: ", cutData);

  if (loading) return <p className="px-20">Loading...</p>;
  return (
    <>
<div className="px-20">
        <Table className="font-raj">
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow className="font-bold ">
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead className="translate-x-8">Price</TableHead>
            <TableHead className="translate-x-6">1h %</TableHead>
            <TableHead className="translate-x-6">24h %</TableHead>
            <TableHead className="translate-x-6">7d %</TableHead>
            <TableHead className="translate-x-">Market Cap</TableHead>
            <TableHead className="translate-x-">Volume(24h)</TableHead>
            <TableHead className="translate-x-">Circulating Supply</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cutData.map((crypto) => {
            const percentChange = Number(
              crypto.quote.USD.percent_change_1h.toFixed(2) ||
                crypto.quote.USD.percent_change_24h.toFixed(2) ||
                crypto.quote.USD.percent_change_7d.toFixed(2)
            );
            const cellColor =
              Math.abs(percentChange) === percentChange
                ? "text-green-500"
                : "text-red-500";
            return (
     <div key={crypto.id} className=" contents border-b border-slate-200 transition-colors hover:bg-slate-100">
       <Modal key={crypto.id} name={crypto.name} marketCap={crypto.quote.USD.market_cap} price={crypto.quote.USD.price}
        circulatingSupply={crypto.circulating_supply} volume={crypto.quote.USD.volume_24h} 
        fdv={crypto.quote.USD.fully_diluted_market_cap} totalSupply={crypto.total_supply} >
        <button className="w-full contents">
          <CryptoTableRow 
            crypto={crypto} 
            cellColor={cellColor} 
            id={crypto.id.toString()} 
          />
        </button>
      </Modal>
     </div>
    );
          })}
        </TableBody>

        <Pagnation page={page} setPage={setPage} />
      </Table>
</div>
    </>
  );
}

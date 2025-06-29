import { TableCell, TableRow } from "@/components/ui/table";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { Crypto } from "./Table";
import {  Modal } from "./Modal";

interface TableRowProps {
  crypto: Crypto;
  cellColor: string;
  id: string;
}

const CryptoTableRow = ({ crypto, cellColor,id }: TableRowProps) => {
    function formatPrice(price: number | undefined) {
    if (!price) return "$0.00";
    // format 1m or 1b or 1k to have commas
    return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    
  }
  return (
    <TableRow id={id} className="text-[16px] cursor-pointer -translate-x-">
        
      <TableCell className="font-medium flex items-center gap-2 rounded-full ">
        {/* {logo && <Image src={logo} alt={crypto.name} width={24} height={24} />} */}
        {crypto.name}
       
      </TableCell>
      <TableCell className={cellColor}>
        {formatPrice(Number(crypto.quote.USD.price))}
      </TableCell>
      <TableCell className={cellColor}>
        <span className="flex items-center gap-0.5 text-start me-auto">
          {cellColor === "text-green-500" ? (
            <IoMdArrowDropup className="text-green-500" />
          ) : (
            <IoMdArrowDropdown className="text-red-500" />
          )}{" "}
          {Number(crypto.quote.USD.percent_change_1h.toFixed(2))}%
        </span>
      </TableCell>
      <TableCell className={cellColor}>
        <span className="flex items-center gap-2">
          {cellColor === "text-green-500" ? (
            <IoMdArrowDropup className="text-green-500" />
          ) : (
            <IoMdArrowDropdown className="text-red-500" />
          )}{" "}
          {crypto.quote.USD.percent_change_24h.toFixed(2)}%
        </span>
      </TableCell>
      <TableCell className={cellColor + " flex items-center gap-2"}>
        {cellColor === "text-green-500" ? (
          <IoMdArrowDropup className="text-green-500" />
        ) : (
          <IoMdArrowDropdown className="text-red-500" />
        )}{" "}
        {crypto.quote.USD.percent_change_7d.toFixed(2)}%
      </TableCell>
      <TableCell className="">
        {formatPrice(Math.floor(crypto.quote.USD.market_cap))}
      </TableCell>
      <TableCell className="">{crypto.quote.USD.volume_24h}</TableCell>
      <TableCell className="">{crypto.circulating_supply}</TableCell>
    </TableRow>
  );
};

export default CryptoTableRow;

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


interface ModalProps {
    children: React.ReactNode;
    name?: string;
    marketCap?: number;
    price?: number;
    circulatingSupply?: number;
    volume?: number;
    fdv?: number;
    circulatingSupplyChange?: number;  
    totalSupply?: number;
}

export function Modal({children, name, marketCap, price, volume, fdv,circulatingSupply, totalSupply}: ModalProps) {
const formatNumber =(num: number | undefined ) =>{
  if (!num) return "0";
  if (num >= 1e12) {
    return (num / 1e12).toFixed(2) + "T"; // Trillions
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + "B"; // Billions
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + "M"; // Millions
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(2) + "K"; // Thousands
  }
  return num.toString(); // Less than a thousand
}
  function formatPrice(price: number | undefined) {
    if (!price) return "$0.00";
    // format 1m or 1b or 1k to have commas
    return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    
  }
  return (
    <Dialog>
      <DialogTrigger asChild  >
        
       {children}
       
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-3xl font-raj">{name}</DialogTitle>
        
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="m-aut">
           <p className="text-3xl font-bolder font-raj">{formatPrice(price)}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 px-10 gap-2 font-raj">
          <div className="col-span-2 border mb-3 rounded-lg p-2 text-center">
            <p className="text-[12px] dark:text-white/50 font-semibold">Market Cap</p>
            <p>${formatNumber(marketCap)}</p>
          </div>
          <div className="border rounded-lg p-2 mb-3 text-center">
            <p className="text-[12px] dark:text-white/50 font-semibold">Volume(24)</p>
            <p>${formatNumber(volume)}</p>
          </div>
          <div className="border rounded-lg p-2 mb-3 text-center">
            <p className="text-[12px] dark:text-white/50 font-semibold">FDV</p>
            <p>${formatNumber(fdv)}</p>
          </div>
           <div className="border rounded-lg p-2 mb-3 text-center">
            <p className="text-[12px] dark:text-white/50 font-semibold">Total supply</p>
            <p>${formatNumber(totalSupply)}</p>
           </div>
          <div className="border rounded-lg p-2 mb-3 text-center">
            <p className="text-[12px] dark:text-white/50 font-semibold">Max. supply</p>
            <p>${formatNumber(circulatingSupply)}</p>
          </div>
        </div>

        
      </DialogContent>
    </Dialog>
  )
}

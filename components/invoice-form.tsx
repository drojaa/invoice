import InvoiceDetails from "@/components/invoice-details"
import FromAndTo from "./from-and-to"
import InvoiceItems from "./invoice-items"
import TaxAndTotals from "./tax-and-totals"

export default function InvoiceForm(){
    return(
        <div className="space-y-6">
      <InvoiceDetails/>
      <FromAndTo/>
      <InvoiceItems/>
      <TaxAndTotals/>
        </div>

        
      
    )
}
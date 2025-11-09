
import { Button } from "./ui/button"
import { ScanEye } from "lucide-react"
import { useState } from "react"
import Home from "@/app/page"
import {useInvoice} from "../context/invoice-context"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { CirclePlus } from "lucide-react"


export const items = [
  {
    id: "1",
    description: "XL Length Nails",
    quanity: 1,
    rate: 120,
    amount: 120
  }, 

  {
    id: "2",
    description: "Short Almond Nails",
    quanity: 1,
    rate: 90,
    amount: 90
  }, 
]


export default function InvoicePreview(){
  const [showHome, setShowHome] = useState(false)
  if (showHome){
    return (
      <Home/>
    )
  }
 const { invoice } = useInvoice()
    return(
        <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Invoice Preview</h1>
          </div>
          <div className="flex gap-3">
          <Button 
          variant="outline"
          onClick={() => setShowHome(true)}
          >Return to Edit</Button>
          <Button>Download Preview</Button>
          </div> 
        </div>
        <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <h1 className="font-bold text-3xl">INVOICE</h1>
                <p className="font-normal">Date: {invoice.date}</p>
              </CardTitle>
              <p>{invoice.invoiceNumber}</p>
              <div>

                <div className="flex items-center ">
                  <p className="basis-1/2 font-bold">From: {invoice.fromName}</p>
                  <p className="basis-1/2 font-bold">To: {invoice.toName}</p>
                </div>

                <br></br>
                {/* Items Table */}
                <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="w-1/4 text-left font-bold py-2">Description</th>
                    <th className="w-1/4 text-left font-bold py-2">Qty</th>
                    <th className="w-1/4 text-left font-bold py-2">Rate</th>
                    <th className="w-1/4 text-left font-bold py-2">Amount</th>
                  </tr>
                </thead>
                <tbody>{items.map((item) => (
                  <>
                  <tr className="border-b">
                    <td>{item.description}</td>
                    <td>{item.quanity}</td>
                    <td>{typeof(item.rate) == "number" ? "$ " + item.rate.toFixed(2) : "$0.00"}</td>
                    <td>{typeof(item.amount) == "number" ? "$ " + item.amount.toFixed(2) : "$0.00"}</td>
                  </tr>
                  </>
                ) )}</tbody>
                
              </table>
              <div className="flex justify-end">
              <div className="flex flex-col max-w-max  justify-end">
                
                <div className="flex justify-end gap-5">
                  <p>Subtotal</p>
                  <p>$0.00</p>
                </div>

                <div className="flex justify-end border-b gap-5">
                  <p>Tax</p>
                  <p>$0.00</p>
                </div>

                <div className="flex justify-end gap-5">
                  <p className="font-bold">Total</p>
                  <p>$0.00</p>
                </div>
              </div>
              
              </div>
            

              </div>
            </CardHeader>
          </Card>
          
      </div>
    </div>  
    )
}
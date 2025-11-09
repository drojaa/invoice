import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useInvoice} from "../context/invoice-context"


import {useState} from "react"

export default function InvoiceDetails() {
    const { invoice , updateInvoice} = useInvoice()
const [date, setDate] = useState("");
  

    console.log(invoice.invoiceNumber)
    console.log(invoice.date);
   
    



    return(
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Invoice Details</CardTitle>
                <form className="space-y-2 flex gap-8">
                    <div className="basis-1/2">
                        <Label className="text-md" htmlFor="invoice-number">Invoice Number</Label>
                        <Input
                        id="invoice-number"
                        value={invoice.invoiceNumber}
                        onChange={(e) => updateInvoice({ invoiceNumber: e.target.value })}
                        />
                    </div>

                    <div className="basis-1/2">
                        <Label className="text-md" htmlFor="date">Date</Label>
                        <Input id="date" type="date" value={invoice.date} onChange={(e) => updateInvoice({ date: e.target.value})} />
                    </div>
                </form>
            </CardHeader>
        </Card>
    )
}
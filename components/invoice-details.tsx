import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InvoiceDetails() {
    return(
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Invoice Details</CardTitle>
           
       
                <form className="space-y-2">
                    <Label className="text-md" htmlFor="invoice-number">Invoice Number</Label>
                    <Input
                    id="invoice-number"/>
                </form>
            </CardHeader>
        </Card>
    )
}
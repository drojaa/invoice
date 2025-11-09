import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
import {useInvoice} from "../context/invoice-context"
export default function FromAndTo() {
    const {invoice, updateInvoice} = useInvoice()

    return(
        <Card>
        <CardHeader>
            <CardTitle className="text-lg">From & To</CardTitle>

  
            <form>
            <div className="flex flex-row gap-8">  
                <div className="basis-1/2 space-y-2">
  
                         <div className="space-y-2">
                        <Label className="text-sm" htmlFor="user-invoice-name">Your Name</Label>
                        <Input id="user-invoice-name" 
                        placeholder="Your name or company"
                        value={invoice.fromName}
                        onChange={(e) => updateInvoice({fromName: e.target.value})}/>
                        </div>
                                    
                        <div className="space-y-2">
                        <Label className="text-sm" htmlFor="user-invoice-email">Your Email</Label>
                        <Input id="user-invoice-email" placeholder="your@email.com"
                        value={invoice.fromEmail}
                        onChange={(e) => updateInvoice({fromEmail: e.target.value})}/>
                        </div>

                    </div>

                <div className="basis-1/2 space-y-2">
                     <div className="space-y-2">
                    <Label className="text-sm" htmlFor="client-invoice-name">Client Name</Label>
                    <Input id="client-invoice-name" placeholder="Client name or company"
                    value={invoice.toName}
                    onChange={(e) => updateInvoice({toName: e.target.value})}/>
                    </div>

                    <div className="space-y-2">
                    <Label className="text-sm" htmlFor="client-invoice-email">Client Email</Label>
                    <Input id="client-invoice-email" placeholder="client@email.com"
                    value={invoice.toEmail}
                    onChange={(e) => updateInvoice({toEmail: e.target.value})}/>
                    </div>
                </div>
                    
                </div>
                
            </form>
        </CardHeader>
    </Card>
    )
}

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Button } from "./ui/button"
  import { CirclePlus } from "lucide-react"
  

export default function InvoiceItems() {
    let price = 0 
    let amount = "$" + price.toFixed(2)
    return(
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center ">
                <CardTitle>Invoice Items</CardTitle>
                <Button 
                variant="outline">
                <CirclePlus/>
                Add an Item    
                </Button>
                </div>
         
     
                <form>
               

                <div className="flex flex-row gap-2 ">

                    <div className="space-y-2 basis-1/2">
                   
                        <Label htmlFor="item-description">Description</Label>
                        <Input id="item-description" placeholder="Item description"/>

                    </div>

                    <div className="space-y-2 basis-1/2">
                        <Label htmlFor="quanity">Quanity</Label>
                        <Input type="number"id="quanity" placeholder="1"/>
                    </div>

                    <div className="space-y-2 basis-1/2">
                        <Label htmlFor="rate">Rate ($)</Label>
                        <Input type="number"id="rate" placeholder="0"/>
                    </div>

                    <div className="space-y-2 basis-1/2">
                        <Label htmlFor="amount">Amount</Label>
                        <Input
                        value={amount}
                        readOnly/>
                    </div>
                 
                 
                </div>
                </form>

            
                </CardHeader>
        </Card>
    )
}
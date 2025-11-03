
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

export default function TaxAndTotals() {
    return(
        <Card>
            <CardHeader>
                <CardTitle>Tax & Totals</CardTitle>
                <form>
                    <div className="flex gap-10">

                        <div className="basis-1/2 space-y-3">
                            <Label htmlFor="tax-rate">Tax Rate (%)</Label>
                            <Input id="tax-rate" type="number" placeholder="10"/>
                        </div>

                        <div className="basis-1/2 ">
                            <div className="flex justify-between gap-10">
                                <h2>Subtotal</h2>
                                <h2>$0.00</h2>
                            </div>
                          
                            <div className="flex justify-between gap-10">
                                <h2>Tax (10%)</h2>
                                <h2>$0.00</h2>
                            </div>
                            <hr/>
                            <div className="flex justify-between gap-10">
                                <h2 className="font-bold">Total</h2>
                                <h2>$0.00</h2>
                            </div>
                        </div>
                    </div>
                </form>
            </CardHeader>
        </Card>

    )
}
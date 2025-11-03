
import { Button } from "./ui/button"
import { ScanEye } from "lucide-react"

export default function Invoice(){
    return(
        <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Invoice Preview</h1>
          </div>
          <Button variant="outline">Return to Edit</Button>
        </div>
      </div>
    </div>  
    )
}


export interface InvoiveItem {
    id: string
    description: string
    quanity: number | string
    rate: number | string 
    amount: number
}

export interface InvoiceData {
    invoiceNumber: string
    data: string
    fromName: string
    fromEmail: string
    toName: string
    toEmail: string
    items: InvoiveItem[]
    taxRate: number | string
    subtotal: number
    taxAmount: number
    total: number
}
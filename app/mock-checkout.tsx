import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ShoppingCartIcon as PaypalIcon, CreditCard, Minus, Plus, X } from "lucide-react"
import { cartItems, type Product } from "../data/products"

function CartItem({ item }: { item: Product }) {
  return (
    <div className="flex items-center space-x-4 py-2">
      <Image src={item.image || "/placeholder.svg"} alt={item.name} width={80} height={80} className="rounded-md" />
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500">Size: {item.size}</p>
        <div className="flex items-center mt-1">
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
            <Minus className="h-4 w-4" />
          </Button>
          <span className="mx-2">{item.quantity}</span>
          <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default function MockCheckout() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10
  const total = subtotal + shipping

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Checkout</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <Separator />
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Separator />
          <Button className="w-full bg-[#0070ba] hover:bg-[#003087] text-white" size="lg">
            <PaypalIcon className="mr-2 h-5 w-5" />
            Pay with PayPal
          </Button>
          <Button className="w-full bg-[#b2fce4] hover:bg-[#9ce5ce] text-black" size="lg">
            <span className="mr-2 font-bold">afterpay</span>
            Pay in 4 interest-free payments
          </Button>
          <Button className="font-semibold w-full bg-purple-700 hover:bg-purple-900 text-white" size="lg">
            Pay with dot to earn 330 points with this order
          </Button>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline" size="lg">
            <CreditCard className="mr-2 h-5 w-5" />
            Pay with Card
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
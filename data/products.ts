export interface Product {
  id: string
  name: string
  price: number
  image: string
  size: string
  quantity: number
}

export const cartItems: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "/placeholder.svg?height=80&width=80",
    size: "M",
    quantity: 2,
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "/placeholder.svg?height=80&width=80",
    size: "32",
    quantity: 1,
  },
  {
    id: "3",
    name: "Leather Jacket",
    price: 199.99,
    image: "/placeholder.svg?height=80&width=80",
    size: "L",
    quantity: 1,
  },
]


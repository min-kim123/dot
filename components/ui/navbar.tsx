import Link from "next/link"
import { ShoppingBag, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-xl text-gray-800">
              Store
            </Link>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="mr-2">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Cart
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-5 w-5 mr-2" />
              Account
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}


import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

function CartButton() {
  const numItemsInCart = 9;
  return (
    <Button asChild size="icon" variant="outline" className='relative flex justify-center items-center'>
      <Link href="/cart">
        <ShoppingCart />
        <span className='absolute -top-3 -right-3 bg-primary text-white text-xs rounded-full h-6 w-6 flex items-center justify-center'>{numItemsInCart}</span>
      </Link>
    </Button>
  )
}

export default CartButton
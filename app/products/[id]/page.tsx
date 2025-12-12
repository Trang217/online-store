import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import AddTocart from '@/components/single-product/AddTocart';
import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import ProductRating from '@/components/single-product/ProductRating';
import { fetchSingleProduct } from '@/utils/action'
import { formatCurrency } from '@/utils/format';
import Image from 'next/image';
import React from 'react'

async function SingleProductPage({params}: {params: {id: string}}) {
    const product = await fetchSingleProduct(params.id);
    console.log("product", product)
    const { name, image, company, description, price } = product;
    const dollarAmount = formatCurrency(price);
  return (
    <section>
        <BreadCrumbs name={name} />
        <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
            {/* Image first col  */}
            <div className="relative h-full">
                <Image className='w-full rounded object-cover' src={image} alt={name} fill priority sizes='(max-width:768px 100vw, max-width:1200px 50vw, 33wv)' />
            </div>
            {/* Product info second col  */}
            <div>
                <div className="flex gap-x-8 items-center">
                    <h1 className="capitalize text-3xl font-bold">{name}</h1>
                    <FavoriteToggleButton productId={params.id} />
                </div>
                <ProductRating productId={params.id} />
                <h4 className="text-xl mt-2">{company}</h4>
                <p className="mt-3 text-md bg-muted inline-block p-2 rounded">{dollarAmount}</p>
                <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
                <AddTocart productId={params.id} />
            </div>
        </div>
    </section>
  )
}

export default SingleProductPage
import { Star } from "lucide-react";


function ProductRating({productId}:{productId:string}) {
    const rating = 4.2;
    const count = 25;
    const className = `flex gap-1 items-center text-md mt-1 mb-4`;
    const countValue = `(${count}) reviews`
  return (
    <span className={className}>
        <Star className="w-3 h-3" />
        {rating} {countValue}
    </span>
  )
}

export default ProductRating
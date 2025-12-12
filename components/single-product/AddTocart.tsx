import { Button } from "../ui/button"


function AddTocart({productId}:{productId:string}) {
  return (
    <Button 
      className="capitalize mt-8"
      size="lg">
            add to cart
    </Button>
  )
}

export default AddTocart
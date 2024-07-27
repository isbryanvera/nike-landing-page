import { generateClassNames } from "../utils/generateClassNames"

const ShoeCard = ({ imgUrl, changeBigShoeImage, bigShoeImage}) => {

  const handleClick = () => {
    if(bigShoeImage !== imgUrl) changeBigShoeImage(imgUrl.bigShoe)
  }
  
  return (
    <div 
      className={` 
        ${generateClassNames('border-2 rounded-xl cursor-pointer max-sm:flex-1', {
          'border-coral-red' : bigShoeImage === imgUrl.bigShoe
        })}`
      }
      
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 rounded-xl max-sm:p-4">
        <img 
          src={imgUrl.thumbnail} 
          alt="shoe collection" 
          width={127}
          height={127}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default ShoeCard
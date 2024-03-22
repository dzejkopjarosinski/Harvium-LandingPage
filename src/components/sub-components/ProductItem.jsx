const ProductItem = ({ name, type, price }) => (
  <div className='flex flex-col gap-4'>
    <img src='src/assets/product.png' alt='product' />

    <div className='flex flex-col gap-2'>
      <div>
        <p className='text-xl font-bold mt-2 non-italic'>{name}</p>
        <p className='non-italic'>{type}</p>
      </div>

      <p className='text-xl font-bold mt-2 non-italic'>${price}</p>
    </div>

    <button className='border border-black py-2 px-5'>Add to cart</button>
  </div>
);

export default ProductItem;

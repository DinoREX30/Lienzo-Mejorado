import Layout from '../../Components/Layout'

export default function MyOrder
() {
  return (
    <Layout>
      MyOrder
      <div className=' overflow-y-scroll flex-1'>
              {
                context.order?.slice(-1)[0](product => (
                  <OrderCard 
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    imageSrc={product.imageSrc}
                    price={product.price}
                  />
                ))
              }
            </div>  
    </Layout>
  )
}

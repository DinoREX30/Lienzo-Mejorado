import { FaRegTrashAlt } from "react-icons/fa";


const OrderCard = props => {

    const { imageSrc, price, name, handleDelete, id } = props


    return (
        <div className="flex justify-between items-center p-4 ">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageSrc} alt="" />
                </figure>
                <p className=" font-thin text-md ">{name}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-thin">${price}</p>
                <FaRegTrashAlt onClick={() => handleDelete(id)} className='w-4 h-4 cursor-pointer'/>
            </div>
        </div>
    )
}

export default OrderCard
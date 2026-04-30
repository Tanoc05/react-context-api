import { Heart,ShoppingCart,User } from 'lucide-react';
import { Link } from 'react-router-dom';


function Card(props){
    return(
        <>
            <div className="w-[360px] h-full border border-slate-200 rounded-md flex flex-col bg-white p-2">
                <div className="flex justify-center">
                    <img 
                        src={props.pr.image} 
                        alt={props.pr.title} 
                        className="h-32 w-32 object-contain bg-gray-100 rounded m-3"
                    />
                </div>

                <div className="w-full flex-grow flex flex-col">
                    <p className="text-[10px] uppercase text-slate-400 mb-1">{props.pr.category}</p>
                    <Link to={`/prodotto/${props.pr.id}`} className='text-[13px] line-clamp-2 hover:underline'>{props.pr.title}</Link>
                </div>

                <div id='prezzo' className="w-full mt-4 flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-2">
                        <p className="text-[11px] text-red-600 line-through">${(props.pr.price + 10).toFixed(2)}</p>
                        <p className="text-[11px] text-indigo-500 font-bold">${props.pr.price}</p>
                    </div>
                    <ShoppingCart size={16} className='text-indigo-500 cursor-pointer'/>
                </div>
            </div>
        </>
    )
}


export default Card;
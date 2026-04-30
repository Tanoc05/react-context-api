import { useNavigate,useParams,Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { Star,Leaf,MoveLeft,MoveRight } from 'lucide-react';
import axios from "axios";

function DettaglioProdotto(){

    const {id} = useParams();
    const [Prodotto,setProdotto] = useState([]);
    const navigate = useNavigate();
    const [caricamneto,setCaricamento] = useState(true);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                setTimeout(() => {
                    setProdotto(res.data);
                    setCaricamento(false);
                },400);
            })
            .catch((err) => console.err());
    }, [id, navigate]);

    return(
        <>  

            {!caricamneto ? 
            (
                <div>
                    <hr className="text-slate-100 mt-4 mb-5"/>
                    <div className="w-[85%] mx-auto">
                        
                        <div className="flex justify-between">

                            {(Number(id) - 1 === 0) ?
                            (<div></div>): 
                            (<div onClick={() => {
                                    navigate(`/prodotto/${Number(id) - 1}`)
                                    setCaricamento(true)
                                }} className="flex gap-2 items-center hover:underline">
                                    <MoveLeft />
                                    <Link to="/prodotti">prodotto precedente</Link>
                                </div>)
                            }

                            {(Number(id) + 1 === 21) ?
                            ( <div></div>):
                            (<div onClick={() => {
                                    navigate(`/prodotto/${Number(id) + 1}`)
                                    setCaricamento(true)
                                }} className="flex gap-2 items-center hover:underline">
                                    <p>prodotto successivo</p>
                                    <MoveRight />
                                </div>)
                            }
                            
                        </div>
                    

                        <div className="flex mt-10">

                            <div className="w-[500px] h-[500px] flex">

                                <div className="flex flex-col gap-2 mr-10">
                                    <img src={Prodotto.image} alt={Prodotto.title} className="w-[80px] border border-indigo-500 rounded-md px-3 py-2" />
                                    <img src={Prodotto.image} alt={Prodotto.title} className="w-[80px] border border-slate-300 rounded-md px-3 py-2" />
                                    <img src={Prodotto.image} alt={Prodotto.title} className="w-[80px] border border-slate-300 rounded-md px-3 py-2" />
                                    <img src={Prodotto.image} alt={Prodotto.title} className="w-[80px] border border-slate-300 rounded-md px-3 py-2" />
                                    <img src={Prodotto.image} alt={Prodotto.title} className="w-[80px] border border-slate-300 rounded-md px-3 py-2" />
                                </div>
                                
                                <div className="flex items-center justify-center bg-slate-100 rounded-md" style={{ width: "420px", height: "420px" }}>
                                    <img 
                                        src={Prodotto.image} 
                                        alt={Prodotto.title} 
                                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                    />
                                </div>

                            </div>
                        
                            <div className="ml-10">
                                <h2 className="font-bold text-lg">{Prodotto.title}</h2>
                                <div className="mt-2 ml-1 flex items-center gap-1">
                                    <Star fill="black" size={15}/>
                                    <p>{Prodotto.rating ? Prodotto.rating.rate : "Nessuna Recensione"}</p>
                                    <p className="text-sm">({Prodotto.rating ? Prodotto.rating.count : 0} recensioni)</p>
                                </div>
                                <div className="mt-7 flex items-center gap-5">
                                    <h2 className="text-indigo-500 text-[30px]">{Prodotto.price ? `$${Prodotto.price}` : ""}</h2>
                                    <h5 className="text-slate-500 line-through">{Prodotto.price ? `$${((Prodotto.price) + 10).toFixed(2)}` : ""}</h5>
                                </div>

                                <div className="mt-3">
                                    <p className="tetx-sm text-slate-800">{Prodotto.description}</p>
                                </div>
        
                                <div className="flex gap-3 mt-4">
                                    <button onClick={() => {navigate("/error")}} className="w-[50%] px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">Aggiungi al carrello</button>
                                    <button onClick={() => {navigate("/error")}} className="w-[50%] px-4 py-2 border border-indigo-500 text-indigo-500 rounded hover:bg-indigo-50 transition">Aquista</button>
                                </div>

                                <div className="border-t border-slate-100 mt-5 pt-4">
                                    <div className="flex gap-1">
                                        <Leaf className="text-indigo-500"/>
                                        <p className="text-sm">Sustainibility resourced</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) 
            : (
            <div className="flex flex-col items-center justify-center min-h-[200px] space-y-4 mt-[200px]">
                <div className="w-10 h-10 border-3 border-indigo-200 border-t-indigo-500 rounded-full animate-spin"></div>                
                <p className="text-slate-500 animate-pulse">
                Caricamento in corso...
                </p>
            </div>)}
            
            
        </>
    )
}

export default DettaglioProdotto;
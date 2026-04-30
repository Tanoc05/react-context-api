import { useState,useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import { useNavigate } from "react-router-dom";
import { useBudget } from "./Contexts/BudgetContext";

function Prodotti(){

    const [TrendingNow,SetTrendingNow] = useState([]);
    const navigate = useNavigate();
    const {Budget,setBudget} = useBudget();
    const [FilteredTrendingNow,setFilteredTrendingNow] = useState([]);


    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/")
        .then(res => {
            console.log(res.data)
            SetTrendingNow(res.data)
            setFilteredTrendingNow(res.data)
        })
        .catch(error => console.error)  
    },[])


    useEffect(() => {
        if(Budget){
            setFilteredTrendingNow(TrendingNow.filter((item) => item.price <= 30))
        }else{
            setFilteredTrendingNow(TrendingNow);
        }
    },[Budget])



    return(
        <>
            <div className="w-[95%] mx-auto mt-[50px] bg-slate-100 rounded-sm pb-6">
                <div className="text-center py-4">
                    <p className="font-bold text-lg mb-1">Tutti i Prodotti</p>
                    <p className="text-xs text-slate-400">I pezzi di Cui Stanno parlando tutti</p>
                </div>

                <div className="pr-3 pl-8 mt-3 grid finito grid-cols-4 gap-1 gap-y-4">
                    {FilteredTrendingNow.map((pr) => (
                        <Card key={pr.id} pr={pr}/>
                    ))}
                </div>
            </div>
    
        </>
    )
}

export default Prodotti;

import axios from "axios";
import Card from "./components/Card";
import { useEffect,useState } from "react";
import { useBudget } from "./Contexts/BudgetContext";


function HomePage(){

    const [TrendingNow,SetTrendingNow] = useState([]);
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
            <div className="w-[95%] h-100 mx-auto mt-4 rounded-md bg-[url('https://plus.unsplash.com/premium_photo-1747932197925-d7ad6c64f30b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
                <div className="w-[45%] text-white ml-5 pt-[7%]">
                    
                    <div className="">
                        <h2 className="text-[35px]">Migliora e ridefinisci il tuo armadio <span className="text-indigo-500">con noi</span></h2>
                        <p className="mt-3">proval'esperienza dei nostri migliori materali mai creati sulla tua pelle</p>
                    </div>

                    <div className="flex gap-2 mt-5">
                        <button className="bg-indigo-500 px-3 py-2 rounded-sm">Scopri la nuova collezzione</button>
                        <button className="px-3 py-2 border rounded-sm">Guarda tutti i prodotti</button>
                    </div>
                </div>
            </div>
            <hr className="mt-[50px] text-slate-100" />
            <div className="w-[95%] mx-auto mt-[50px] bg-slate-100 rounded-sm pb-6">
                <div className="text-center py-4">
                    <p className="font-bold text-lg mb-1">In Trend Ora</p>
                    <p className="text-xs text-slate-400">I pezzi di Cui Stanno parlando tutti</p>
                </div>

                <div className="pr-3 pl-8 mt-3 grid grid-cols-4 gap-1 gap-y-4">
                    {FilteredTrendingNow.map((pr) => (
                        <Card key={pr.id} pr={pr}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomePage;
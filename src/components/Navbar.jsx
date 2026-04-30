import { Link, NavLink } from "react-router-dom";
import { Heart,ShoppingCart,User } from 'lucide-react';
import { useBudget } from "../Contexts/BudgetContext";

function Navbar(){

    const linkStyles = ({ isActive }) => 
    `pb-1 transition-all duration-200 border-b-2 ${
      isActive 
        ? "text-indigo-500 border-indigo-500" 
        : "text-slate-600 border-transparent hover:text-indigo-400"
    }`;

    const {Budget,setBudget} = useBudget();

    return(
        <>
            <div className="w-[95%] mx-auto flex justify-between items-center px-3 pt-4 font-medium">
                {/* Logo */}
                <div>
                    <h4 className="font-bold text-xl tracking-tighter text-indigo-500">STORE</h4>
                </div>

                {/* Navigazione centrale */}
                <nav className="flex gap-8">
                    <NavLink to="/" className={linkStyles}>Home</NavLink>
                    <NavLink to="/prodotti" className={linkStyles}>Prodotti</NavLink>
                    <NavLink to="/chi-siamo" className={linkStyles}>Chi Siamo</NavLink>
                </nav> 
                
                <div className="flex gap-5">
                   <div>
                        <button onClick={() => {setBudget((prev) => !prev)}} className={!Budget ? "py-2 px-1.5 rounded-md text-white bg-indigo-500" : "text-slate-600 border border-indigo-500 py-2 px-1.5 rounded-md "}>{!Budget ? "Attiva Budget Mode" : "Disattiva Budget Mode"}</button>
                    </div>
                    <div className="flex items-center justify-center w-9 h-9 bg-slate-100 rounded-full hover:bg-slate-200 cursor-pointer transition-colors">
                        <User size={18} className="text-slate-600" />
                    </div> 
                </div>
                
            </div>
        </>
    )
}

export default Navbar;
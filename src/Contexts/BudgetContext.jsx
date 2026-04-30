import { Children, createContext,useContext,useState } from "react";

const budgetContext = createContext();

function BudgetProvider({children}){
    const [Budget,setBudget] = useState(false);

    return(
        <budgetContext.Provider
            value={{Budget,setBudget}}
        >
            {children}
        </budgetContext.Provider>
    );
}

function useBudget(){
    const context = useContext(budgetContext);
    return context;
}

export {BudgetProvider,useBudget}
function Footer(){
    return(
        <>  
            <div className="bg-white border-b border-t border-slate-100 py-10 mt-[50px]">
                <div className="w-[95%] mx-auto bg-indigo-500 p-3 text-white rounded-md">
                    <h2 className="font-medium">Unisciti al Nostro circolo</h2>
                    <div className="w-[45%]">
                        <p className="text-[11px] text-white mt-2"> iscriviti per ricevere l'accesso anticipato ai nuovi Drop, offerte esclusive e gli ultimi trend direttamente nella tuo inbox</p>
                    </div>
                    
                    <div className="flex gap-2">
                        <input className="bg-indigo-400 py-2 pl-3 pr-[60px] rounded-md mt-4 text-[10px]" type="text" placeholder="inserisci la tua e-mail.."/>
                        <button className="bg-white text-indigo-500 py-2 px-4 rounded-md mt-4 text-[10px] ">Iscriviti</button>
                    </div>
                </div>
            </div>
            <div className="w-[95%] mx-auto mt-5 flex justify-between items-center pb-4">
                <div>
                    <p className="text-xs font-medium">Store - Gaetano Davide Calabro'</p>
                    <p className="text-[10px] text-slate-400">
                        2026 Store - React Router Project
                    </p>
                </div>
                <div className="text-[11px] flex gap-2 text-slate-400">
                    <span>SOSTENIBILITA'</span>
                    <span>TRACCIA ORDINE</span>
                    <span>RIMBORSI</span>
                    <span>SUPPORTO</span>
                    <span>PRIVACY</span>
                </div>
            </div>
        </>
    )
}

export default Footer;
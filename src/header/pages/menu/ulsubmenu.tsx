import React from "react";
import Li from './li';

function Ul(props:any){
    const ArraiSubMenu:string[] = ["Agendar Visita","relatorio"];

    return(
        <>
                {   ArraiSubMenu.map((ArraiSubMenu)=>
                    <li><a>{ArraiSubMenu}</a></li>
                    )
                    
                }

        </>

    );
}

export default Ul;
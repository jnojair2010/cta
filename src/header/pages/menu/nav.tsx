import React from "react";

import Li from './li';


function Nav(){

    const ArrayLi:string[] = ["home","servicos Técnicos","Constas","Eventos"];

    return(
        <nav>
            <Li name={ArrayLi[0]} />
        </nav>
    );

}

export default Nav;
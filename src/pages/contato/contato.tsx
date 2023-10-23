import React from "react";
import ContatoForme from './contatoform'
import Alerta from  './alerta';



function Contato(){
    return(
        <div>
             <Alerta />
            <ContatoForme />
        </div>

    );

}
export default Contato;
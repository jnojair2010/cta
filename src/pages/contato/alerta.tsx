import React from "react";
import AlertStyle from './alerta.module.css';

function Alerta(){
    return(
        <div className={AlertStyle.contato_forme}>
    
                <div className={AlertStyle.transp}>
                <img
                    className={AlertStyle.demo_bg}
                    src="https://ctalimentoeconsultoria.com.br/wp-content/uploads/2022/10/31170633_368611_gdo-18236904.webp"
                    alt=""
                    
                ></img>
                <img
                    className={AlertStyle.demo_bg2}
                    src="https://ctalimentoeconsultoria.com.br/wp-content/uploads/2022/10/Miniatura-para-Youtube-sobre-Marketing-Digital20.png"
                >
                </img>
            
            </div>
        
        
    
     </div>
    );
}
export default Alerta;
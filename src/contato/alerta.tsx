import React from "react";
import stylecontatoform from './alerta.module.css';
import Menu from   '../header/pages/menu/divmenu';

function Alerta(){
    return(
        <div className={stylecontatoform.contato_forme}>
             <Menu />
                <div className={stylecontatoform.transp}>
                <img
                    className={stylecontatoform.demo_bg}
                    src="https://ctalimentoeconsultoria.com.br/wp-content/uploads/2022/10/31170633_368611_gdo-18236904.webp"
                    alt=""
                    
                ></img>
                <img
                    className={stylecontatoform.demo_bg2}
                    src="https://ctalimentoeconsultoria.com.br/wp-content/uploads/2022/10/Miniatura-para-Youtube-sobre-Marketing-Digital20.png"
                >
                </img>
            
            </div>
        
        
    
     </div>
    );
}
export default Alerta;
import React, {useState} from 'react';
import styles from './li.module.css';

import Li2 from './li2';

function Li(props:any){
   
    const [isChecked, setChecked] = useState(false);
    const [ stylemodule, setStylemodule]= useState(styles.ulInativo)

    const ArrayLiSubmenuST:string[] = ["Agendar","Relatorio"]
    
        function fecharSubmenu(v:boolean){
            if(v==false){
                setStylemodule(styles.ulInativo);
            } 
        }
        function abrirSubmenu(){
            setStylemodule(styles.ulAtivo);
        }
        
        function handleClick(){
           abrirSubmenu();
        }

    return(
        <>
            {
                props.name =="servicos Técnicos"? 
                <li className={styles.li} >
                    <a
                    onClick={handleClick}
                    >{props.name}</a>
                        <ul
                            className={stylemodule}>

                                { ArrayLiSubmenuST.map(
                                (ArrayLiSubmenuST)=>
                                    <Li2 
                                        abrirSubmenu={fecharSubmenu}
                                        name={ArrayLiSubmenuST}
                                    />
                            )}
                        </ul>
                    </li>
  
                  : (
                    <li className={styles.li} ><a href={props.name}>{props.name}</a></li>
                )

            }
    
        </>
    );
}
export default Li;

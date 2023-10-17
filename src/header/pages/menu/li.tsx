import React from 'react';
import styles from './li.module.css'

function Li(props:any){

        const ArraiSubMenu:string[] = ["Agendar Visita","relatorio"];
    

    return(
        <>
            <li className={styles.li} ><a href="#"
                                         //href={props.name} 
                                          >{props.name}</a></li>
        </>
    );
}
export default Li;
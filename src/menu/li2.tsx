import React from "react";
import styles from './Li2.module.css';

function Li2(props:any){

    function fechar(){

        return false;
    }

    return(
        <>
            <li className={styles.li}>
                    <a
                    onClick={function(){
                        let a:boolean = fechar()
                        props.abrirSubmenu(a);
                        }
                    }
                    href={props.name}>{props.name}
                    </a>
             </li>
        </>
    );
}
export default Li2
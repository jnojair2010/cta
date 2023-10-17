import React, {useState} from 'react';
import styles from './li.module.css';

import Ul from './ulsubmenu';

function Li(props:any){

    const [isChecked, setIsChecked] = useState(false);
    const [modulo1, setModulo1] = useState(styles.modulo1);


    return(
        <>
            { props.name == "servicos Técnicos"? 
                <li
                    className={styles.li}
                    > 
                       <a href='#'>Servicos Técnicos</a>

                       <ul className={styles.ulsubmenu}>
                            <Ul />
                       </ul> 
                </li>
               
            :(
                <li
                    className={styles.li}>
                    <a href="#"
                        //href={props.name} 
                    >{props.name}</a>
                </li>
            )
           }

            
        </>
    );
}
export default Li;
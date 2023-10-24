import React from "react";
import Nav from './nav';
import styles from './divmenu.module.css';

function Menu(){
    return(
        <div>
            
            <div className={styles.divmenu}>
            <Nav />
            </div>
        </div>
    );

}
export default Menu;
import React from "react";
import Nav from './nav';
import styles from './divmenu.module.css';

function Menu(){
    return(
        <div className={styles.divmenu}>
         <Nav />
        </div>
    );

}
export default Menu;
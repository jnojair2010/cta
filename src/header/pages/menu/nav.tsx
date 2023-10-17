import React from "react";

import Li from './li';

import styles from './navmenu.module.css';


function Nav(){

    const ArrayLi:string[] = ["home","servicos Técnicos","Constas","Eventos"];

    return(
        <nav className={styles.nav}>
          {ArrayLi.map((ArrayLi)=> <Li name={ArrayLi} />)}  
        </nav>
    );

}

export default Nav;
import React,{useState} from "react";

import Li from './li';
import Li2 from './li2';

import styles from './navmenu.module.css';


function Nav(){
  const ArrayLi:string[] = ["home","servicos Técnicos","Contato","Eventos"];

    return(
      <nav className={styles.nav} >

        {
          ArrayLi.map(
            (ArrayLi)=>

             <Li name={ArrayLi }
            
            />
          )
        }


      </nav>
        
    );

}

export default Nav;

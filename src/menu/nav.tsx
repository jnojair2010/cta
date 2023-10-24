import React, {useState} from "react";

import Li from './li';

import styles from './navmenu.module.css';


function Nav(){
  const ArrayLi:string[] = ["home","servicos tecnicos","contato","eventos"];

  const [isSylemenu, setisSylemenu] = useState(styles.nav);
  let b:boolean = false;

      function setMenuMobile(){
    
        if(b===false){
          setisSylemenu(styles.navDisplay);
        }else if(b===true){
          setisSylemenu(styles.nav);
        }
        b=!b;
      }
    return(
     <>
      <div className={styles.menuMobile}>
                  <label onClick={setMenuMobile} >
                      <div  >
                      <span className={styles.span} ></span>
                      </div>
                  </label>
              </div>
    
        <nav className={isSylemenu} >

          {
            ArrayLi.map(
              (ArrayLi)=>

              <Li name={ArrayLi }
              
              />
            )
          }


        </nav>
      </> 
    );

}

export default Nav;

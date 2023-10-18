import react from 'react';

import Menu from '../menu/divmenu';
import homeStyles from  './home.module.css';


function Home(){

    return(
        <div className={homeStyles.divHome} >
            <Menu />
        </div>
    )

}

export default Home;
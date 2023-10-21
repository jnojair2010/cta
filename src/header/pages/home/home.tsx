import react from 'react';

import Menu from '../menu/divmenu';
import homeStyles from  './home.module.css';

import Footer from '../../../footer/footer';


function Home(){

    return(
        <div className={homeStyles.divHome} >
            <Menu />
            <Footer />
        </div>
    )

}

export default Home;
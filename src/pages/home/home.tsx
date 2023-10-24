import React from 'react';
import homeStyles from  './home.module.css';

import Footer from '../../footer/footer';


function Home(){

    return(
        <div className={homeStyles.divHome} >
            <Footer />
        </div>
    )

}

export default Home;
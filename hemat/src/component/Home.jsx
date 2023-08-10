import React from 'react';
// import styled from './styles/Home.module'
import styled from './home.module.css'

const Home = () => {
    return <div className={styled.main_div}> 

        {/* <div className={styled.infomation_div}> */}

<div className={styled.inner}>

    <div className={styled.mid_aline}>
        <div className={styled.xsmall } >
            <h1 className={styled.heading_h1}>Leveraging Science 
to Brighten the Future</h1>
        </div>
    </div>
</div>
        {/* </div> */}
    </div>;
}


export default Home;
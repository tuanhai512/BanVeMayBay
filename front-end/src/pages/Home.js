import React from 'react';
import Header from '../component/Header/Header'
import Carousel from '../component/Carousel/Carousel'
import TabForm from '../component/Tabs/TabForm'
import Partner from '../component/commom/Partner/Partner'
import Navbar from '../component/Navbar/Navbar'

function Home() {
  return (
    <div className='home'>
          <Navbar/>
          <Header/>
          <Carousel/>
          <TabForm/>
          <Partner/>
    </div>
  );
}
export default Home
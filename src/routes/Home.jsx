import React, { Fragment } from 'react';

import Hero from '../components/Hero/Hero.jsx'
import Teams from '../container/Teams.jsx'
import FormsRegister from '../container/FormsRegister.jsx'

const Home = () => {
  return (
    <Fragment>
      <Hero/>
      <Teams/>
      <FormsRegister/>
    </Fragment>
  )
}


export default Home;

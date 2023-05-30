import React, { useState } from 'react';
import HeroBanner from './HeroBanner';
import SearchExercises from './SearchExercises';
import Exercises from './Exercises';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </div>
  )
}

export default Home;

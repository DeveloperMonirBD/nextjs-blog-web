import React from 'react';
import FeaturedPosts from './components/FeaturedPosts';

const Home = async () => {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return (
    <div className='container mx-auto px-3'>
      <h1 className='text-3xl text-center font-bold pb-10 pt-20'>Featured Products</h1>
      <div>
        <FeaturedPosts data={data} />
      </div>
    </div>
  );
};

export default Home;
import React from 'react';
import Songs from '../songs/Songs';
import SearchBar from '../songs/SearchBar';
import CorsButton from './CorsButton';

const Index = () => {
  return (
    <div>
        <SearchBar />
        <CorsButton />
        <Songs />
    </div>
  )
}

export default Index;
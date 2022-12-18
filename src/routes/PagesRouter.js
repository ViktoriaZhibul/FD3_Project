import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageMain } from './../pages/PageMain';
import { Page1NavAllBreeds } from './../pages/Page1NavAllBreeds';
import { Page2NavAllBreeds } from './../pages/Page2NavAllBreeds';
import { Page3NavAllBreeds } from './../pages/Page3NavAllBreeds';
import { PageSearch } from './../pages/PageSearch';
import { PageFilter } from './../pages/PageFilter';

export const PagesRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<PageMain />} />
        <Route path="/allBreeds/page=1" element={<Page1NavAllBreeds />} />
        <Route path="/allBreeds/page=2" element={<Page2NavAllBreeds />} />
        <Route path="/allBreeds/page=3" element={<Page3NavAllBreeds />} />
        <Route path="/search/:breedname" element={<PageSearch />} />
        <Route path="/filter/:filterParams" element={<PageFilter />} />
      </Routes>
    );
    
};

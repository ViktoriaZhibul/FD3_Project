import { configureStore } from '@reduxjs/toolkit';

import breedsSlice from './breedsSlice';
import userSlice from './userSlice';
import favoritesSlice from './favoritesSlice';


export const store = configureStore({
    reducer: {
        allBreeds: breedsSlice,
        user: userSlice,
        favorites: favoritesSlice,
    },
})

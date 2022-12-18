import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    idUser: null,
    idBreed: [],
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        getUserFavorites: (state, action) => {
            state.idUser = action.payload.idUser;
            state.idBreed = action.payload.idBreed;
        },
        addUserFavorites: (state, action) => {
            state.idBreed.push(action.payload);
        },
        removeFavorites: (state) => {
            state.idUser = null;
            state.idBreed = [];
        },
        deliteFavorites: (state, action) => {
            const index = state.idBreed.findIndex(el => el === action.payload.id);
            if(index !== -1) {
                state.idBreed.splice(index, 1);
            }
        },
    },
});

export const { getUserFavorites } = favoritesSlice.actions;
export const { addUserFavorites } = favoritesSlice.actions;
export const { removeFavorites } = favoritesSlice.actions;
export const { deliteFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
import React, {useEffect} from 'react';

import "./MainContent.css";

import Search from "./Search/Search"
import Filter from "./Filter/Filter"

import { PagesLinks } from "../pages/PagesLinks";
import { PagesRouter } from "../routes/PagesRouter";

import { useAuth } from "./../Header/use-auth"

import { useDispatch} from 'react-redux';

function MainContent() {
   const dispatch = useDispatch();
   const {isAuth, id} = useAuth();

   return (
      <main className='main'>
         <Search />
         <Filter />
         <PagesLinks />
         <PagesRouter />
      </main>
   )
}

export default MainContent;
import { loadData } from "./breedsSlice.js";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./../firebase"
import { getDatabase, ref, onValue} from "firebase/database";


export function breedsLoad(dispatch) {
  try{
    dispatch( loadData({dataLoadStatus: false, allBreeds:[]}) );
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const starCountRef = ref(database);
    let data = null;
      onValue(starCountRef, (snapshot) => {
        data = snapshot.val();
        dispatch( loadData({dataLoadStatus:true, allBreeds:data}) );
      });
  }
  catch{
    console.error();
  };
};

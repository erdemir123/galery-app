import {
    getDatabase,
    ref,
    set,
    push,
    onValue,
    remove,
    update,
  } from "firebase/database";
  import { useEffect, useState } from "react";
import firebase from "./firebase";

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cardList, setCardList] = useState();
  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "user/");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];
      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setCardList(userArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, cardList };
};
export const Addİmage=(file)=>{
  console.log(file)
    const db=getDatabase(firebase)
    const userRef=ref(db,"user/")
    const newUserRef=push(userRef)
    set(newUserRef,{
         name:file
    })
}
export const deleteİmage=(id)=>{
    const db = getDatabase(firebase);
    // const userRef=ref(db,"user/")
    remove(ref(db,"user/"+id))
    }
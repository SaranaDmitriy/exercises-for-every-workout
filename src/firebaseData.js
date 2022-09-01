import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyB_MgUajsgryEmUjNy6bG9SywGZssunI9c",
  authDomain: "workout-plan-50173.firebaseapp.com",
  databaseURL: "https://workout-plan-50173-default-rtdb.firebaseio.com",
  projectId: "workout-plan-50173",
  storageBucket: "workout-plan-50173.appspot.com",
  messagingSenderId: "607508504132",
  appId: "1:607508504132:web:c9d253d06c744757b0e611",
};

const app = initializeApp(firebaseConfig); // ??????
const dbRef = ref(getDatabase());
const getDataPromise = get(child(dbRef, `/`));

function useFirebaseData() {
  const [data, setData] = useState();
  const getData = async () => {
    const snapshot = await getDataPromise;
    if (snapshot.exists()) {
      setData(snapshot.val());
    } else {
      console.log("No data available");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
}

export default useFirebaseData;

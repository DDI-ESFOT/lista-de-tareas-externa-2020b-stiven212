import { useEffect, useState } from 'react';
import UserInfo from './UserInfo';
import TodoList from './TodoList';

function App() {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);

  useEffect( ()=> {

    const getData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const userInfo = await response.json();
      
      console.log("userInfo", userInfo);
      setUserData(userInfo);
    }


    getData(); 
    


  }, [userId]);

  const handlePrevUser = () => {
    if(userId > 1){
      setUserId(userId - 1);
    }
  };

  const handleNextUser = () => {
    if(userId < 10){
      setUserId(userId + 1);
    }
  }




  return (
    <>
      <div>
        <button onClick={handlePrevUser} disabled={userId <=1}>Anterior</button>
        <button onClick={handleNextUser} disabled={userId >=10}>Siguiente</button>
      </div>
      {userData ? <UserInfo user={userData}/> : 'loading....'}

      <TodoList users={userId}/>
    </>
  
  );
}

export default App;

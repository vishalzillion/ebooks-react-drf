import React, { createContext, useState ,useEffect} from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    token: localStorage.getItem('token') || '',
    username: localStorage.getItem('username') || '',
    user_type: localStorage.getItem('user_type') || '', // Add user_type here
  });

  

  // Function to update user data
  const updateUserData = (newUserData) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      ...newUserData,
    }));
  };
  useEffect(() => {
    localStorage.setItem('token', userData.token);
    localStorage.setItem('username', userData.username);
    localStorage.setItem('user_type', userData.user_type);
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };






// context api let you create a state that all the component can access that are wrapped inside this context
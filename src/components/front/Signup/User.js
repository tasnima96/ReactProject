import React from 'react';

const User = ({handleLogout}) => {
  return (
    <>
    <nav>
        <h1>welcome to FoodParadise!</h1>
        <button onClick={handleLogout}>Logout</button>
    </nav>
    </>
  )
}

export default User;
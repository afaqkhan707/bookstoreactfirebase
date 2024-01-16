import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user, 'userComponent');
  return <div>{user}</div>;
};

export default User;

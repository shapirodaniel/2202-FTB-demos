import { useEffect } from 'react';
import { registerUser, loginUser } from '../data-access-layer/users';

export function useUsers() {
  useEffect(() => {
    // we might not need this, unless we want to display
    // lists of users
  }, []);

  return {
    registerUser, // this layer of abstraction protects us against breaking changes in an external API, and it also allows us to "loosely couple" the presentation of the user data and the actual logic that gives us that data
    loginUser,
  };
}

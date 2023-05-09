import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy_Name",
    email: "Dummy@gmail.com",
  },
});

export default UserContext;

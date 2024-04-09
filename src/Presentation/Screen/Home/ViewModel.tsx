import { RemoveUserCase } from "../../../Domain/useCases/UserLocal/RemoveUser";
import React from "react";

const HomeViewModel = () => {
    const removeSession = async () => {
      await RemoveUserCase();
    };
  
    return {
      removeSession
    };
  };
  
  export default HomeViewModel;
import React, { useContext, useState, useEffect } from "react";

// create context
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // states
  const [searchLocation, setSearchLocation] = useState("Bhitu Billi😽❤");
  const [numberOfRooms, setNumberOfRooms] = useState(2);
  const [housingInformation, setHousingInformation] = useState({});

  //   call-back methods
  const updateSearchLocation = (location) => {
    setSearchLocation(location);
  };

  const updateRoomSlider = (number) => {
    setNumberOfRooms(number);
  };

  const searchAppartment = () => {
    console.log(searchLocation, numberOfRooms);
  };

  //   useEffect
  useEffect(() => {
    searchAppartment();
  }, [numberOfRooms, searchLocation]);

  return (
    <AppContext.Provider
      value={{
        housingInformation,
        numberOfRooms,
        searchLocation,
        updateSearchLocation,
        searchAppartment,
        updateRoomSlider,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// export context
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };

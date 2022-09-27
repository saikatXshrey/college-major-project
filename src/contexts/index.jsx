import React, { useContext, useState, useEffect } from "react";

// create context
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // states
  const [searchLocation, setSearchLocation] = useState(null);
  const [numberOfRooms, setNumberOfRooms] = useState(2);
  const [housePrice, setHousePrice] = useState(69);
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

  const updateHousingInformation = () => {
    setHousingInformation((previous) => ({
      ...previous,
      location: searchLocation,
      rooms: numberOfRooms,
      price: housePrice,
    }));
  };

  //   useEffect
  useEffect(() => {
    // price prediction
    searchAppartment();

    // update housing information
    updateHousingInformation();
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

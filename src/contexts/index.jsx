import React, { useContext, useState, useEffect } from "react";

// create context
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // states
  const [searchLocation, setSearchLocation] = useState({
    longitude: 77.5913,
    latitude: 12.97912,
  });
  const [numberOfRooms, setNumberOfRooms] = useState(2);
  const [housePrice, setHousePrice] = useState(69);
  const [housingInformation, setHousingInformation] = useState({});
  const [counter, setCounter] = useState(-1);

  //   call-back methods
  const updateSearchLocation = (name, lon, lat) => {
    setSearchLocation((previous) => ({
      ...previous,
      name: name,
      longitude: lon,
      latitude: lat,
    }));
  };

  const updateRoomSlider = (number) => {
    setNumberOfRooms(number);
  };

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  const updateHousingInformation = () => {
    setHousingInformation((previous) => ({
      ...previous,
      location: searchLocation.name,
      rooms: numberOfRooms,
      price: housePrice,
    }));
  };

  const searchAppartment = () => {
    setHousePrice(169);
    console.log(searchLocation, numberOfRooms);
  };

  //   useEffect
  useEffect(() => {
    // update counter
    updateCounter();

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
        counter,
        searchLocation,
        updateSearchLocation,
        searchAppartment,
        updateCounter,
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

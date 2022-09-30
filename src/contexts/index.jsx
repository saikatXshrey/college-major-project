import React, { useContext, useState, useEffect } from "react";

// create context
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // states
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchLocation, setSearchLocation] = useState({
    longitude: 77.5913,
    latitude: 12.97912,
  });
  const [numberOfRooms, setNumberOfRooms] = useState(2);
  const [housePrice, setHousePrice] = useState(69);
  const [housingInformation, setHousingInformation] = useState({});
  const [counter, setCounter] = useState(-1);
  const [searchRequest, setSearchRequest] = useState({});

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
      sqft: searchRequest.sqft,
      bath: searchRequest.bath,
      balcony: searchRequest.balcony,
      rooms: numberOfRooms,
      price: housePrice,
    }));
  };

  const searchAppartment = () => {
    setHousePrice(123);
  };

  //   useEffect - 1
  useEffect(() => {
    // update counter
    updateCounter();

    // price prediction
    searchAppartment();

    // update housing information
    updateHousingInformation();

    // close modal
    setModalIsOpen(false);
  }, [searchRequest]);

  // useEffect - 2
  useEffect(() => {
    if (counter > -1) setModalIsOpen(true);
  }, [searchLocation]);

  return (
    <AppContext.Provider
      value={{
        modalIsOpen,
        housingInformation,
        numberOfRooms,
        counter,
        searchLocation,
        searchRequest,
        setSearchRequest,
        setModalIsOpen,
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

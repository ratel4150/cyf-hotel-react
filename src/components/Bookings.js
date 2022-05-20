import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
/* import FakeBookings from "../data/fakeBookings.json"; */
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  const [fakeBookings, setFakeBookings] = useState(null);
  useEffect(() => {
    console.log("Fetching data from glitch");

    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setFakeBookings(data);
      });
  }, []);

  if (fakeBookings) {
    return (
      <div className="App-content">
        <div className="container">
          {/* <p>{marsPhotoData}</p> */}
          <Search search={search} />

          {/* <SearchResults results={FakeBookings} /> */}
          <SearchResults results={fakeBookings} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Bookings;

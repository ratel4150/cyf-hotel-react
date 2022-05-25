import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
/* import CustomerProfile from "./CustomerProfile"; */

/* import FakeBookings from "../data/fakeBookings.json"; */
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    if (searchVal.length > 0) {
      setFakeBookings(
        fakeBookings
          .filter(result => {
            console.log(result.firstName);
            return (
              result.firstName.toLowerCase() === searchVal.toLowerCase() ||
              result.surname.toLowerCase() === searchVal.toLowerCase()
            );
          })
          .map(result => {
            return result;
          })
      );
    } else if (searchVal.length === 0) {
      console.log(setInitialBookings(initialBookings));
      setInitialBookings(initialBookings);
    }
  };
  const [fakeBookings, setFakeBookings] = useState(null);
  const [initialBookings, setInitialBookings] = useState([]);
  const [loading, setloading] = useState(false);
  cosnt[(error, setError)] = useState("");
  /* const[selectedId,setSelectedId]=useState() */
  useEffect(() => {
    console.log("Fetching data from glitch");
    setloading(true);
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => res.json())
      .then(data => {
        setFakeBookings(data);
      })
      .then(data1 => {
        setInitialBookings(data1);
        setloading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.error);
      });
  }, []);

  if (fakeBookings) {
    return loading ? (
      <h1>Cargando....</h1>
    ) : (
      <div className="App-content">
        <div className="container">
          {/* <p>{marsPhotoData}</p> */}
          <Search search={search} />

          {/* <SearchResults results={FakeBookings} /> */}
          <SearchResults
            results={fakeBookings} /* setSelectedId={setSelectedId} */
          />
          {/*    <CustomerProfile id={selectedId}/> */}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Bookings;

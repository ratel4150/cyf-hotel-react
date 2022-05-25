import React, { useState } from "react";

import moment from "moment";
import CustomerProfile from "./CustomerProfile";

moment().format();

const SearchResults = props => {
  console.log(props);
  const [selectedId, setSelectedId] = useState(false);
  let estates = [
    useState(false),
    useState(false),
    useState(false),
    useState(false),
    useState(false)
  ];

  const [encendido, setEncendido] = estates[0];
  const [encendido1, setEncendido1] = estates[1];
  const [encendido2, setEncendido2] = estates[2];
  const [encendido3, setEncendido3] = estates[3];
  const [encendido4, setEncendido4] = estates[4];

  let fondo;
  let fondo1;
  let fondo2;
  let fondo3;
  let fondo4;
  encendido ? (fondo = "encender-fondo") : (fondo = "apagar-fondo");
  encendido1 ? (fondo1 = "encender-fondo") : (fondo1 = "apagar-fondo");
  encendido2 ? (fondo2 = "encender-fondo") : (fondo2 = "apagar-fondo");
  encendido3 ? (fondo3 = "encender-fondo") : (fondo3 = "apagar-fondo");
  encendido4 ? (fondo4 = "encender-fondo") : (fondo4 = "apagar-fondo");

  return (
    <div>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Number Of Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result, index) => {
            var b = moment(result.checkInDate);
            var a = moment(result.checkOutDate);

            switch (index) {
              case 0:
                return (
                  <tr
                    key={index}
                    className={fondo}
                    onClick={() => setEncendido(!encendido)}
                  >
                    <th scope="row">{result.id} </th>
                    <td>{result.title}</td>
                    <td>{result.firstName}</td>
                    <td>{result.surname}</td>
                    <td>{result.email}</td>
                    <td>{result.roomId}</td>
                    <td>{result.checkInDate}</td>
                    <td>{result.checkOutDate}</td>
                    <td>{a.diff(b, "days")}</td>
                    <td>
                      <button onClick={() => setSelectedId(result.id)}>
                        Show Profile
                      </button>
                    </td>
                  </tr>
                );

                break;
              case 1:
                return (
                  <tr
                    key={index}
                    className={fondo1}
                    onClick={() => setEncendido1(!encendido1)}
                  >
                    <td scope="row">{result.id} </td>
                    <td>{result.title}</td>
                    <td>{result.firstName}</td>
                    <td>{result.surname}</td>
                    <td>{result.email}</td>
                    <td>{result.roomId}</td>
                    <td>{result.checkInDate}</td>
                    <td>{result.checkOutDate}</td>
                    <td>{a.diff(b, "days")}</td>
                    <td>
                      <button onClick={() => setSelectedId(result.id)}>
                        Show Profile
                      </button>
                    </td>
                  </tr>
                );
                break;

              case 2:
                return (
                  <tr
                    key={index}
                    className={fondo2}
                    onClick={() => setEncendido2(!encendido2)}
                  >
                    <td scope="row">{result.id} </td>
                    <td>{result.title}</td>
                    <td>{result.firstName}</td>
                    <td>{result.surname}</td>
                    <td>{result.email}</td>
                    <td>{result.roomId}</td>
                    <td>{result.checkInDate}</td>
                    <td>{result.checkOutDate}</td>
                    <td>{a.diff(b, "days")}</td>
                    <td>
                      <button onClick={() => setSelectedId(result.id)}>
                        Show Profile
                      </button>
                    </td>
                  </tr>
                );

              case 3:
                return (
                  <tr
                    key={index}
                    className={fondo3}
                    onClick={() => setEncendido3(!encendido3)}
                  >
                    <td scope="row">{result.id} </td>
                    <td>{result.title}</td>
                    <td>{result.firstName}</td>
                    <td>{result.surname}</td>
                    <td>{result.email}</td>
                    <td>{result.roomId}</td>
                    <td>{result.checkInDate}</td>
                    <td>{result.checkOutDate}</td>
                    <td>{a.diff(b, "days")}</td>
                    <td>
                      <button onClick={() => setSelectedId(result.id)}>
                        Show Profile
                      </button>
                    </td>
                  </tr>
                );
                break;
              case 4:
                return (
                  <tr
                    key={index}
                    className={fondo4}
                    onClick={() => setEncendido4(!encendido4)}
                  >
                    <td scope="row">{result.id} </td>
                    <td>{result.title}</td>
                    <td>{result.firstName}</td>
                    <td>{result.surname}</td>
                    <td>{result.email}</td>
                    <td>{result.roomId}</td>
                    <td>{result.checkInDate}</td>
                    <td>{result.checkOutDate}</td>
                    <td>{a.diff(b, "days")}</td>
                    <td>
                      <button onClick={() => setSelectedId(result.id)}>
                        Show Profile
                      </button>
                    </td>
                  </tr>
                );
                break;
            }
          })}
        </tbody>
      </table>
      <CustomerProfile id={selectedId} />
    </div>
  );
};

export default SearchResults;

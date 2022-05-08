import React from "react";

const TouristInfoCards = () => {
  let cities = [
    {
      imageUrl:
        "https://media.istockphoto.com/photos/glasgow-scotland-picture-id830486350",
      nameCity: "Glasgow",
      description:
        "Glasgow is a port city on the River Clyde in the western Lowlands of Scotland. It is famous for its modernist and Victorian architecture, a rich legacy of the city's prosperity in the 18th and 20th centuries due to trade and shipbuilding. Today it is a national cultural centre, home to institutions such as the Scottish Opera, Scottish Ballet and the Scottish National Theatre, as well as acclaimed museums and a thriving music scene.",
      link: "peoplemakeglasgow.com"
    },
    {
      imageUrl:
        "https://cdn2.hometogo.net/assets/media/pics/1200_628/6119f8d4209dd.jpg",
      nameCity: "Manchester",
      description:
        "Manchester is a major city in the North West of England with a rich industrial heritage. Castlefield Conservation Area's 18th-century canal system evokes the days when the city was a textile powerhouse, and visitors can trace its history at the interactive Museum of Science and Industry. The revitalized quays of Salford Quays are now home to the Imperial War Museum, North Headquarters, designed by Daniel Libeskind, and The Lowry cultural center",
      link: "visitmanchester.com"
    },
    {
      imageUrl:
        "https://www.londonbackpackers.com/wp-content/uploads/2019/09/transport-london.jpg",
      nameCity: "London",
      description:
        "London, the capital of England and the United Kingdom, is a 21st century city with a history dating back to Roman times. In its center stand the imposing Palace of Parliament, the tower of the iconic Bin Ben clock and Westminster Abbey, the site of British royal coronations. Across the River Thames, the London Eye observation wheel offers panoramic views of the South Bank cultural complex and the entire city.",
      link: "visitlondon.com"
    }
  ];

  return (
    <div className="App-Container-Card">
      {cities.map((city, index) => {
        return (
          <div key={index} className="card shadow-lg">
            <img src={city.imageUrl} alt="imagen" className="App-Card-Image" />
            <h3 className="App-Card-Title">{city.nameCity}</h3>
            <p className="App-Card-Information">{city.description}</p>

            <button>
              <a href={"https://www." + city.link}>More information</a>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;

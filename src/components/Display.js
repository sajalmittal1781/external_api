import React, { useState, useEffect } from "react";
import Country from "./Country";
const Display = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        
        "https://restcountries.com/v2/all"
      );

      const responseData = await response.json();

      const loadedCountries = [];
      for (const key in responseData) {
        loadedCountries.push({
          id: key,
          link: responseData[key].flag,
          phone: responseData[key].callingCodes,
          name: responseData[key].name,
        });
      }
      setData(loadedCountries);
      setIsLoading(false);
    };

    fetchdata();
  }, [data]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  const countryList = data.map((data) => (
    <Country
      id={data.id}
      name={data.name}
      phone={data.phone}
      link={data.link}
    />
  ));

  return (
    <>
      <ul>{countryList}</ul>
    </>
  );
};

export default Display;

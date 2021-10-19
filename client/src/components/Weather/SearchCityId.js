const SearchCityId = (city) => {
  const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("x-rapidapi-host", "airvisual1.p.rapidapi.com");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const result = await fetch(
      `https://airvisual1.p.rapidapi.com/auto-complete?query=${city}`,
      requestOptions
    );
    const body = await result.json();
    return body.data.stations[0].id;
  };
  fetchData();
};

export default SearchCityId;
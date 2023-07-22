import React, { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import data from "./data.json";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountries(data);
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const deleteCountry = (e) => {
    const isDelete = window.confirm("Are you sure?");
    if(isDelete){
      setCountries(countries.filter((country) => country.name.common !== e));
    }
  };
  return (
    <Container>
      <Table striped>
        <thead>
          <tr>
            <th>No</th>
            <th>Bayrak</th>
            <th>Ulke</th>
            <th>Nufus</th>
            <th>Baskent</th>
            <th>Islem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={loading ? "d-block" : "d-none"}>
              <Spinner animation="grow" variant="info" />
            </td>
          </tr>
          {countries.map((country, index) => (
            <Country
              key={index}
              no={index}
              country={country}
              deleteCountry={deleteCountry}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Countries;

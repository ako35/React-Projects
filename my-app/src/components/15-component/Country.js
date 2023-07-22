import React from "react";
import { Button } from "react-bootstrap";

const Country = (props) => {
  
  return (
    <tr>
      <td>{props.no + 1}</td>
      <td><img src={props.country.flags.png} width="90px" alt="" /></td>
      <td>{props.country.name.common}</td>
      <td>{props.country.population}</td>
      <td>{props.country.capital}</td>
      <td>
        <Button onClick={() => props.deleteCountry(props.country.name.common)} variant="primary">Delete</Button>
      </td>
    </tr>
  );
};

export default Country;

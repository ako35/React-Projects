import React from 'react'
import data from '../../assets/data/countries.json'

const Ulkeler = () => {
  return (
    <div>
        <select name="" id="">
            <option value="" disabled>Bir Ülke Seç</option>
            {
                data.filter(country => country.name.startsWith('A')).map((country) => (
                    <option key={country.code} value={country.code}>{country.name}</option>
                ))
            }
        </select>
        <table>
            <thead>
                <tr>
                    <th>Sira No</th>
                    <th>Ülke Adi</th>
                    <th>Ulke Kodu</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.filter(country => country.name.startsWith('A')).map((country, index) => (
                        <tr key={index} style={index % 2 === 0 ? {backgroundColor: 'lightgray'} : {backgroundColor: 'white'}}>
                            <td>{index + 1}</td>
                            <td>{country.name}</td>
                            <td>{country.code}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Ulkeler
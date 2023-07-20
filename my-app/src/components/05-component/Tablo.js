import React from 'react'
import students from '../../assets/data/students.json'

const Tablo = () => {
    const style = {
        border: '1px solid black',
        padding: '5px 10px'
    }
  return (
    <div>
      <h1>Tablo</h1>
      <table>
        <thead>
            <tr>
                <th style={{...style, fontSize: '20px'}}>İsim</th>
                <th style={{...style, fontSize: '20px'}}>Yas</th>
                <th style={{...style, fontSize: '20px'}}>Kurs</th>
            </tr>
        </thead>
        <tbody>
            {students.map((student, index) => (
                <tr style={index % 2 === 0 ? {backgroundColor: 'lightgray'} : {backgroundColor: 'white'}} key={index}>
                    <td style={style}>{student.isim}</td>
                    <td style={style}>{student.yas}</td>
                    <td style={style}>{student.kurs}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Tablo
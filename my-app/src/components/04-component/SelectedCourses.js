import React from 'react'
import kurslar from '../../assets/data/students.json'

const SelectedCourses = () => {

    // const uniqueKurslar = [...new Set(kurslar.map(kurs => kurs.kurs))]
    // console.log(uniqueKurslar)
  return (
    <div>
        <select name="" id="">
            {/* {uniqueKurslar.map(kurs => (
                <option key={kurs} value={kurs}>{kurs}</option>
            ))} */}

            {kurslar.reduce((acc, kurs) => {
                if (!acc.includes(kurs.kurs)) {
                    acc.push(kurs.kurs)
                }
                return acc
            }, []).map((kurs) => (
                <option key={kurs} value={kurs}>{kurs}</option>
            ))
            }
        </select>
    </div>
  )
}

export default SelectedCourses
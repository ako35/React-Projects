import React from 'react'
import students from './students.json'

const Filtered = () => {
  return (
    <div>
        <ul>
            {
                students.filter(student => (
                    student.yas < 25
                )).map(student => (
                    <li key={student.isim}>
                        {student.isim}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Filtered
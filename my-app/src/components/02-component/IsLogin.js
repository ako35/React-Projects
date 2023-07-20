import React from 'react'

const IsLogin = () => {
    const isLogin = false;
    const name='Ali';
    const surname='Koç';
  return (
    <div>
        {
            isLogin ? (
                <div>
                    <h1>{name} {surname}</h1>
                </div>
            ) : (
                <div>
                    <h1>Lutfen giris yapınız</h1>
                </div>
            )                
        }
    </div>
  )
}

export default IsLogin
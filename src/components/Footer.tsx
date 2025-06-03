import React from 'react'

const Footer = () => {
  const teamMembers = ["Tomás Llorenç Guarino Sabater", "Marc Rofes Romero", "Aitor Parra Fernández"]
  return (
    <footer className='flex w-full justify-center gap-5'>
      <h2>Miembros del equipo:</h2>
      <ul className='flex gap-2'>
        {teamMembers.map((member, index) =>
          [
            index > 0 && ",",
            <li key={member}>{member}{}</li>
          ]
        )}
      </ul>
    </footer>
  )
}

export default Footer
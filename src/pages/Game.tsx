import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useItemQuery } from '../redux/slices/items-slice'


const Game: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data, isError } = useItemQuery([id])

  if (isError) {
    alert('Error while loading the game page.')
    navigate('/')
  }

  if (!data) {
    return <>Loading...</>
  }

    return (
      <div className="container">
        <h2>{data.title}</h2>
        <strong>{data.price}</strong>

        <img src={data.imageUrl} alt={data.title} />
      </div>
    )
}

export default Game
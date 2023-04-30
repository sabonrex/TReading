import React, { useContext, useEffect } from 'react'
import rigoImage from '../../img/rigo-baby.jpg'
import '../../styles/home.css'
import { Context } from '../store/appContext'
import { Button } from 'react-bootstrap'


export const Home = () => {
  const { store, action } = useContext(Context)

  useEffect(() => {
    action.fetchPeople()
  }, [])

  return (
    <Jumbotron>
      <h1>People</h1>
      <span>{JSON.stringify(store.favorites)}</span>
      <ul>
        {store.people.map((item, index) => {
          return (
            <li key={index}>
              <span>{item.name}</span>
              <Button
                onClick={() => action.setFavourites(item.name)}
                variant='outline-primary'
              >
                Favourite
              </Button>
            </li>
          )
        })}
      </ul>
    </Jumbotron>
  )
}

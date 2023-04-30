const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      people: [],
      planets: [],
      vehicles: []
    },
    actions: {
      fetchPeople: async () => {
        const URL = 'https://www.swapi.tech/api/people/'
        const CONFIG = {
          method: 'GET',
          headers: {
            'Content-type': 'application/json'
          }
        }
        const response = await fetch(URL, CONF)
        const json = await response.json()

        console.log('>>DATA>>', json)
        setStore({ people: json.results })
      },
      setFavourites: name => {
        const store = getStore()
        getStore({ favorites: [...store.favorites, name] })
      }
    }
  }
}

export default getState

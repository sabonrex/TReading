const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planet: [{name: "info"}],
			people: [{name: "info"}],
      		singlefetch: [],
	  		singleview: [],	
			vehicle: [{name: "info"}],
			favorites: []
		},
		actions: {
			fetchPeople: async () => {
				const URL = "https://swapi.dev/api/people/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();
				console.log(">>DATA>>", json);
				setStore({ people: json.results });
			},
			fetchPlanets: async () => {
				const URL = "https://swapi.dev/api/planets/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();
				console.log(">>DATAPlanets>>", json);
				setStore({ planet: json.results });
			},
      		fetchVehicle: async () => {
				const URL = "https://swapi.dev/api/vehicle/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();
				console.log(">>DATA>>", json);
				setStore({ vehicle: json.results });
			},
			loadSomeData: (key, passedData) => {
				setStore({"singleview" : {name : "info"}}),
				setStore({[key] : passedData})
			},

			setFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},
			removePeople: favId => {
				const store = getStore();
				let deletedFavs = [];
				store.favorites.map(function(item, index) {
					if (favId != index) {
						deletedFavs.push(item);
					}
				});
				setStore({ favorites: deletedFavs });
			}
		}
	};
};
export default getState;
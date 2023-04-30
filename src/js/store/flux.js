const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites:[],
			people:[],
			planets:[],
			vehicles:[]
		},
		actions: {
			
			fetchPeople: async () => {
				const URL = "https://www.swapi.tech/api/${type}/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json",
					}
				};
				const response = await fetch (URL, CONF);
				const json = await response.json();

				console.log(">>DATA>>", json);
				setStore({people: json.results })
			}	
		}
	};
};

export default getState;

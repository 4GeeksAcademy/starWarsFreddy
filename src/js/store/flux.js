const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes:[],
			planetas: [],
			personaje: {},
			planeta: {},
			favoritos:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			obtenerPersonajes: async() => {
				try {
					const response = await fetch("https://swapi.dev/api/people")
					const data = await response.json()

					console.log(data)

					setStore({ personajes:data.results})

				} catch (error) {
					console.log(error)
				}
			},

			obtenerPersonajeIndividual: async(id) => {
				try {
					const response = await fetch("https://swapi.dev/api/people/"+id)
					const data = await response.json()

					console.log(data)

					setStore({ personaje:data})

				} catch (error) {
					console.log(error)
				}
			},

			obtenerPlanetas: async() => {
				try {
					const response = await fetch("https://swapi.dev/api/planets")
					const data = await response.json()

					console.log(data)

					setStore({ planetas:data.results})

				} catch (error) {
					console.log(error)
				}
			},

			obtenerPlanetaIndividual: async(id) => {
				try {
					const response = await fetch("https://swapi.dev/api/planets/"+id)
					const data = await response.json()

					console.log(data)

					setStore({ planeta:data})

				} catch (error) {
					console.log(error)
				}
			},

			agregarFavoritos: (item) => {
				const store = getStore ()
				if (store.favoritos.includes(item)){
					//Borrador
					let aux = []
					aux = store.favoritos.filter((elemento) => elemento != item)
					setStore({favoritos: aux})
				}else{
					//agregar
					setStore({favoritos:[...store.favoritos, item]})
				}
			}


		}
	};
};

export default getState;

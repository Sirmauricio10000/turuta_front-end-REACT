const URL = 'http://3.80.68.229';

export async function GetNodes() {
    try {
        const response = await fetch(URL + "/Nodes/nodes");
        const data = response.json();
        return data;

    } catch (error) {
        console.error("Error fetching data from API:", error);
        throw error;
    }
}

export async function getShortestRoute(origin, destination) {
    try {
        const response = await fetch(`${URL}/Routes/rutas/ruta_mas_corta/${origin}/${destination}`);
        const data = response.json();
        return data;

    } catch (error) {
        console.error("Error fetching shortest route from API:", error);
        throw error;
    }
}


export async function getListOfNodes(nodes){
    
    try {
        const response = await fetch(`${URL}/Nodes/nodes/get_lista_coordenadas/${nodes}`);
        const data = response.json();       
        return data;
        
    } catch (error) {
        console.error("Error fetching list of coords from API:", error);
        throw error;
    }
}

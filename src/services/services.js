const URL = 'https://optimal-jigsaw-390200.rj.r.appspot.com';

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

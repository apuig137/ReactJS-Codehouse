const vehiculos = [
    {id: "1", marca: "Volkswagen", nombre: "Nivus", kilometraje: 20000, categoria: "SUV", potencia: "116CV", modelo: 2021, precio: 25500, transmision: "automatica", combustible: "nafta", img: "https://http2.mlstatic.com/D_NQ_NP_664525-MLA54100066728_032023-O.webp", stock: "20"},
    {id: "2", marca: "Volkswagen", nombre: "Bora", kilometraje: 210000, categoria: "Sedan", potencia: "180CV", modelo: 2011, precio: 18000, transmision: "manual", combustible: "nafta", img: "https://http2.mlstatic.com/D_NQ_NP_794854-MLA54173830866_032023-O.webp", stock: "20"},
    {id: "3", marca: "Volkswagen", nombre: "Amarok", kilometraje: 135000, categoria: "Camioneta", potencia: "180CV", modelo: 2018, precio: 28900, transmision: "automatica", combustible: "diesel", img: "https://http2.mlstatic.com/D_NQ_NP_762481-MLA54225565385_032023-O.webp", stock: "20"},
    {id: "4", marca: "Toyota", nombre: "Corolla", kilometraje: 120000, categoria: "Sedan", potencia: "136CV", modelo: 2012, precio: 10900, transmision: "automatica", combustible: "nafta", img: "https://http2.mlstatic.com/D_NQ_NP_641933-MLA53948515093_022023-O.webp", stock: "20"},
    {id: "5", marca: "Toyota", nombre: "Hilux", kilometraje: 140000, categoria: "Camioneta", potencia: "125CV", modelo: 2007, precio: 17500, transmision: "manual", combustible: "diesel", img: "https://http2.mlstatic.com/D_NQ_NP_881797-MLA53054068577_122022-O.webp", stock: "20"},
    {id: "6", marca: "Toyota", nombre: "Etios", kilometraje: 89000, categoria: "5 puertas", potencia: "90CV", modelo: 2015, precio: 9000, transmision: "manual", combustible: "nafta", img: "https://http2.mlstatic.com/D_NQ_NP_744655-MLA54251562716_032023-O.webp", stock: "20"},
    {id: "7", marca: "Ford", nombre: "Ranger", kilometraje: 148000, categoria: "Camioneta", potencia: "200CV", modelo: 2020, precio: 34500, transmision: "automatica", combustible: "diesel", img: "https://http2.mlstatic.com/D_NQ_NP_750154-MLA52858093929_122022-O.webp", stock: "20"},
    {id: "8", marca: "Ford", nombre: "Focus", kilometraje: 97000, categoria: "Sedan", potencia: "145CV", modelo: 2009, precio: 7200, transmision: "manual", combustible: "nafta", img: "https://http2.mlstatic.com/D_NQ_NP_683277-MLA53829178334_022023-O.webp", stock: "20"},
    {id: "9", marca: "Ford", nombre: "Ka", kilometraje: 32000, categoria: "5 puertas", potencia: "123CV", modelo: 2020, precio: 14000, transmision: "automatica", combustible: "nafta", img: "https://http2.mlstatic.com/D_NQ_NP_761255-MLA53854677875_022023-O.webp", stock: "20"},
    {id: "10", marca: "Chevrolet", nombre: "S10", kilometraje: 46000, categoria: "Camioneta", potencia: "200CV", modelo: 2020, precio: 29900, transmision: "manual", combustible: "diesel", img: "https://http2.mlstatic.com/D_NQ_NP_2X_866658-MLA53387584990_012023-F.webp", stock: "20"},
    {id: "11", marca: "Chevrolet", nombre: "Cruze", kilometraje: 175000, categoria: "5 puertas", potencia: "141CV", modelo: 2014, precio: 9900, transmision: "automatica", combustible: "nafta", img: "https://http2.mlstatic.com/D_NQ_NP_997646-MLA53323378156_012023-O.webp", stock: "20"},
    {id: "12", marca: "Chevrolet", nombre: "Corsa", kilometraje: 94000, categoria: "3 puertas", potencia: "102CV", modelo: 2007, precio: 5500, transmision: "manual", combustible: "nafta", img: "https://http2.mlstatic.com/D_NQ_NP_652666-MLA51786640743_102022-O.webp", stock: "20"},
]

export let getVehiculos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vehiculos)
        }, 1000)
    })
}

export const getVehiculoById = (vehiculoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vehiculos.find(vehiculo => vehiculo.id === vehiculoId))
        }, 1000)
    })
}

export const getVehiculoByCategory = (vehiculoCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vehiculos.filter(vehiculo => vehiculo.categoria === vehiculoCategory))
        }, 1000)
    })
}
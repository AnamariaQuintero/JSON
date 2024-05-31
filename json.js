const storage = "128GB"
const ram = "16GB"

const mobile = {
    storage, /*Se coloca asi para no colocar la variable igual a la propiedad*/
    memory: ram,
    brand: "Nokia",
    screenSize: 6,
    dualSim: true,
    battery: "5000mah",
    phoneOperator: [
        "Movistar",
        "Tigo",
        "Claro",
        "Wom"
    ],
    camera:{
        principal: "40mpx",
        selfie: "16mpx",
        macro: "2mpx"
    },
    ringtone: function(){
        console.log("Hello Moto")
    } 
}

/*Para sobre escribir*/
mobile.asd = "Creado en tiempo de ejecución"

/*Para eliminar un objeto del JSON*/
delete mobile.asd

/*Para acceder a la propiedad del objeto JSON */
mobile.ringtone()
console.log (mobile.phoneOperator[1])
console.log(mobile.asd)
console.log(mobile.camera.principal)

/*Objeto global que se llama json y tiene varias funciones1*/
console.log(JSON.stringify(mobile)) /*Resive como parametro un objeto de js  y lo convierte en un cadena de caracteres*/

const data = '{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"}'

const dataObj = JSON.parse(data) /*Se hace un parceo*/

console.log(dataObj.title)

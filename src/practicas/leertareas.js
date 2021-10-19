const fs =require("fs");
let obtenertareas = fs.readFileSync("./tareas.json","utf-8")

let tareas = JSON.parse(obtenertareas)
for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].estado != "terminado" ) {
        console.log(tareas[i].tarea);
    }
    
}


const tareas = [
{
    tarea: "cocinar",
    descripcion: "preparar la carne y prender el horno",
    estado: "en progrso"
},
{
    tarea: "mesa",
    descripcion: "preparar la mesa",
    estado: "pendiente"
},
{
    tarea: "estudiar",
    descripcion: "hacer los ej de playground",
    estado: "terminado"
}
];

    
function listarTodas(h) {
    

for (let i = 0; i < tareas.length; i++) {

    console.log(tareas[i].tarea);
    
}
}
function listarNoTerminadas(x) {
    

for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].estado != "terminado" ) {
        console.log(tareas[i].tarea);
    }
    
}
}
listarTodas()
console.log("-----------------------------------------------------------");
listarNoTerminadas()

let h = JSON.stringify(tareas)
console.log(h);
function reporteDePasajeros(estacion){
    let pasa =200
    let array = []

    
    for(let i= 0; i<=estacion;i++){
      if (i === 5){
      pasa = pasa +40
    }
    
else if ( i !== 0){
    pasa = pasa +20

   
}

   
    array.push("En la estación" + " " + i + " " +  "hay" + " "+  pasa + " "+  "pasajeros arriba del tren") 
}
return array
}
console.log(reporteDePasajeros(5));
function divi(num1,num2){
   if(num2 === 0){
       return "No se puede dividir por cero"
   }else{
    const resultado= num1/num2
    return resultado
   }
}
module.exports= divi
function sumarObjeto( numInicial,numFinal) {
  var objeto = { prop1:numInicial, prop2:numFinal};
var resultado=0;
for ( var i=objeto.prop1;i<=objeto.prop2; i++)
{
  var resultado= resultado+i;
}
  return (resultado);
}
console.log(sumarObjeto(1,10));

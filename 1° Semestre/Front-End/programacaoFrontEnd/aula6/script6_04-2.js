var meses,i;
meses= ["Jan","Fev","Mar","Abr","Mai"];
i=0
for(i=2;i<=4;i++){
    document.querySelector("#dv1").innerHTML+=meses[i] +"<br>"
}

/*
Criar um looping para mostrar os valores:
2, 3 e 4
E direcionar a saida para a <div id="dv1">
*/
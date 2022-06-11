
var uf,i;
msg="";
uf=["SP","RJ","SC","MG"];
i=3;
for(i=0;i<4;i++){
    msg+=uf[i]+" ";
}
document.querySelector("#dv1").innerHTML+=msg;

// +""uf[i]+"<br/>";
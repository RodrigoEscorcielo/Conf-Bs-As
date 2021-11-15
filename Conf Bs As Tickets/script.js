function calculatePrice()
{
    var quantity=document.getElementById("Cantidad").value;
    if(quantity>0){    
    var totalValue=0;
    var basedValue=200;
    totalValue=(basedValue*quantity);
    var discount=0;
    var condition=document.getElementById("celdas").value;
    if(condition=="Estudiante") {
        discount=80;
    }
    else if(condition=="Trainee") {
        discount=50;
    }
    else {
        discount=15;
    }
    
    var result=(totalValue-((discount*totalValue)/100));
    
   document.getElementById("Pagar").value = "Total a Pagar: $ "+result; 
    
   console.log (result)
    } else { 
        document.getElementById("Cantidad").value="";
        alert("La cantidad a ingresar debe ser mayor a 0");
    }
}

function cleanFields()
{
    document.getElementById("Cantidad").value="";
    document.getElementById("Pagar").value = "Total a Pagar: $ "; 
    document.getElementById("Nombre").value="";
    document.getElementById("Apellido").value="";
    document.getElementById("Correo").value="";
}

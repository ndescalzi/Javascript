var fecha = new Date();
var dia =  fecha.getDay();
var mensaje;
switch (dia) {
    case 0:
        mensaje = "Domingo";
        break;
    case 1:
        mensaje = "Lunes";
        break;
    case 2:
        mensaje = "Martes";
        break;
    case 3:
        mensaje = "Miercoles";
        break;
    case 4:
        mensaje = "Jueves";
        break;
    case 5:
        mensaje = "Viernes";
        break;
    case 6:
        mensaje = "Sabado";
        break;
}
alert(mensaje);
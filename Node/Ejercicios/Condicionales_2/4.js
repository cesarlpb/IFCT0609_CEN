let eleccion = ""
const opcionesMenu = [carne, pescado, verdura ]
menu = prompt("Tipo de menu: carne, pescado, verdura")
switch (menu){
    case 'carne':
        bebida = "¿Desea beber vino tinto?";
        break;
    case 'pescado':
        bebida = "¿Desea beber vino blanco?";
        break;
    case 'verdura':
        bebida = "¿Desea agua?";
        break;
    default:
        bebida = "Elija carne pescado o verdura";
    }
alert(bebida);
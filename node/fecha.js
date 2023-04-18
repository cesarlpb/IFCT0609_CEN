exports.miFuncion = function () {
    let date = new Date()
    dia = ""
    switch(date.getDay()){
        case 0:
            dia = "domingo"
            break;
        case 1:
            dia = "lunes"
            break;
        case 2: 
            dia = "martes"
            break;
        case 3:
            dia = "miércoles"
            break;
        case 4:
            dia = "jueves"
            break;
        case 5:
            dia = "viernes"
            break;
        case 6:
            dia = "sábado"
    }
    return 'Hoy es ' + dia + " " + date.toLocaleDateString();
  };
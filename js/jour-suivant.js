var jour=prompt("Entrez le jour: ");

switch(jour){
        
    case "Lundi":
        console.log("Demain, nous serons Mardi");
        break;
    case "Mardi":
        console.log("Demain, nous serons Mercredi");
        break;
    case "Mercredi":
        console.log("Demain, nous serons Jeudi");
        break;
        
    case "Jeudi":
        console.log("Demain, nous serons Vendredi");
        break;
        
    case "Vendredi":
        console.log("Demain, nous serons Samedi");
        break;
    
    case "Samedi":
        console.log("Demain, nous serons Dimanche");
        break;
        
    case "Dimanche":
        console.log("Demain, nous serons Lundi");
        break;
        
    default:
         console.log("Entrez un jour qui existe");
        
        
                
}
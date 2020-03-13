function suivant(){
	if(etat==0){
		alert("Le village s'endort")
		etat = 1;
		suivant();
	}
	if(etat==1){
		console.log("Robin le gros chien")
		etat = 1;
		suivant();
	}
}

var etat = 0 ;

suivant();

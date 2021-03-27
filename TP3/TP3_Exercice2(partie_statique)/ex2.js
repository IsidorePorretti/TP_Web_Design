
	function LignePanier (code, qte, prix){
    this.codeArticle = code;
    this.qteArticle = qte;
    this.prixArticle = prix;
    this.ajouterQte = function(qte)
    {
        this.qteArticle += qte;
    }
    this.getPrixLigne = function()
    {
        var resultat = this.prixArticle * this.qteArticle;
        return resultat;
    }
    this.getCode = function() 
    {
		return this.codeArticle;
    }
	this.getImage= function()
	{
		
		if(this.codeArticle==1){return "<img src=\"images/nounours2.jpg\" alt=\"Nounours blanc\" width = \"32\">";}
		else if(this.codeArticle==2){return "<img src=\"images/ane.jpg\" alt=\"Peluche Ane gris\" width = \"32\">";}
		else if(this.codeArticle==3){return "<img src=\"images/bulbizarre.jpg\" alt=\"Pokemon Bulbizarre\" width = \"32\">";}
		else if(this.codeArticle==4){return "<img src=\"images/cochon.jpg\" alt=\"Cochon rose\" width = \"32\">";}
		else if(this.codeArticle==5){return "<img src=\"images/donkekong.jpg\" alt=\"Donkey Kong\" width = \"32\">";}
		else if(this.codeArticle==6){return "<img src=\"images/girafe.jpg\" alt=\"Girafe\" width = \"32\">";}
		else if(this.codeArticle==7){return "<img src=\"images/hibou.jpg\" alt=\"Peluche Hibou\" width = \"32\">";}
		else if(this.codeArticle==8){return "<img src=\"images/link.jpg\" alt=\"Link\" width = \"32\">";}
		else if(this.codeArticle==9){return "<img src=\"images/nounours3.jpg\" alt=\"Nounours crème\" width = \"32\">";}
		else if(this.codeArticle==10){return "<img src=\"images/panda.jpg\" alt=\"Panda\" width = \"32\">";}
		else if(this.codeArticle==11){return "<img src=\"images/pikachu.jpg\" alt=\"Pokemon Pikachu\"width = \"32\">";}
		else if(this.codeArticle==12){return "<img src=\"images/poule.jpg\" alt=\"Peluche Poule\" width = \"32\">";}
		else if(this.codeArticle==13){return "<img src=\"images/renard.jpg\" alt=\"Renard\" width = \"32\">";}
		else if(this.codeArticle==14){return "<img src=\"images/riolu.jpg\" alt=\"Pokemon Riolu\" width = \"32\">";}
        else if(this.codeArticle==15){return "<img src=\"images/salameche.jpg\" alt=\"Pokemon Salameche\" width = \"32\">";}
		else if(this.codeArticle==0){return "<img src=\"images/nounours1.jpg\" alt=\"Nounours marron\" width = \"32\">";} 
	}
	this.getDescription= function()
	{
		if(this.codeArticle==1){return "Un ours blanc tout doux";}
		else if(this.codeArticle==2){return "Joli petit ane gris";}
		else if(this.codeArticle==3){return "Pokemon Bulbizarre";}
		else if(this.codeArticle==4){return "Un petit cochon rose tout frippé";}
		else if(this.codeArticle==5){return "Le célèbre Donkey Kong";}
		else if(this.codeArticle==6){return "Petite girafe assise";}
		else if(this.codeArticle==7){return "Un hibou tout en plume";}
		else if(this.codeArticle==8){return "Link le héros de la série Zelda";}
		else if(this.codeArticle==9){return "Il est pas mignon avec ses grosses papattes ?";}
		else if(this.codeArticle==10){return "Un bon gros panda joufflu";}
		else if(this.codeArticle==11){return "Le plus célèbre des pokemons";}
		else if(this.codeArticle==12){return "Une idée originale de peluche";}
		else if(this.codeArticle==13){return "Un renard très sympathique";}
		else if(this.codeArticle==14){return "Pokemon Riolu";}
        else if(this.codeArticle==15){return "Pokemon Salameche";}
		else if(this.codeArticle==16){return "Un joli nounours marron avec un foulard";} 
	}
}

function Panier()
{
    this.liste = [];
    this.ajouterArticle = function(code, qte, prix)
    { 
        var index = this.getArticle(code);
        if (index == -1) this.liste.push(new LignePanier(code, qte, prix));
        else this.liste[index].ajouterQte(qte);
    }
    this.getPrixPanier = function()
    {
        var total = 0;
        for(var i = 0 ; i < this.liste.length ; i++)
            total += this.liste[i].getPrixLigne();
        return total;
    }
    this.getArticle = function(code)
    {
        for(var i = 0 ; i <this.liste.length ; i++)
            if (code == this.liste[i].getCode()) return i;
        return -1;
    }
    this.supprimerArticle = function(code)
    {
        var index = this.getArticle(code);
        if (index > -1) this.liste.splice(index, 1);
    }
}
		function ajouter(c, q, p)
		{			
			var code = parseInt(c.value);
			var qte = parseInt(q.value);
			var prix = parseInt(p.value);
			
			var monPanier = new Panier();
			monPanier.ajouterArticle(code, qte, prix);
			var tableau = document.getElementById("tableau");
			var longueurTab = parseInt(document.getElementById("nbreLignes").innerHTML);
			if (longueurTab > 0)
			{
				for(var i = longueurTab ; i > 0  ; i--)
				{
					monPanier.ajouterArticle(parseInt(tableau.rows[i].cells[0].innerHTML), parseInt(tableau.rows[i].cells[3].innerHTML), parseInt(tableau.rows[i].cells[4].innerHTML));
					tableau.deleteRow(i);
				}
			}
			var longueur = monPanier.liste.length;
			for(var i = 0 ; i < longueur ; i++)
			{
				var ligne = monPanier.liste[i];
				var ligneTableau = tableau.insertRow(-1);
				var colonne1 = ligneTableau.insertCell(0);
				colonne1.innerHTML += ligne.getCode();
				var colonne2 = ligneTableau.insertCell(1);
				colonne2.innerHTML += ligne.getImage();
				var colonne3 = ligneTableau.insertCell(2);
				colonne3.innerHTML += ligne.getDescription();
				var colonne4 = ligneTableau.insertCell(3);
				colonne4.innerHTML += ligne.qteArticle;
				var colonne5 = ligneTableau.insertCell(4);
				colonne5.innerHTML += ligne.prixArticle;
				var colonne6 = ligneTableau.insertCell(5);
				colonne6.innerHTML += ligne.getPrixLigne();
				var colonne7 = ligneTableau.insertCell(6);
				colonne7.innerHTML += "<button class=\"btn btn-primary\" type=\"submit\" onclick=\"supprimer(this.parentNode.parentNode.cells[0].innerHTML)\"><span class=\"glyphicon glyphicon-trash\"></span></button>";
			}
			document.getElementById("prixTotal").innerHTML = monPanier.getPrixPanier();
			document.getElementById("nbreLignes").innerHTML = longueur;
		}
		
		function supprimer(code)
		{
			var monPanier = new Panier();
			var tableau = document.getElementById("tableau");
			var longueurTab = parseInt(document.getElementById("nbreLignes").innerHTML);
			if (longueurTab > 0)
			{
				for(var i = longueurTab ; i > 0  ; i--)
				{
					monPanier.ajouterArticle(parseInt(tableau.rows[i].cells[0].innerHTML), parseInt(tableau.rows[i].cells[3].innerHTML), parseInt(tableau.rows[i].cells[4].innerHTML));
					tableau.deleteRow(i);
				}
			}
			monPanier.supprimerArticle(code);
			var longueur = monPanier.liste.length;
			for(var i = 0 ; i < longueur ; i++)
			{
				var ligne = monPanier.liste[i];
				var ligneTableau = tableau.insertRow(-1);
				var colonne1 = ligneTableau.insertCell(0);
				colonne1.innerHTML += ligne.getCode();
				var colonne2 = ligneTableau.insertCell(1);
				colonne2.innerHTML += ligne.getImage();
				var colonne3 = ligneTableau.insertCell(2);
				colonne3.innerHTML += ligne.getDescription();
				var colonne4 = ligneTableau.insertCell(3);
				colonne4.innerHTML += ligne.qteArticle;
				var colonne5 = ligneTableau.insertCell(4);
				colonne5.innerHTML += ligne.prixArticle;
				var colonne6 = ligneTableau.insertCell(5);
				colonne6.innerHTML += ligne.getPrixLigne();
				var colonne7 = ligneTableau.insertCell(6);
				colonne7.innerHTML += "<button class=\"btn btn-primary\" type=\"submit\" onclick=\"supprimer(this.parentNode.parentNode.cells[0].innerHTML)\"><span class=\"glyphicon glyphicon-trash\"></span></button>";
			}
			document.getElementById("prixTotal").innerHTML = monPanier.getPrixPanier();
			document.getElementById("nbreLignes").innerHTML = longueur;
		}
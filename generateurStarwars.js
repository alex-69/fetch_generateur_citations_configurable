
function generateurStarwars() {
  
//appel des citations Star wars
  fetch('citationStarwars.json')
  .then(function(response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
      return response.json();
  })
  .then(function(json) {

    class citationGenereeStarwars {
      constructor (insertX, insertY, insertZ){
        this.insertX = Math.floor(Math.random()*json.citations.length);
        this.insertY = Math.floor(Math.random()*json.citations1.length);
        this.insertZ = Math.floor(Math.random()*json.citations2.length);
        };
    
    //création des 5 citations
    citationGenereeStarwars1(){
        para1.innerHTML = json.citations[this.insertX]
        .phrase + " - " + json.citations1[this.insertY].phrase + " - " + json.citations2[this.insertZ].phrase;
     };
     citationGenereeStarwars2(){
        para2.innerHTML = json.citations[this.insertX]
        .phrase + " - " + json.citations1[this.insertY].phrase + " - " + json.citations2[this.insertZ].phrase;
     };
     citationGenereeStarwars3(){
        para3.innerHTML = json.citations[this.insertX]
        .phrase + " - " + json.citations1[this.insertY].phrase + " - " + json.citations2[this.insertZ].phrase;
     };
     citationGenereeStarwars4(){
        para4.innerHTML = json.citations[this.insertX]
        .phrase + " - " + json.citations1[this.insertY].phrase + " - " + json.citations2[this.insertZ].phrase;
     };
     citationGenereeStarwars5(){
        para5.innerHTML = json.citations[this.insertX]
        .phrase + " - " + json.citations1[this.insertY].phrase + " - " + json.citations2[this.insertZ].phrase;
     };
    };

    //création des 5 objets citations
    function citationAfficheeStarwars1() {
      let citationStarWars1 = new citationGenereeStarwars;
      citationStarWars1.citationGenereeStarwars1();
    };

    function citationAfficheeStarwars2() {
      let citationStarWars2 = new citationGenereeStarwars;
      citationStarWars2.citationGenereeStarwars2();
    };

    function citationAfficheeStarwars3() {
      let citationStarWars3 = new citationGenereeStarwars;
      citationStarWars3.citationGenereeStarwars3();
    };

    function citationAfficheeStarwars4() {
     let citationStarWars4 = new citationGenereeStarwars;
      citationStarWars4.citationGenereeStarwars4();
    };

    function citationAfficheeStarwars5() {
      let citationStarWars5 = new citationGenereeStarwars;
      citationStarWars5.citationGenereeStarwars5();
    };

  
    //citaions générées en fonction de la valeur choisie
    switch (nbCitationChoisie.value) {
      
      case "une":
        citationAfficheeStarwars1();
        para1.style.display = "block";
        para2.style.display = "none";
        para3.style.display = "none";
        para4.style.display = "none";
        para5.style.display = "none";
        break;
    
      case "deux":
        citationAfficheeStarwars1();
        citationAfficheeStarwars2();
        para1.style.display = "block";
        para2.style.display = "block";
        para3.style.display = "none";
        para4.style.display = "none";
        para5.style.display = "none";
        break;
      
      case "trois":
        citationAfficheeStarwars1();
        citationAfficheeStarwars2();
        citationAfficheeStarwars3();
        para1.style.display = "block";
        para2.style.display = "block";
        para3.style.display = "block";
        para4.style.display = "none";
        para5.style.display = "none";
        break;
      
      case "quatre":
        citationAfficheeStarwars1();
        citationAfficheeStarwars2();
        citationAfficheeStarwars3();
        citationAfficheeStarwars4();
        para1.style.display = "block";
        para2.style.display = "block";
        para3.style.display = "block";
        para4.style.display = "block";
        para5.style.display = "none";
        break;
      
      case "cinq":
        citationAfficheeStarwars1();
        citationAfficheeStarwars2();
        citationAfficheeStarwars3();
        citationAfficheeStarwars4();
        citationAfficheeStarwars5();
        para1.style.display = "block";
        para2.style.display = "block";
        para3.style.display = "block";
        para4.style.display = "block";
        para5.style.display = "block";
        break;
    };
  })  
};
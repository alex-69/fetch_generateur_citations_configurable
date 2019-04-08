function generateurOss117() {
  
    fetch('citationOss117.json')
    .then(function(response) {
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      return response.json();
    })
    .then(function(json) {
  
      class citationGenereeOss117 {
        constructor (insertX, insertY, insertZ){
       this.insertX = Math.floor(Math.random()*json.citations.length);
       this.insertY = Math.floor(Math.random()*json.citations1.length);
      this.insertZ = Math.floor(Math.random()*json.citations2.length);
        };
     citationGenereeOss1171(){
      para1.innerHTML = json.citations[this.insertX]
        .phrase + " - " + json.citations1[this.insertY].phrase + " - " + json.citations2[this.insertZ].phrase;
     };
     citationGenereeOss1172(){
      para2.innerHTML = json.citations[this.insertX]
        .phrase + " - " + json.citations1[this.insertY].phrase + " - " + json.citations2[this.insertZ].phrase;
     };
     citationGenereeOss1173(){
      para3.innerHTML = json.citations[this.insertX]
        .phrase + " - " + json.citations1[this.insertY].phrase + " - " + json.citations2[this.insertZ].phrase;
     };
     citationGenereeOss1174(){
      para4.innerHTML = json.citations[this.insertX]
        .phrase + " - " + json.citations1[this.insertY].phrase + " - " + json.citations2[this.insertZ].phrase;
     };
     citationGenereeOss1175(){
      para5.innerHTML = json.citations[this.insertX]
        .phrase + " - " + json.citations1[this.insertY].phrase + " - " + json.citations2[this.insertZ].phrase;
     };
    };

  function citationAfficheeOss1171() {
    let citationOss1171 = new citationGenereeOss117;
    citationOss1171.citationGenereeOss1171();
  };

  function citationAfficheeOss1172() {
    let citationOss1172 = new citationGenereeOss117;
    citationOss1172.citationGenereeOss1172();
  };

  function citationAfficheeOss1173() {
    let citationOss1173 = new citationGenereeOss117;
    citationOss1173.citationGenereeOss1173();
  };

  function citationAfficheeOss1174() {
    let citationOss1174 = new citationGenereeOss117;
    citationOss1174.citationGenereeOss1174();
  };

  function citationAfficheeOss1175() {
    let citationOss1175 = new citationGenereeOss117;
    citationOss1175.citationGenereeOss1175();
  };

  /*const texte = document.createTextNode('Citations Star Wars!')*/

    switch (nbCitationChoisie.value) {
    case "une":
    citationAfficheeOss1171();
      para1.style.display = "block";
      para2.style.display = "none";
      para3.style.display = "none";
      para4.style.display = "none";
      para5.style.display = "none";
      /*para6.appendChild(texte);
      break;*/
    case "deux":
    citationAfficheeOss1171();
    citationAfficheeOss1172();
      para1.style.display = "block";
      para2.style.display = "block";
      para3.style.display = "none";
      para4.style.display = "none";
      para5.style.display = "none";
      break;
    case "trois":
    citationAfficheeOss1171();
    citationAfficheeOss1172();
    citationAfficheeOss1173();
      para1.style.display = "block";
      para2.style.display = "block";
      para3.style.display = "block";
      para4.style.display = "none";
      para5.style.display = "none";
      break;
    case "quatre":
    citationAfficheeOss1171();
    citationAfficheeOss1172();
    citationAfficheeOss1173();
    citationAfficheeOss1174();
      para1.style.display = "block";
      para2.style.display = "block";
      para3.style.display = "block";
      para4.style.display = "block";
      para5.style.display = "none";
      break;
    case "cinq":
    citationAfficheeOss1171();
    citationAfficheeOss1172();
    citationAfficheeOss1173();
    citationAfficheeOss1174();
    citationAfficheeOss1175();
      para1.style.display = "block";
      para2.style.display = "block";
      para3.style.display = "block";
      para4.style.display = "block";
      para5.style.display = "block";
      break;
    };
  })  
  
};
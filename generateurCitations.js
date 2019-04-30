const nbCitationChoisie = document.getElementById('nb_citations');

const CitationChoisie = document.getElementById('generateur_citations');
    
const citationAffichee  = document.querySelector('.citation');

const para1 = document.createElement('p');
citationAffichee.appendChild(para1);

const para2 = document.createElement('p');
citationAffichee.appendChild(para2);

const para3 = document.createElement('p');
citationAffichee.appendChild(para3);

const para4 = document.createElement('p');
citationAffichee.appendChild(para4);

const para5 = document.createElement('p');
citationAffichee.appendChild(para5);

const para6 = document.createElement('p');
citationAffichee.appendChild(para6);

const BoutonGenerer  = document.querySelector('button');

BoutonGenerer.addEventListener('click', result);

//génerer citaitons star wars ou Oss117
function result(){
  switch(CitationChoisie.value){
    case "generateur_starwars":
    generateurStarwars();
    break;
    case "generateur_Oss117":
    generateurOss117();
    break;
  };
};

// choix du générateur
$('#generateur_citations').change(function(){
  switch($('#generateur_citations option:selected').val()){
    
    case "generateur_starwars":
    location.reload();
    
    // si choix du générateur Oss117, charger l'image et la vidéo
    case "generateur_Oss117":  
    $('body').css('background-image','url("../fetch_generateur_citations_configurable/images/oss117.jpg")')
    var p =  $('button').css('background-color','darkslateblue')
    $('iframe').attr('src','https://www.youtube.com/embed/59WbseO9AxM?autoplay=1')
  }
    
})

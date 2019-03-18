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



    const BoutonGenerer  = document.querySelector('button');

    BoutonGenerer.addEventListener('click', result);


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
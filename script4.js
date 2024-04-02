
$(document).ready(() => {

    //definitions de la base de calculs

    let additionsNiv1Init = ['2 + 3','2 + 5','2 + 4','2 + 8','2 + 7','12 + 3','2 + 13','15 + 3','2 + 2','7 + 3']
    let additionsNiv2Init = ['17 + 4','18 + 5','16 + 7','15 + 7','18 + 3','27 + 5','26 + 7','28 + 3','35 + 7','38 + 4','39 + 3']
    let additionsNiv3Init = ['22 + 35','27 + 15','28 + 13','24 + 18','42 + 13','18 + 12','24 + 14','15 + 13','12 + 13','17 + 13']
    let soustractionsNiv1Init =  ['3 - 2','5 - 2','8 - 3','8 - 2','12 - 2','14 - 2','18 - 3','9 - 3','7 - 3','6 - 3']
    let soustractionsNiv2Init = ['17 -4', '18 - 6', '16 - 7', '19 - 8', '18 - 7', '27 - 6', '34 - 5', '23 - 4', '35 - 7', '38 - 8']
    let soustractionsNiv3Init =  ['22 - 8','24 - 5','32 - 3','24 - 8','42 - 4','22 - 8','52 - 8','15 - 8','33 - 6','27 - 11']
    let mixNiv1Init = ['5 + 3','8 - 5','2 + 3','7 - 3','12 + 3','17 + 3','14 - 3','15 + 3','18 - 5','27 - 3']
    let mixNiv2Init = ['15 + 6', '18 - 5', '16 + 7', '25 - 7', '19 + 3', '27 - 6', '36 + 7', '28 - 10', '45 + 7', '38 - 6']
    let mixNiv3Init =  ['25 - 9','21 +13','12 - 3','42 - 8','32 + 11','28 - 9','42 - 13','15 + 23','52 - 3','17 + 17']

    let additionsNiv1RepInit = [5,7,6,10,9,15,15,18,4,10]
    let additionsNiv2RepInit = [21,23,23,22,21,32,33,31,42,42,42]
    let additionsNiv3RepInit = [57,42,41,42,55,30,38,28,25,30]
    let soustractionsNiv1RepInit = [1,3,5,6,10,12,15,6,4,3]
    let soustractionsNiv2RepInit = [13,12,9,11,11,21,29,19,28,30]
    let soustractionsNiv3RepInit = [14,19,29,16,38,14,44,7,27,16]
    let mixNiv1RepInit = [8,3,5,4,15,20,11,18,13,24]
    let mixNiv2RepInit = [21,13,23,18,22,21,43,18,52,32]
    let mixNiv3RepInit = [16,34,9,34,43,19,29,38,49,34]


    let codeCalcul = 'D4';


//Selection du niveau et affichage des calculs

$('#btn-soustraction').click((e) => {
    e.stopPropagation ();
    $('#btn-addition').removeClass("selectionne");
    $('#btn-soustraction').addClass("selectionne");
    $('#btn-mix').removeClass("selectionne");
    codeCalcul=codeCalcul.replace(codeCalcul[0],'B');

    let soustractionsNiv1 = [];
    let soustractionsNiv1Rep = [];
    soustractionsNiv1 = soustractionsNiv1.concat(soustractionsNiv1Init);
    soustractionsNiv1Rep = soustractionsNiv1Rep.concat(soustractionsNiv1RepInit);

    let soustractionsNiv2 = [];
    let soustractionsNiv2Rep = [];
    soustractionsNiv2 = soustractionsNiv2.concat(soustractionsNiv2Init);
    soustractionsNiv2Rep = soustractionsNiv2Rep.concat(soustractionsNiv2RepInit);

    let soustractionsNiv3 = [];
    let soustractionsNiv3Rep = [];
    soustractionsNiv3 = soustractionsNiv3.concat(soustractionsNiv3Init);
    soustractionsNiv3Rep = soustractionsNiv3Rep.concat(soustractionsNiv3RepInit);

    switch (codeCalcul) {
        case  'B1' :
            calcul(soustractionsNiv1,soustractionsNiv1Rep);
            
            break;
        case  'B2' :
            calcul(soustractionsNiv2,soustractionsNiv2Rep);
            break;
        case  'B3' :
            calcul(soustractionsNiv3,soustractionsNiv3Rep);
            break;
    }
})

$('#btn-addition').click((e) => {
    e.stopPropagation ();
    $('#btn-addition').addClass("selectionne");
    $('#btn-soustraction').removeClass("selectionne");
    $('#btn-mix').removeClass("selectionne");
    codeCalcul=codeCalcul.replace(codeCalcul[0],'A');

    let additionsNiv1 = [];
    let additionsNiv1Rep = [];
    additionsNiv1 = additionsNiv1.concat(additionsNiv1Init);
    additionsNiv1Rep = additionsNiv1Rep.concat(additionsNiv1RepInit);

    let additionsNiv2 = [];
    let additionsNiv2Rep = [];
    additionsNiv2 = additionsNiv2.concat(additionsNiv2Init);
    additionsNiv2Rep = additionsNiv2Rep.concat(additionsNiv2RepInit);

    let additionsNiv3 = [];
    let additionsNiv3Rep = [];
    additionsNiv3 = additionsNiv3.concat(additionsNiv3Init);
    additionsNiv3Rep = additionsNiv3Rep.concat(additionsNiv3RepInit);

    switch (codeCalcul) {
        case 'A1' :  
        calcul(additionsNiv1,additionsNiv1Rep);
            break;
        case  'A2' :
        calcul(additionsNiv2,additionsNiv2Rep);
            break;
        case  'A3' :
            calcul(additionsNiv3,additionsNiv3Rep);
            break;
    } 
})

 $('#btn-mix').click((e) => {
    e.stopPropagation ();
    $('#btn-addition').removeClass("selectionne");
    $('#btn-soustraction').removeClass("selectionne");
    $('#btn-mix').addClass("selectionne");
    codeCalcul=codeCalcul.replace(codeCalcul[0],'C');

    let mixNiv1 = [];
    let mixNiv1Rep = [];
    mixNiv1 = mixNiv1.concat(mixNiv1Init);
    mixNiv1Rep = mixNiv1Rep.concat(mixNiv1RepInit);

    let mixNiv2 = [];
    let mixNiv2Rep = [];
    mixNiv2 = mixNiv2.concat(mixNiv2Init);
    mixNiv2Rep = mixNiv2Rep.concat(mixNiv2RepInit);

    let mixNiv3 = [];
    let mixNiv3Rep = [];
    mixNiv3 = mixNiv3.concat(mixNiv3Init);
    mixNiv3Rep = mixNiv3Rep.concat(mixNiv3RepInit);

    switch (codeCalcul) {
        case 'C1' :   
        calcul(mixNiv1,mixNiv1Rep);
            break;
        case  'C2' :
           calcul(mixNiv2,mixNiv2Rep);
            break;
       case  'C3' :
            calcul(mixNiv3,mixNiv3Rep);
            break;
    } 
})

 $('#btn-niv1').click((e) => {
    e.stopPropagation ();
    $('#btn-niv1').addClass("niv-select");
    $('#btn-niv2').removeClass("niv-select");
    $('#btn-niv3').removeClass("niv-select");
    codeCalcul=codeCalcul.replace(codeCalcul[1],'1');

    let additionsNiv1 = [];
    let additionsNiv1Rep = [];
    additionsNiv1 = additionsNiv1.concat(additionsNiv1Init);
    additionsNiv1Rep = additionsNiv1Rep.concat(additionsNiv1RepInit);

    let soustractionsNiv1 = [];
    let soustractionsNiv1Rep = [];
    soustractionsNiv1 = soustractionsNiv1.concat(soustractionsNiv1Init);
    soustractionsNiv1Rep = soustractionsNiv1Rep.concat(soustractionsNiv1RepInit);

    let mixNiv1 = [];
    let mixNiv1Rep = [];
    mixNiv1 = mixNiv1.concat(mixNiv1Init);
    mixNiv1Rep = mixNiv1Rep.concat(mixNiv1RepInit);

    switch (codeCalcul) {
        case 'A1' :
            calcul(additionsNiv1,additionsNiv1Rep);
            break;
        case  'B1' :
            calcul(soustractionsNiv1,soustractionsNiv1Rep);
            break;
        case  'C1' :
           calcul(mixNiv1,mixNiv1Rep);
            break;
    } 
})

 $('#btn-niv2').click((e) => {
    e.stopPropagation ();
    $('#btn-niv1').removeClass("niv-select");
    $('#btn-niv2').addClass("niv-select");
    $('#btn-niv3').removeClass("niv-select");
    codeCalcul=codeCalcul.replace(codeCalcul[1],'2');

    let additionsNiv2 = [];
    let additionsNiv2Rep = [];
    additionsNiv2 = additionsNiv2.concat(additionsNiv2Init);
    additionsNiv2Rep = additionsNiv2Rep.concat(additionsNiv2RepInit);

    let soustractionsNiv2 = [];
    let soustractionsNiv2Rep = [];
    soustractionsNiv2 = soustractionsNiv2.concat(soustractionsNiv2Init);
    soustractionsNiv2Rep = soustractionsNiv2Rep.concat(soustractionsNiv2RepInit);

    let mixNiv2 = [];
    let mixNiv2Rep = [];
    mixNiv2 = mixNiv2.concat(mixNiv2Init);
    mixNiv2Rep = mixNiv2Rep.concat(mixNiv2RepInit);

    switch (codeCalcul) {
        case 'A2' :
            calcul(additionsNiv2,additionsNiv2Rep);
            break;
        case  'B2' :
            calcul(soustractionsNiv2,soustractionsNiv2Rep);
            break;
        case  'C2' :
            calcul(mixNiv2,mixNiv2Rep);
            break;
    }
 })

 $('#btn-niv3').click((e) => {
    e.stopPropagation ();
    $('#btn-niv1').removeClass("niv-select");
    $('#btn-niv2').removeClass("niv-select");
    $('#btn-niv3').addClass("niv-select");
    codeCalcul=codeCalcul.replace(codeCalcul[1],'3');

    let additionsNiv3 = [];
    let additionsNiv3Rep = [];
    additionsNiv3 = additionsNiv3.concat(additionsNiv3Init);
    additionsNiv3Rep = additionsNiv3Rep.concat(additionsNiv3RepInit);

    let soustractionsNiv3 = [];
    let soustractionsNiv3Rep = [];
    soustractionsNiv3 = soustractionsNiv3.concat(soustractionsNiv3Init);
    soustractionsNiv3Rep = soustractionsNiv3Rep.concat(soustractionsNiv3RepInit);

    let mixNiv3 = [];
    let mixNiv3Rep = [];
    mixNiv3 = mixNiv3.concat(mixNiv3Init);
    mixNiv3Rep = mixNiv3Rep.concat(mixNiv3RepInit);

    switch (codeCalcul) {
        case 'A3' :
            calcul(additionsNiv3,additionsNiv3Rep);
            break;
        case  'B3' :
            calcul(soustractionsNiv3,soustractionsNiv3Rep);
            break;
        case  'C3' :
            calcul(mixNiv3,mixNiv3Rep);
            break;
    }
 })

//assignation des calculs et des réponses
function calcul (additions, additionsRep) {

let rand1 = Math.floor(Math.random()*additions.length);
let rValue1 = additions[rand1];
let rAnswer1 = additionsRep[rand1];
    $('#calc1').text(rValue1);
    $('#rep1').text(rAnswer1);
    additions.splice(rand1,1)
    additionsRep.splice(rand1,1);

let rand2 = Math.floor(Math.random()*additions.length);
let rValue2 = additions[rand2];
let rAnswer2 = additionsRep[rand2];
    $('#calc2').text(rValue2);
    $('#rep2').text(rAnswer2);
    additions.splice(rand2,1)
    additionsRep.splice(rand2,1);

    
let rand3 = Math.floor(Math.random()*additions.length);
let rValue3 = additions[rand3];
let rAnswer3 = additionsRep[rand3];

    $('#calc3').text(rValue3);
    $('#rep3').text(rAnswer3);
    additions.splice(rand3,1)
    additionsRep.splice(rand3,1);

let rand4 = Math.floor(Math.random()*additions.length);
let rValue4 = additions[rand4];
let rAnswer4 = additionsRep[rand4];
    
    $('#calc4').text(rValue4);
    $('#rep4').text(rAnswer4);
    additions.splice(rand4,1)
    additionsRep.splice(rand4,1);

let rand5 = Math.floor(Math.random()*additions.length);
let rValue5 = additions[rand5];
let rAnswer5 = additionsRep[rand5];
        
    $('#calc5').text(rValue5);
    $('#rep5').text(rAnswer5);
    additions.splice(rand5,1)
    additionsRep.splice(rand5,1); 
    
let rand6 = Math.floor(Math.random()*additions.length);
let rValue6 = additions[rand6];
let rAnswer6 = additionsRep[rand6];
            
    $('#calc6').text(rValue6);
    $('#rep6').text(rAnswer6);
    additions.splice(rand6,1)
    additionsRep.splice(rand6,1);
    
let rand7 = Math.floor(Math.random()*additions.length);
let rValue7 = additions[rand7];
let rAnswer7 = additionsRep[rand7];
    
    $('#calc7').text(rValue7);
    $('#rep7').text(rAnswer7);
    additions.splice(rand7,1)
    additionsRep.splice(rand7,1);
    
let rand8 = Math.floor(Math.random()*additions.length);
let rValue8 = additions[rand8];
let rAnswer8 = additionsRep[rand8];
        
    $('#calc8').text(rValue8);
    $('#rep8').text(rAnswer8);
    additions.splice(rand8,1)
    additionsRep.splice(rand8,1);
    
let rand9 = Math.floor(Math.random()*additions.length);
let rValue9 = additions[rand9];
let rAnswer9 = additionsRep[rand9];
            
    $('#calc9').text(rValue9);
    $('#rep9').text(rAnswer9);
    additions.splice(rand9,1)
    additionsRep.splice(rand9,1); 
        
let rand10 = Math.floor(Math.random()*additions.length);
let rValue10 = additions[rand10];
let rAnswer10 = additionsRep[rand10];
                
    $('#calc10').text(rValue10);
    $('#rep10').text(rAnswer10);
    additions.splice(rand10,1)
    additionsRep.splice(rand10,1)


//Lancer le chrono

const timerElement = document.getElementById("timer");
let temps = 120;
let timerOn = true;
let timerInterval;

$('#btn-start').click((e) => {
    $('#btn-start').attr("disabled", "disabled").css('opacity','0.7');
    $('.input-rep').attr('readonly',false);

let timerInterval = setInterval(diminuerTemps, 1000)

    })

//Validation des réponses

let boutonValider = document.getElementById("btn-valider");
boutonValider.addEventListener('click',function () {
    validation ();
    timerOn = false;
}) 



//fonctions

function diminuerTemps() {
if (timerOn) {
    if (temps >=0) {
    timerElement.innerText = temps
    temps--
}
    if (temps === -1) {
    validation();
    clearInterval(timerInterval);
}}
else if (!timerOn) {
    clearInterval(timerInterval);
    }
}

    function validation () {
        
        let points = temps+1
        let reponse1 = $('#input1').val()
        let reponse2 = $('#input2').val()
        let reponse3 = $('#input3').val()
        let reponse4 = $('#input4').val()
        let reponse5 = $('#input5').val()
        let reponse6 = $('#input6').val()
        let reponse7 = $('#input7').val()
        let reponse8 = $('#input8').val()
        let reponse9 = $('#input9').val()
        let reponse10 = $('#input10').val()
    
        if (reponse1 == rAnswer1) {
            points +=10
            $('#input1').css({"border" : 'dotted 6px lime', "color" : "lime"})
            $('#bonneReponse1').text(rAnswer1).css({"color":"red", "opacity" : "0"})
        } else {points -=5
            $('#input1').css({"border" : 'dotted 6px red'})
            $('#bonneReponse1').text(rAnswer1).css({"color":"red"})
        }
        if (reponse2 == rAnswer2) {
            points +=10
            $('#input2').css({"border" : 'dotted 6px lime', "color" : "lime"})
            $('#bonneReponse2').text(rAnswer2).css({"color":"red", "opacity" : "0"})
        } else {points -=5
            $('#input2').css({"border" : 'dotted 6px red'})
            $('#bonneReponse2').text(rAnswer2).css({"color":"red"})
        }
        if (reponse3 == rAnswer3) {
            points +=10
            $('#input3').css({"border" : 'dotted 6px lime', "color" : "lime"})
            $('#bonneReponse3').text(rAnswer3).css({"color":"red", "opacity" : "0"})
        } else {points -=5
            $('#input3').css({"border" : 'dotted 6px red'})
            $('#bonneReponse3').text(rAnswer3).css({"color":"red"})
        }
        if (reponse4 == rAnswer4) {
            points +=10
            $('#input4').css({"border" : 'dotted 6px lime', "color" : "lime"})
            $('#bonneReponse4').text(rAnswer4).css({"color":"red", "opacity" : "0"})
        } else {points -=5
            $('#input4').css({"border" : 'dotted 6px red'})
            $('#bonneReponse4').text(rAnswer4).css({"color":"red"})
        }
        if (reponse5 == rAnswer5) {
            points +=10
            $('#input5').css({"border" : 'dotted 6px lime', "color" : "lime"})
            $('#bonneReponse5').text(rAnswer5).css({"color":"red", "opacity" : "0"})
        } else {points -=5
            $('#input5').css({"border" : 'dotted 6px red'})
            $('#bonneReponse5').text(rAnswer5).css({"color":"red"})
        }
        if (reponse6 == rAnswer6) {
            points +=10
            $('#input6').css({"border" : 'dotted 6px lime', "color" : "lime"})
            $('#bonneReponse6').text(rAnswer6).css({"color":"red", "opacity" : "0"})
        } else {points -=5
            $('#input6').css({"border" : 'dotted 6px red'})
            $('#bonneReponse6').text(rAnswer6).css({"color":"red"})
        }
        if (reponse7 == rAnswer7) {
            points +=10
            $('#input7').css({"border" : 'dotted 6px lime', "color" : "lime"})
            $('#bonneReponse7').text(rAnswer7).css({"color":"red", "opacity" : "0"})
        } else {points -=5
            $('#input7').css({"border" : 'dotted 6px red'})
            $('#bonneReponse7').text(rAnswer7).css({"color":"red"})
        }
        if (reponse8 == rAnswer8) {
            points +=10
            $('#input8').css({"border" : 'dotted 6px lime', "color" : "lime"})
            $('#bonneReponse8').text(rAnswer8).css({"color":"red", "opacity" : "0"})
        } else {points -=5
            $('#input8').css({"border" : 'dotted 6px red'})
            $('#bonneReponse8').text(rAnswer8).css({"color":"red"})
        }
        if (reponse9 == rAnswer9) {
            points +=10
            $('#input9').css({"border" : 'dotted 6px lime', "color" : "lime"})
            $('#bonneReponse9').text(rAnswer9).css({"color":"red", "opacity" : "0"})
        } else {points -=5
            $('#input9').css({"border" : 'dotted 6px red'})
            $('#bonneReponse9').text(rAnswer9).css({"color":"red"})
        }
        if (reponse10 == rAnswer10) {
            points +=10
            $('#input10').css({"border" : 'dotted 6px lime', "color" : "lime"})
            $('#bonneReponse10').text(rAnswer10).css({"color":"red", "opacity" : "0"})
        } else {points -=5
            $('#input10').css({"border" : 'dotted 6px red'})
            $('#bonneReponse10').text(rAnswer10).css({"color":"red"})
        }
        if (points<0) {
            points = 0
        }
    
        $('#div-score').css({"display" : "flex"}).text(`   Tu as marqué   ${points}   points  `);
        $('.game-area__score-star').css({"display" : "flex"});
        
        $('#btn-addition').attr("disabled", "disabled").css('opacity','0.7');
    $('#btn-soustraction').attr("disabled", "disabled").css('opacity','0.7');
    $('#btn-mix').attr("disabled", "disabled").css('opacity','0.7');
    $('#btn-niv1').attr("disabled", "disabled").css('opacity','0.7');
    $('#btn-niv2').attr("disabled", "disabled").css('opacity','0.7');
    $('#btn-niv3').attr("disabled", "disabled").css('opacity','0.7');
    $('#btn-start').attr("disabled", "disabled").css('opacity','0.7');
    $('#btn-valider').attr("disabled", "disabled").css('opacity','0.7');
    $('.input-rep').attr("disabled", "disabled");
    }

}

$('#btn-reload').click(() => {
   window.location.reload();
})


 })




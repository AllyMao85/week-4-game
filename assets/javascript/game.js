
$(document).ready(function(){

function characterobj(name, ap, cap, bap, hp) {
    this.name=name;
    this.ap=ap;           //attack power
    this.cap=cap;         //counter attack power
    this.bap=bap;         //base attack power
    this.hp=hp;           //health points
}

var p1 = new characterobj("Obi-Wan Kenobi", 6, 14, 8, 120);
var p2 = new characterobj("Luke Skywalker", 10, 10, 6, 100);
var p3 = new characterobj("Darth Sidious", 8, 4, 6, 150); //"Darth Sidious"
var p4 = new characterobj("Darth Maul", 8, 6, 2, 180);   //Darth Maul

var characterName='';
var defenderName='';
var count='';
//choose character and move the others to enemiesrow
$('.character').on("click",function(){
    count++;
    if (count===1) {
    characterName=$(this).attr("id");  
    $("#characterrow").children("div").not(document.getElementById(characterName)).appendTo("#enemiesrow");
    //$("#enemiesrow").children("div").not(document.getElementById(divId)).attr("class","enemy");
    }  
})
// choose defender
$('.character').on("click",function(){
    count++;
    if (count>1 && $(this).attr("id")!==characterName) {
    defenderName=$(this).attr("id");
    $(this).appendTo("#defenderrow");
    console.log(defenderName);
    //$("#enemiesrow").children("div").not(document.getElementById(divId)).attr("class","enemy");
    }
})

var i=0;

$("button").on("click",function(){
    i++;
    console.log(defenderName);
    var obj1=retrieveObj(characterName);
    var obj2=retrieveObj(defenderName);
    obj1.hp=obj1.hp-obj2.cap;
    obj2.hp=obj2.hp-obj1.ap-(i-1)*obj1.bap;
    console.log(obj1.hp);
    console.log(obj2.hp);
    var target1 = document.getElementById(characterName);
    $(target1).find(".hp").html(obj1.hp);
    var target2= document.getElementById(defenderName);
    $(target2).find(".hp").html(obj2.hp);
    

    //determine win and lose
    if (obj1.hp<=0 && obj2.hp>0) {
        alert("You lost the game!") 
        i=0;
    }
    

    if (obj1.hp>0 && obj2.hp<=0) {      
        alert("You win the game and please select the next defender!"); 
        $(target2).remove();
        i=0;
        
    }

    



    
})
//choose defender from enemiesrow
// $('#enemiesrow').children("div").on("click",function(){
//     var divId=$(this).attr("id");
//     var divclass=$(this).attr("class");
//     var defendersection=document.getElementsById(divId);
//     console.log(divId);
//     console.log(divclass);
    
//     $("#defenderrow").append(document.getElementsById(divId));
//     $("#defenderrow").children("div").attr("class","defender");
// })
function retrieveObj(name) {
    switch (name) {
        case p1.name:
             return p1;
             break;
        case p2.name:
             return p2; 
             break;
        case p3.name:
             return p3;  
             break;
        case p4.name:
             return p4;
             break;      
    }
}

//obj1 is your character obj2 is defender characterobj(name, ap, cap, bap, hp)

// function attack(obj1,obj2,count) {
//     obj1.hp=obj1.hp-obj2.cap;
//     obj2.hp=obj.hp-obj1.ap-count*bap;
    
// }





})
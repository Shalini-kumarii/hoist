console.log(hello);          // output will be undefined                         
var hello = 'world';        // var declaration and assigned
                            

var needle = 'haystack';    // var assigned on top of the scope
test();                     // function test called
function test(){
    var needle = 'magnet';   // redeclare and assign within function scope
    console.log(needle);    // output magnet
}

var brendan = 'super cool';    // var assign as global 
function print(){              // function not called
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);        // print super cool global var

var food = 'chicken';    // global var declare and assigned
console.log(food);       // print first chicken
eat();                   // then function called
function eat(){
    food = 'half-chicken';  // again reassign the food value within function scope
    console.log(food);      // print half-chicken
    var food = 'gone';      // redeclare and assign food within function scope
}

mean();            //Type error mean is not function
console.log(food);   // rest of the code will not run
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

console.log(genre);     // undefined 
var genre = "disco";  // var declared and assigned on top of the scope
rewind();             // rewind called
function rewind() {
    genre = "rock";    // reassign genre within function scope
    console.log(genre);   // print rock
    var genre = "r&b";   // redeclare and assign genre within function scope
    console.log(genre);  // print r&b
}
console.log(genre);   // print global delcared gnere disco

dojo = "san jose";    // assign dojo value as top of scope
console.log(dojo);   // print first san jose
learn();             // called learn 
function learn() {
    dojo = "seattle";  // reassign dojo within function scope
    console.log(dojo);  // print seattle
    var dojo = "burbank"; // redeclare and assign dojo within function scope
    console.log(dojo);    // print burbank
}
console.log(dojo);       // print sanjose

console.log(makeDojo("Chicago", 65)); // first function called 
console.log(makeDojo("Berkeley", 0));  // when it will call the function gives
function makeDojo(name, students){
    const dojo = {};       //assign dojo as const array within function scope
    dojo.name = name;      // name assigned in an dojo array
    dojo.students = students; // student assigned
    if(dojo.students > 50){   // it will execute for the first function call
        dojo.hiring = true;   // assign hiring = true in dojo array 
    }
    else if(dojo.students <= 0){  //it will execute when second function called
        dojo = "closed for now"; // throw type error because dojo is const it can not reassign 
    }
    return dojo;    
}









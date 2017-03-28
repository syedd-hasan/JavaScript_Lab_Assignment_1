/*First Program */
function first(){
var name = prompt("Enter Your Name");
alert("Hi, "+name);
}

/*Second Program */
function second(){
var multiplier = 1;
var result;
var table = +prompt("Enter a number to print it's Multiplication Table");
if(isNaN(table)){
    document.write("<h2>That Is Not a Number</h2>");
}
else if(table !== 0){
    document.write("<h2>Multiplication Table of "+table+"</h2>");
    result=table*multiplier;
    document.write("<p>"+table+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=table*multiplier;
    document.write("<p>"+table+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=table*multiplier;
    document.write("<p>"+table+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=table*multiplier;
    document.write("<p>"+table+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=table*multiplier;
    document.write("<p>"+table+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=table*multiplier;
    document.write("<p>"+table+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=table*multiplier;
    document.write("<p>"+table+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=table*multiplier;
    document.write("<p>"+table+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=table*multiplier;
    document.write("<p>"+table+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=table*multiplier;
    document.write("<p>"+table+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
}
else{
    document.write("<h2>Multiplication Table of 5</h2>");
    result=5*multiplier;
    document.write("<p>"+5+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=5*multiplier;
    document.write("<p>"+5+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=5*multiplier;
    document.write("<p>"+5+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=5*multiplier;
    document.write("<p>"+5+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=5*multiplier;
    document.write("<p>"+5+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=5*multiplier;
    document.write("<p>"+5+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=5*multiplier;
    document.write("<p>"+5+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=5*multiplier;
    document.write("<p>"+5+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=5*multiplier;
    document.write("<p>"+5+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
    result=5*multiplier;
    document.write("<p>"+5+" x "+multiplier+" = "+result+"</p>");
    multiplier++;
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*Third Program */
function third(){
var city = prompt("Please Enter Your City").toLowerCase();
if(city == "karachi"){
    document.write("<p>Welcome To The City Of Lights</p>");
}
else{
    document.write("<p>Welcome To "+city.charAt(0).toUpperCase() + city.slice(1)+"</p>"); /*Capatilizing First Word of City Name*/
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*Fourth Program */
function fourth(){
var gender = prompt("Enter Your Gender, You Can write 'M' for Male and 'F' for Female").toLowerCase();
if(gender == "male" || gender == "m"){
    document.write("<p>Good Morning Sir</p>");
}
else if(gender == "female" || gender == "f"){
    document.write("<p>Good Morning Ma'am</p>");
}
else{
    document.write("<p>Sorry your Gender is not Specified</p>");
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*Fifth Program */
function fifth(){
var color = prompt("Which Color's Light of Traffic Signal is Illuminating?").toLowerCase();
if(color == "red"){document.write("<p>Vehicles must stop</p>");}
else if(color == "yellow"){document.write("<p>Vehicles should get ready to move</p>");}
else if(color == "green"){document.write("<p>Vehicles can move now</p>");}
else{document.write("<p>Hold On! "+color+" is not a Traffic Signal's color</p>");}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}


/*Sixth Program */
function sixth(){
var max_age = +prompt("Enter Maximum Age");
var current_age = +prompt("Enter Current Age");
console.log(max_age);
console.log(current_age);
if(current_age <= max_age && max_age!=0 && current_age!=0){
    document.write("<p>You Are Welcome</p>");
}
else if(isNaN(max_age)||isNaN(current_age)||max_age==0||current_age==0){
    document.write("<p>Kindly Enter any Valid Number on Both Maximum and Current Age</p>");
}
else{
    document.write("<p>Sorry You Can't Enter</p>");
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*Seventh Program */
function seventh(){
var fuel = +prompt("Enter Amount of Remaining Fuel in Litres");
if(isNaN(fuel)||fuel == 0){
    document.write("<p>Please Enter Valid Number</p>");
}
else if(fuel <= 0.25){
    document.write("<p>Please Refill The Fuel In Your Car</p>");
}
else{
    document.write("<p>Enough Fuel</p>");
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*Eighth Program */
function eight(){
/** a */
var a = 4;
if (++a === 5){
 alert("given condition for variable a is true");
}

/** b */
var b = 82;
if (b++ === 83){
 alert("given condition for variable b is true");
}

/** c */
var c = 12;
if (c++ === 13){
 alert("condition 1 is true");
}
if (c === 13){
 alert("condition 2 is true");
}
if (++c < 14){
 alert("condition 3 is true");
}
if(c === 14){
 alert("condition 4 is true");
}

/** d */
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
 alert("The cost equals");
}

/** e */
if (true){
 alert("True");
}
if (false){
 alert("False");
}

/** f */
if("car" < "cat"){
 alert("car is smaller than cat");
}
}

/*Ninth Program */
function ninth(){
var first_sub = +prompt("Enter Marks of First Subject");
var second_sub = +prompt("Enter Marks of Second Subject");
var third_sub = +prompt("Enter Marks of Third Subject");
var total = +prompt("Enter Total Marks");
var percentage = ((first_sub+second_sub+third_sub)/total)*100;
console.log(percentage);
var grade;
var remarks;
if(percentage == 100){
    var trigger = 1;    /*To call a condition which displays an error */
}
if(percentage >= 80 && percentage < 100 ){
    grade = "A-one";
    remarks = "Excellent";
}
else if(percentage >= 70){
    grade = "A";
    remarks = "Good";
}
else if(percentage >= 60){
    grade = "B";
    remarks = "You need to improve";
}
else if(percentage <= 60 ){
    grade = "Fail";
    remarks = "Sorry";
}

if(total < (first_sub+second_sub+third_sub)){   /*If total marks is less than sum of all three subjects */
    document.write("<p>Total Marks Should Be Greater Than Sum of All Three Marks</p>");
}
else if(isNaN(first_sub) || isNaN(second_sub) || isNaN(third_sub)){ /*If any of three subject's entered marks is not a number (see JS function (isNaN))*/
    document.write("<p>Kindly Enter Valid Numbers on all Three Subjects</p>");
}
else if(total == 0){    /*If total marks Entered is Zero, as it can't be */
        document.write("<p>Kindly Enter Total Marks Greater Than Zero</p>");
}
else if(trigger == 1){  /*Displaying error if percentage is greator than 100 */
    document.write("<p>100% cannot be obtained</p>");
}
else{       /*Printing Marksheet After All conditions are met */
    document.write("<h2>Marksheet</h2>");
    document.write("<p>Total Marks: "+total+"</p>");
    document.write("<p>Marks Obtained: "+(first_sub+second_sub+third_sub)+"</p>");
    document.write("<p>Percentage: "+percentage+"%</p>");
    document.write("<p>Grade: "+grade+"</p>");
    document.write("<p>Remarks: "+remarks+"</p>");
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*Tenth Program */
function tenth(){
var item_1 = prompt("Enter Name Of First Item");
var item_2 = prompt("Enter Name Of Second Item");
var price_1 = +prompt("Enter Price of First Item");
var price_2 = +prompt("Enter Price of Second Item");
var quantity_1 = +prompt("Enter Quantity of First Item");
var quantity_2 = +prompt("Enter Quantity of Second Item");
var shipping = +prompt("Enter Shipping Charges");
var total_cost = (price_1*quantity_1)+(price_2*quantity_2)+shipping;
var discount = 0;
if(total_cost > 2000){
    discount = total_cost*(1-(10/100));
}
document.write("<h2>Shopping Cart</h2>");
document.write("<p>Price of "+item_1+" is "+price_1+"</p>");
document.write("<p>Quantity of "+item_1+" is "+quantity_1+"</p>");
document.write("<p>Price of "+item_2+" is "+price_2+"</p>");
document.write("<p>Quantity of "+item_2+" is "+quantity_2+"</p><br/>");
document.write("<p>Shipping Charges "+shipping+"</p><br/>");
document.write("<p>Total cost of your Order is "+total_cost+" PKR</p>");
document.write("<p>Discounted Price is "+discount+" PKR</p>");
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*Eleventh Program */
function eleventh(){
var s_number = 3;
var guess_number = +prompt("Guess a number from 1 to 10");
if(guess_number === s_number){
     document.write("<p>Bingo! Correct Answer</p>");
}
else if((guess_number+1) == s_number || (guess_number-1) == s_number){
    document.write("<p>You were close Enough!</p>");
}
else{
     document.write("<p>Sorry! Wrong Answer</p>");
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*Twelfth Program */
function twelfth(){
var input_3 = +prompt("Enter a Number");
if(input_3%3 == 0){document.write("<p>Your Number Is Divisible by 3</p>");}
else{document.write("<p>Your Number Is Not Divisible by 3</p>");}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*thirteenth Program */
function thirteenth(){
var team_1 = prompt("Enter Name Of First Team");
var score_1 = +prompt("Enter Score Of First Team");
var team_2 = prompt("Enter Name of Second Team");
var score_2 = +prompt("Enter Score of Second Team");
if(score_1>score_2){
    document.write("<p>"+team_1+" has won the game</p>");
}
else if(score_1 < score_2){
    document.write("<p>"+team_2+" has won the game</p>");
}
else if(score_1===score_2){
    document.write("<p>The Game is a Tie</p>");
}
else{
    document.write("<p>Wrong Input</p>");
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*fourteenth Program */
function fourteenth(){
var word = "Pakistan";
var digit = 63;
var bool = true;
if(isNaN(word)){
    alert(word+" is a String");
}
if(!isNaN(digit)){
    alert(digit+" is a Number");
}
if(bool == true || bool == false){
    alert(bool+" is a Boolean");
}
}

/*fifteenth Program */
function fifteenth(){
var input_4 = +prompt("Enter a Number");
if(input_4%2 == 0){document.write("<p>Your Number is Even Number</p>");}
else if(input_4%3 == 0){document.write("<p>Your Number is Odd Number</p>");}
else{document.write("<p>Wrong Input</p>");}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}
/*sixteenth Program */
function sixteenth(){
var temperature = +prompt("Enter the degree of Atmospheric Temperature");
if(temperature>=40){document.write("<p>It's Too Hot Outside, Better to Stay at Home</p>");}
else if(temperature>=30){document.write("<p>The Weather today is Normal.</p>");}
else if(temperature>=20){document.write("<p>Today’s Weather is cool.</p>");}
else if(temperature>=10){document.write("<p>OMG! Today’s weather is so Cool.</p>");}
else{
    document.write("<p>Wrong Input.</p>");
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*seventeenth Program */
function seventeenth(){
var first_num = +prompt("Enter First Number");
var second_num = +prompt("Enter Second Number");
var operator = prompt("Enter symbol of operation e.g: (+, -, *, /, %)");
if(operator == '+'){document.write("<p>"+first_num+operator+second_num+" is "+(first_num+second_num)+"</p>");}
else if(operator == '-'){document.write("<p>"+first_num+operator+second_num+" is "+(first_num-second_num)+"</p>");}
else if(operator == '*'){document.write("<p>"+first_num+operator+second_num+" is "+(first_num*second_num)+"</p>");}
else if(operator == '/'){document.write("<p>"+first_num+operator+second_num+" is "+(first_num/second_num)+"</p>");}
else if(operator == '%'){document.write("<p>"+first_num+operator+second_num+" is "+(first_num%second_num)+"</p>");}
else{document.write("<p>Wrong Input</p>");}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*eighteenth Program */
function eighteenth(){
var day = prompt("Enter Day Name").toLowerCase();
if(day == "monday" ||day == "tuesday" ||day == "wednesday" ||day == "thursday" ||day == "friday"){
    document.write("<p>It's a Week Day</p>");
}
else if(day == "saturday"){
    document.write("<p>It's Weekend</p>");
}
else if(day == "sunday"){
    document.write("<p>Yay! It's a holiday</p>");
}
else{
    document.write("<p>Wrong Input</p>");
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*nineteenth Program */
function nineteenth(){
var score = +prompt("Enter Your Score");
if(score > 50){document.write("<p>You Are Passed</p>");}
else{document.write("<p>Try Again</p>");}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*twentieth Program */
function twentieth(){
var no_1 = +prompt("Enter First Number");
var no_2 = +prompt("Enter Second Number");
if(no_1>no_2){document.write("<p>The greater Number of "+no_1+" and "+no_2+" is "+no_1+"</p>")}
else if(no_1 < no_2){document.write("<p>The greater Number of "+no_1+" and "+no_2+" is "+no_2+"</p>")}
else if(no_1===no_2){document.write("<p>The Numbers "+no_1+" and "+no_2+" are Equal</p>")}
else{
    document.write("<p>Wrong Input</p>");
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*twenty-first Program */
function twenty_first(){
var language_code = prompt("Enter Language Code (ur for Urdu, en for English, de for German)").toLowerCase();
if(language_code == "ur"){document.write("<p>ہیلو د نیا</p>");}
else if(language_code == "en"){document.write("<p>Hello World!</p>");}
else if(language_code == "de"){document.write("<p>Hallo Welt!</p>");}
else{document.write("<p>Hello World!</p>");}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*twenty-second Program */
function twenty_second(){
var noumber = +prompt("Enter Any Integer");
if(noumber >= 0){document.write("<p>That is a Positive Number</p>");}
else if(noumber < 0){document.write("<p>That is a Negative Number</p>");}
else{
    document.write("<p>Wrong Input</p>");
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*twenty-third Program */
function twenty_third(){
var noun = prompt("Please Enter a Noun");
var n_no = +prompt("Please Enter a Number");
if(n_no > 1){document.write("<p>"+n_no+" "+noun+"s</p>");}
else if(n_no === 1){document.write("<p>"+n_no+" "+noun+"</p>");}
else{document.write("<p>Wrong Input</p>");}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}
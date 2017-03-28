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
    document.write("<h3>Welcome To The City Of Lights</h3>");
}
else{
    document.write("<h3>Welcome To "+city.charAt(0).toUpperCase() + city.slice(1)+"</h3>"); /*Capatilizing First Word of City Name*/
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*Fourth Program */
function fourth(){
var gender = prompt("Enter Your Gender, You Can write 'M' for Male and 'F' for Female").toLowerCase();
if(gender == "male" || gender == "m"){
    document.write("<h3>Good Morning Sir</h3>");
}
else if(gender == "female" || gender == "f"){
    document.write("<h3>Good Morning Ma'am</h3>");
}
else{
    document.write("<h3>Sorry your Gender is not Specified</h3>");
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*Fifth Program */
function fifth(){
var color = prompt("Which Color's Light of Traffic Signal is Illuminating?").toLowerCase();
if(color == "red"){document.write("<h3>Vehicles must stop</h3>");}
else if(color == "yellow"){document.write("<h3>Vehicles should get ready to move</h3>");}
else if(color == "green"){document.write("<h3>Vehicles can move now</h3>");}
else{document.write("<h3>Hold On! "+color+" is not a Traffic Signal's color</h3>");}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}


/*Sixth Program */
function sixth(){
var max_age = +prompt("Enter Maximum Age");
var current_age = +prompt("Enter Current Age");
console.log(max_age);
console.log(current_age);
if(current_age <= max_age && max_age!=0 && current_age!=0){
    document.write("<h3>You Are Welcome</h3>");
}
else if(isNaN(max_age)||isNaN(current_age)||max_age==0||current_age==0){
    document.write("<h3>Kindly Enter any Valid Number on Both Maximum and Current Age</h3>");
}
else{
    document.write("<h3>Sorry You Can't Enter</h3>");
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*Seventh Program */
function seventh(){
var fuel = +prompt("Enter Amount of Remaining Fuel in Litres");
if(isNaN(fuel)||fuel == 0){
    document.write("<h3>Please Enter Valid Number</h3>");
}
else if(fuel <= 0.25){
    document.write("<h3>Please Refill The Fuel In Your Car</h3>");
}
else{
    document.write("<h3>Enough Fuel</h3>");
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
    document.write("<h3>Total Marks Should Be Greater Than Sum of All Three Marks</h3>");
}
else if(isNaN(first_sub) || isNaN(second_sub) || isNaN(third_sub)){ /*If any of three subject's entered marks is not a number (see JS function (isNaN))*/
    document.write("<h3>Kindly Enter Valid Numbers on all Three Subjects</h3>");
}
else if(total == 0){    /*If total marks Entered is Zero, as it can't be */
        document.write("<h3>Kindly Enter Total Marks Greater Than Zero</h3>");
}
else if(trigger == 1){  /*Displaying error if percentage is greator than 100 */
    document.write("<h3>100% cannot be obtained</h3>");
}
else{       /*Printing Marksheet After All conditions are met */
    document.write("<h2>Marksheet</h2>");
    document.write("<h3>Total Marks: "+total+"</h3>");
    document.write("<h3>Marks Obtained: "+(first_sub+second_sub+third_sub)+"</h3>");
    document.write("<h3>Percentage: "+percentage+"%</h3>");
    document.write("<h3>Grade: "+grade+"</h3>");
    document.write("<h3>Remarks: "+remarks+"</h3>");
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
document.write("<h3>Price of "+item_1+" is "+price_1+"</h3>");
document.write("<h3>Quantity of "+item_1+" is "+quantity_1+"</h3>");
document.write("<h3>Price of "+item_2+" is "+price_2+"</h3>");
document.write("<h3>Quantity of "+item_2+" is "+quantity_2+"</h3><br/>");
document.write("<h3>Shipping Charges "+shipping+"</h3><br/>");
document.write("<h3>Total cost of your Order is "+total_cost+" PKR</h3>");
document.write("<h3>Discounted Price is "+discount+" PKR</h3>");
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*Eleventh Program */
function eleventh(){
var s_number = 3;
var guess_number = +prompt("Guess a number from 1 to 10");
if(guess_number === s_number){
     document.write("<h3>Bingo! Correct Answer</h3>");
}
else if((guess_number+1) == s_number || (guess_number-1) == s_number){
    document.write("<h3>You were close Enough!</h3>");
}
else{
     document.write("<h3>Sorry! Wrong Answer</h3>");
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
    document.write("<h3>"+team_1+" has won the game</h3>");
}
else if(score_1 < score_2){
    document.write("<h3>"+team_2+" has won the game</h3>");
}
else if(score_1===score_2){
    document.write("<h3>The Game is a Tie</h3>");
}
else{
    document.write("<h3>Wrong Input</h3>");
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
if(input_4%2 == 0){document.write("<h3>Your Number is Even Number</h3>");}
else if(input_4%3 == 0){document.write("<h3>Your Number is Odd Number</h3>");}
else{document.write("<h3>Wrong Input</h3>");}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}
/*sixteenth Program */
function sixteenth(){
var temperature = +prompt("Enter the degree of Atmospheric Temperature");
if(temperature>=40){document.write("<h3>It's Too Hot Outside, Better to Stay at Home</h3>");}
else if(temperature>=30){document.write("<h3>The Weather today is Normal.</h3>");}
else if(temperature>=20){document.write("<h3>Today’s Weather is cool.</h3>");}
else if(temperature>=10){document.write("<h3>OMG! Today’s weather is so Cool.</h3>");}
else{
    document.write("<h3>Wrong Input.</h3>");
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*seventeenth Program */
function seventeenth(){
var first_num = +prompt("Enter First Number");
var second_num = +prompt("Enter Second Number");
var operator = prompt("Enter symbol of operation e.g: (+, -, *, /, %)");
if(operator == '+'){document.write("<h3>"+first_num+operator+second_num+" is "+(first_num+second_num)+"</h3>");}
else if(operator == '-'){document.write("<h3>"+first_num+operator+second_num+" is "+(first_num-second_num)+"</h3>");}
else if(operator == '*'){document.write("<h3>"+first_num+operator+second_num+" is "+(first_num*second_num)+"</h3>");}
else if(operator == '/'){document.write("<h3>"+first_num+operator+second_num+" is "+(first_num/second_num)+"</h3>");}
else if(operator == '%'){document.write("<h3>"+first_num+operator+second_num+" is "+(first_num%second_num)+"</h3>");}
else{document.write("<h3>Wrong Input</h3>");}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*eighteenth Program */
function eighteenth(){
var day = prompt("Enter Day Name").toLowerCase();
if(day == "monday" ||day == "tuesday" ||day == "wednesday" ||day == "thursday" ||day == "friday"){
    document.write("<h3>It's a Week Day</h3>");
}
else if(day == "saturday"){
    document.write("<h3>It's Weekend</h3>");
}
else if(day == "sunday"){
    document.write("<h3>Yay! It's a holiday</h3>");
}
else{
    document.write("<h3>Wrong Input</h3>");
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*nineteenth Program */
function nineteenth(){
var score = +prompt("Enter Your Score");
if(score > 50){document.write("<h3>You Are Passed</h3>");}
else{document.write("<h3>Try Again</h3>");}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*twentieth Program */
function twentieth(){
var no_1 = +prompt("Enter First Number");
var no_2 = +prompt("Enter Second Number");
if(no_1>no_2){document.write("<h3>The greater Number of "+no_1+" and "+no_2+" is "+no_1+"</h3>")}
else if(no_1 < no_2){document.write("<h3>The greater Number of "+no_1+" and "+no_2+" is "+no_2+"</h3>")}
else if(no_1===no_2){document.write("<h3>The Numbers "+no_1+" and "+no_2+" are Equal</h3>")}
else{
    document.write("<h3>Wrong Input</h3>");
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*twenty-first Program */
function twenty_first(){
var language_code = prompt("Enter Language Code (ur for Urdu, en for English, de for German)").toLowerCase();
if(language_code == "ur"){document.write("<h3>ہیلو د نیا</h3>");}
else if(language_code == "en"){document.write("<h3>Hello World!</h3>");}
else if(language_code == "de"){document.write("<h3>Hallo Welt!</h3>");}
else{document.write("<h3>Hello World!</h3>");}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*twenty-second Program */
function twenty_second(){
var noumber = +prompt("Enter Any Integer");
if(noumber >= 0){document.write("<h3>That is a Positive Number</h3>");}
else if(noumber < 0){document.write("<h3>That is a Negative Number</h3>");}
else{
    document.write("<h3>Wrong Input</h3>");
}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

/*twenty-third Program */
function twenty_third(){
var noun = prompt("Please Enter a Noun");
var n_no = +prompt("Please Enter a Number");
if(n_no > 1){document.write("<h3>"+n_no+" "+noun+"s</h3>");}
else if(n_no === 1){document.write("<h3>"+n_no+" "+noun+"</h3>");}
else{document.write("<h3>Wrong Input</h3>");}
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}
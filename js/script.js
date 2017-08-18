
//Get letter from repeat function
var letter;

//Get button element
var sendButton = document.getElementById("send-button");
/*Add table elements - first check for the non repeating letter, if all repeat alert the user.. otherwise check if the sentence is already in the table, if not then add sentence and letter otherwise alert user */
sendButton.addEventListener("click", function(){
    if(document.getElementById("text-area").value === ""){
        alert("You didn't write anything!");
    }else {
        checkForRepeat();
        goForward();
    }
});


//Function for adding new table elements
function addTableElements() {
    //Get table from HTML
    var table = document.getElementById("table-body");
    //Get content from textarea
    var textAreaContent = document.getElementById("text-area").value;
    //Insert new row into table, starting at first position
    var row = table.insertRow(0);
    //Insert new cells on first and second position
    var firstCell = row.insertCell(0);
    var secondCell = row.insertCell(1);
    //add content to cells
    firstCell.innerHTML =  textAreaContent;
    secondCell.innerHTML = letter;
}

// Function that finds the first non-repeating character in a string
function checkForRepeat(string) {
    //Get text from textarea
    string = document.getElementById("text-area").value;
    //remove white spaces
    var parsed_string = string.replace(/\s/g, "");
    // all lowercase and split into array
    var string_characters = parsed_string.toLowerCase().split("");
    // variable for storing counting value
    var count;
    for(var i = 0; i < string_characters.length; i++){
        //for every character the count is 0
        count = 0;
        for(var j = 0; j < string_characters.length; j++){
            //if the character matches add one to count
            if(string_characters[i] === string_characters[j]){
                count += 1;
            }  
        }
        //if count is 1 stop iterating
        if(count === 1) {
            letter = string_characters[i];
            break;
        }
    }
    if(count > 1) {
        letter = false;
    }
}

//Check if all characters repeat, if not continue with comparing table elements
function goForward(){
    if(letter === false){
        alert("All characters repeat..please try again!");
    }else{
        compareElements();
    }
}

//get value of td's and compare with textarea value
function compareElements() {
    //get length of table rows
    var rows = document.getElementById("table-body").rows.length;
    //get value of text area
    var textAreaContent = document.getElementById("text-area").value.toLowerCase();
    var parsed_textAreaContent = textAreaContent.replace(/[^\wÀ-ž]/gi, "");
    
    //variable for storing cell content
    var tableElements = [];
    //loop through first cells of rows and store table cell content into array
    for(var i = 0; i < rows; i++){
        tableElements.push(document.getElementById("table-body").rows[i].cells[0].innerHTML.replace(/[^\wÀ-ž]/gi, "").toLowerCase());
    }
    //if there are no elements in table add element
    if( tableElements.length === 0){
        addTableElements();
    }else{
        //loop through tableElements compare value in textarea to elements in array
        var matchFound = false;
        for(var i = 0; i < tableElements.length; i++){
            if(parsed_textAreaContent == tableElements[i]){
                alert("Somebody has already written the same sentence, come up with something better!");
                matchFound = true;
            }
        }
        if(!matchFound){
            addTableElements();
        }
    }
}








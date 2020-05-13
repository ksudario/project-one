/*----- constants -----*/

/*----- app's state (variables) -----*/

let recipeData, userInput;

/*----- cached element references -----*/

const $food = $('#food');
const $input = $('input[type="text"]') 

/*----- event listeners -----*/

$('form').on('submit', handleGetData) 

/*----- functions -----*/

function handleGetData(event) {
    event.preventDefault(); 
    if($input.val()=== "") return; 
   userInput = ($input.val())
   $input.val(""); //clear input
    $.ajax({
        url: 'https://api.spoonacular.com/recipes/search?query=' + userInput '&apiKey=f95e57ef771341bda59fb9162db6da94'
    }).then(function(data){
       recipeData = data;
        render();
    }, function(error) {
        console.log(error)
        
    });
}
function render() {
    $food.html(recipeData.results[0].title);
    
}




/*

$.ajax({
    url: 'https://api.spoonacular.com/recipes/search?query=cheese&number=2&apiKey=f95e57ef771341bda59fb9162db6da94'

}).then(function(data){
    $food.html(data.results[0].title)

}, function(error) {
    console.log(error)
})
*/

function addListItem() {
    $('form').submit(function(event) {
     
    };
}


function checkListItem() {
    $('.shopping-item-toggle').on('click', function(event) {
        
    });
} 


function removeListItem(){
    $('.shopping-item-delete').on('click', function(event) {
        this.remove();
    });
}

function initializeFunctions() {
    addListItem();
    checkListItem();
    removeListItem();
}
    
initializeFunctions();
//Register for text field action if someone clicks return.
//Have everything set up before page is completely displayed.
//Need to create initialize function to register all events.

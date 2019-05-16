function addListItem() {
   $('.js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        let listAddedItem1 = $('li');
        let listShoppingItem = $('#shopping-list-entry').val();
        let listButtons = $('div.shopping-item-controls');
        $('.shopping-list').append('li', listShoppingItem, listButtons);
   });
}


function checkListItem() {
    $('.shopping-item-toggle').on('click', function(event) {
        let checkedItem = $(this).closest('span');
        checkedItem.toggleClass("shopping-item__checked");
    });
} 


function removeListItem(){
    $('.shopping-item-delete').click(function(event) {
        $(this).closest('li').remove();
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

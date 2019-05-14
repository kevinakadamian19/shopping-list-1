function addListItem() {
    $('form').submit(function(event) {
        $(ul).append("<li>" + $(event.currentTarget()) + "</li>");
        
        );
        event.preventDefault();
    };
}


function checkListItem() {

} 

function removeListItem(){
    $(li).on('click','.button-label', function(event) {
        this.remove();
    });
}

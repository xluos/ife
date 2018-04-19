var btn = document.getElementById('showModel');
var cancel = document.getElementById('cancel');
var modal = document.getElementById('modal');
var sure = document.getElementById('sure');
var modal_content = document.getElementById('modal-content');
btn.addEventListener('click', function(){
    modal.style.display = "block";
});
modal.addEventListener('click', function(event){
    if(event.target === this){
        modal.style.display = "none";
    }
});
cancel.addEventListener('click', function(){
    modal.style.display = "none";
});
sure.addEventListener('click', function(){
    modal.style.display = "none";
});

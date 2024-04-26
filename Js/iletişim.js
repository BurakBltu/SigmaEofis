document.querySelector('form').addEventListener('submit', function(event){
event.preventDefault();
var form=event.target;
var data= new FormData(form);
var xhr=new XMLHttpRequest();
xhr.open(form.method, form.action);
xhr.setRequestHeader('Accept' , 'application/json');
xhr.onreadystatechange=function(){
    if(xhr.readyState ===4 ){
        if(xhr.status){

        }
    }
}
});
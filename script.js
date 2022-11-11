$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            fullname:{
                required:true,
                minlength:4
            },
            email:{
                required:true
            },
            subject:{
                required:true
            },
            message:{
                required:true
            }
        },
        
        
    })
})
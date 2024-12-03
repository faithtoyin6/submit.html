function myFunction(){
    return "Hello world";

}
window.alert(myFunction());


function addNumber(a,b){
    return a + b;
}

var x = addNumber (5, 4);
window.alert(x)


var ObjectMethod = {
    FirstName : "Blessing",
    LastName : "Doe" ,
    
    FullName : function () {
        return this. FirstName + " " + this. LastName;

    }

}
window.alert(ObjectMethod.FullName ())


let wx = MultiNumber(4, 3);
function MultiNumber(a, b)
{
    return a * b;
}
window.alert(wx)







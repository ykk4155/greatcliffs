//function
var code ='';
    var getcode ='';
    var btnvalue;
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*()';
function generateCode() {
    for (i = 0; i < 8; i++) { 
        var char = Math.random()*str.length;
        code += str.charAt(char)
    }
    return code;
}
//HTML TO DISPLAY
document.getElementById("codes").innerHTML=generateCode();

//Disable button
function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue;
    if (btnvalue == true) {
        document.getElementById("submit").style.backgroundColor = "rgba(73,119,209,0.3)";
        document.getElementById("submit").style.color = "rgba(255,255,255,0.5)";
    } else {
        document.getElementById("submit").style.backgroundColor = "rgba(73,119,209,1)";
        document.getElementById("submit").style.color = "rgba(255,255,255,1)";
    }
}
//input code
var codebox = document.getElementById("codeentered");
codebox.addEventListener ("input", evaluateCode);
function evaluateCode() {
    getcode = document.getElementById("codeentered").value;
    var charset1= getcode.trim();
    var charset2= code.trim();
    if (charset1.length==charset2.length && charset1==charset2) {
        disableButton (false);
    }
    
}
//activate
disableButton();

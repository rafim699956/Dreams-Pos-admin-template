window.pressed = function(){
    var a = document.getElementById('aa');
    if(a.value == "")
    {
        fileLabel.innerHTML = "jjjj";
    }
    else
    {
        var theSplit = a.value.split('\\');
        fileLabel.innerHTML = theSplit[theSplit.length-1];
    }
};
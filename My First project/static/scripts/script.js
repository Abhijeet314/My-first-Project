function ageInDays(){
var birthyear = prompt('When you were Born..... Good Friend');
var age = (2020 - birthyear) * 365;
var h1 = document.createElement('h1');
var answer = document.createTextNode('You are '  +  age  + ' Days old...');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(answer);
document.getElementById('container-result').appendChild(h1);

}
function reset () {
    document.getElementById('ageInDays').remove()
}


function Generatecat(){
    var iframe = document.createElement('iframe');
    var div = document.getElementById('cat-gen');
    iframe.src ="https://giphy.com/embed/OzrmTK5M9G3XG"
    div.appendChild(iframe);
         
}

function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; } 
function f()
{
$('js1').style.backgroundColor='blue';

}
function g()
{
$('js1').style.backgroundColor='yellow';

}
function f1()
{
$('js2').style.backgroundImage="url('m1.jpg')";

}
function g1()
{
$('js2').style.backgroundImage="url('m2.jpg')";

}
function f2()
{
$('js3').style.borderTopWidth='10px';

}
function g2()
{
$('js3').style.borderTopWidth='20px';
}
function f3()
{
$('js4').style.borderBottomColor='red';
}
function g3()
{
$('js4').style.borderBottomColor='black';

}
function f4()
{
$('js5').style.borderTopColor='red';
}
function g4()
{
$('js5').style.borderTopColor='blue';
}
function f5()
{
$('js6').style.borderLeftColor='pink';
}
function g5()
{
$('js6').style.borderLeftColor='purple';

}
function f6()
{
$('js7').style.borderRightColor='red';
}
function g6()
{
$('js7').style.borderRightColor='orande';

}



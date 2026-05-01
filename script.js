var a=document.getElementById('box1')
var b=document.getElementById('box2')
var c=document.getElementById('box3')
var d=document.getElementById('box4')
var but=document.getElementById('btn1')
var input=document.getElementById('name')
var title=document.getElementById('box')

but.onclick=function()
{
title.innerHTML='Hello,' + input.value;
}

a.onclick=function()
{
a.style.backgroundColor='red';
a.style.color='white';
}
b.onclick=function()
{
b.style.backgroundColor='blue';
b.style.color='white';
}
c.onclick=function()
{
c.style.backgroundColor='green';
c.style.color='white';
}
d.onclick=function()
{
d.style.backgroundColor='yellow';
d.style.color='black';
}
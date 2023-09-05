
var tx = new Array (
"KIVTECHS",
"CLOUD");
var txcount=2;
var i=1;
var wo=0;
var ud=1;
function animatetitle()
{
window.document.title=tx[wo].substr(0, i)+"_";
if (ud==0) i--;
if (ud==1) i++;
if (i==-1) {ud=1;i=0;wo++;wo=wo%txcount;}
if (i==tx[wo].length+10) {ud=0;i=tx[wo].length;}
// if (window.document.title.length < 20 ) window.document.title=window.document.title+"-";
// if (window.document.title.length == 20 ) window.document.title=window.document.title+"]";
// if (window.document.title.length == 21 ) setTimeout("window.document.title='Animierte Seitentitel '; ",1000);
parent.window.document.title=tx[wo].substr(0, i)+"_";
setTimeout("animatetitle()",200);
}
animatetitle();

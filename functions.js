var t = document.getElementById("table");
var trs = t.getElementsByTagName("tr");
vat tds = null;

for (var i=0; i<trs.length; i++)
{
    tds = trs[i].getElementsByTagName("td");
    for (var n=0; n<trs.length;n++)
    {
        tds[n].onclick=function() { alert(this.id); }
    }
}

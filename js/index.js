let a;
let b;
let hypotenuse;

document.getElementById("triangleB").onblur = function()
{
    if(document.getElementById("triangleA").value !== "")
    {
        solve();
    }
}

document.getElementById("triangleA").onblur = function()
{
    if(document.getElementById("triangleB").value !== "")
    {
        solve();
    }
}

function solve()
{
    a = document.getElementById("triangleA").value;
    a = Number(a);

    b = document.getElementById("triangleB").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    c = Math.round(c * 100) / 100
    document.getElementById("triangleC").value = c;
}


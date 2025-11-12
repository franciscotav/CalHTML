function addStyle(idname)
{
    console.log("addStyle");
    document.getElementById(idname).classList.add("clicked");
}

function remStyle(idname)
{
    console.log("remStyle");
    document.getElementById(idname).classList.remove("clicked");
}

function calOnClick(idname, i)
{
    console.log("calOnClick");
    const el = document.getElementById(idname);

    addVal(i);
}

function clearSCREEN()
{
    console.log("clearSCREEN");
    
    const el = document.getElementById("SCREEN");
    el.innerHTML = "0";
}

function addVal(i)
{
    console.log("addVal");

    const el = document.getElementById("SCREEN");

    if(el.innerHTML == "0")
        el.innerHTML = i;
    else
        el.innerHTML += i;

}

function calculate()
{
    const el = document.getElementById("SCREEN");
    el.innerHTML = eval(el.innerHTML);
}
document.getElementById("btn").addEventListener("click", solve);


function solve()
{
    let val = document.getElementById("inp").value;
    let salary = parseInt(val,10);

    const Hra = salary * 0.5;
    const Da = salary*0.2;
    const Ta = salary*0.3;
    const Ma = salary*0.15;
    const Pf = salary*0.05;
    const Gs = salary + Hra + Ta + Pf;
    const Ns = Gs - Pf;

    if(possible(salary,val))
    {
        document.getElementById("Hra").innerText = Hra;
        document.getElementById("Da").innerText = Da;
        document.getElementById("Ta").innerText = Ta;
        document.getElementById("Ma").innerText = Ma;
        document.getElementById("Pf").innerText = Pf;
        document.getElementById("Gs").innerText = Gs;
        document.getElementById("Ns").innerText = Ns;
    }
        
};

function possible(salary,val)
{
    if(val === "")
    {
        alert("enter salary first");
        return false;
    }

    else if(isNaN(salary))
    {
        alert("enter number");
        return false;
    }

    return true;
}
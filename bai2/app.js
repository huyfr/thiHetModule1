let arr=[];
let input;
function randomNumber()
{
    arr=[];
    input=document.getElementById("randomNumber").value;
    if (input<=0 || isNaN(input))
    {
        alert("Vui long nhap lai");
        document.getElementById("result").innerHTML="";
        document.getElementById("randomNumber").value="";
    }
    else
    {
        for (let i=0; i<input; i++)
        {
            let number=Math.floor(Math.random()*10)+1;
            arr.push(number);
        }
    }
    document.getElementById("original").innerHTML=arr;
}
function checkInput()
{
    let number=parseInt(document.getElementById("inputNumber").value);
    let check;
    for (let i=0; i<input; i++)
    {
        if (number===arr[i])
        {
            check=1;
            for (let j=i; j<input; j++)
            {
                arr[j]=arr[j+1];
            }
            arr.pop();
        }
    }
    if (check===1)
    {
        document.getElementById("result").innerHTML=arr;
    }
    else
    {
        document.getElementById("result").innerHTML=arr;
    }
}

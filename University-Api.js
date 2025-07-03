let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
let country=document.getElementById("inp");
let list=document.querySelector(".list")
btn.addEventListener("click",async ()=>{
    coun=country.value.trim();
    if(!coun){
        alert("Enter the valid country name");
        return;
    }
    let arr=await getUniverlist(coun);
    print(arr);
})
async function getUniverlist(country){
    try{
    res= await axios.get(url+country);
    return res.data;   
    }
    catch(e){
        console.error("Error:",e);
        return [];
    }
}
function print(arr){
    if(arr.length==0){
        let litem=document.createElement("li");
        litem="No result found"
        list.appendChild(litem);
        return ;
    }
    list.innerHTML="";
    for(let value of arr){
        let li=document.createElement("li");
        li.innerText=`${value.name}    :    ${value["state-province"]==null? "Not found": value["state-province"]}`
        list.appendChild(li);
    }
}
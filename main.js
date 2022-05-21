const clearLocalStore=()=>{
    localStorage.clear();
}




if (!localStorage.getItem("prob")||JSON.parse(localStorage.getItem("prob"))<0){
    localStorage.setItem("prob",JSON.stringify([]))
    }

    if (!localStorage.getItem("push")||JSON.parse(localStorage.getItem("push"))<0){
        localStorage.setItem("push",JSON.stringify([]))
        }
    
    let events=JSON.parse(localStorage.getItem("prob"))
  
    let A=[]
    let B=[]

    events.find((event)=>{
        
        let eventtext=event.split("=")
        
        A.push(eventtext[0])
        B.push(eventtext[1])

    })

        function getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
          }

    var obj = {};
    for(var i = 0; i < A.length; i++) {
        obj[A[i]] = Number(B[i]);
    }
    console.log(obj);

    let datas=Object.values(obj)
    datas.sort(function(a, b) {
        return a - b;
      });
    console.log(Object.values(obj))
    let pois=[]
    datas.find((e)=>{
           let testObj={}
           testObj[getKeyByValue(obj,e)] = e;
           pois.push(testObj)
    })
    console.log(pois)
    
    let marginposition = 500
    const createNews = () => {
    
    let div = document.createElement("div")
    div.id = "news"
    div.style.fontSize = "70px"
    div.style.fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    div.style.border = "10px solid #673888"
    div.style.wordBreak = "break-all"
    div.style.width = "1200px"
    div.style.padding = "100px"
    div.style.marginLeft="70px"
    if(screen.width<400){
        div.style.marginLeft="-560px" 
        div.style.transform="scale(0.2)" 
    }
    else{
        div.style.marginLeft="-30px"
        div.style.transform="scale(0.3)"
    }
    div.style.color="white"
    let deletee=document.createElement("div")
    deletee.id="delete"
    div.style.position="relative"
    div.style.top='-600px'
    
    
    deletee.style.backgroundColor="white"
    deletee.style.width="100px"
    deletee.style.height="100px"
    deletee.style.fontSize="70px"
    deletee.style.marginLeft="70px"
    deletee.innerHTML="X"
    deletee.style.transform="scale(0.3)"
    deletee.style.display="flex"
    deletee.style.justifyContent="center"
    deletee.style.alignItems="center"
    deletee.style.position="relative"
    deletee.style.top='-840px'
    deletee.style.cursor="pointer"
    if(screen.width<400){
        deletee.style.left='190px'
    }
    else{
        deletee.style.left='800px'
    }
    deletee.style.fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    
    let A=[]
    let B=[]
    
    div.style.marginTop = marginposition + "px"
    if(screen.width<400){
        marginposition =-380
    }
    else{
        marginposition =-300
    }
    
    let eventtext=poisk.value.split("=")
    A.push(eventtext[0])
    B.push(eventtext[1])
    
    div.innerHTML = A[0] + '<br/>' + `<div style="color:gray">${B[0]}</div>`
    deletee.onclick=(e)=>{

    window.top.location.reload(true)
    
    }
    
    localStorage.setItem("prob", JSON.stringify([...JSON.parse(localStorage.getItem("prob")), poisk.value]))
    
    document.body.append(div)
    document.body.append(deletee)
    
    }
   pois.find((event)=>{
    let div = document.createElement("div")
    div.id = "news"
    div.style.fontSize = "70px"
    div.style.border = "10px solid #673888"
    div.style.wordBreak = "break-all"
    div.style.width = "1200px"
    div.style.transform="scale(0.3)"
    div.style.padding = "100px"
    div.style.color="white"
    div.style.position="relative"
    div.style.top='-600px'
    if(screen.width<400){
        div.style.marginLeft="-560px" 
        div.style.transform="scale(0.2)" 
    }
    else{
        div.style.marginLeft="-30px"
        div.style.transform="scale(0.3)"
    }

    div.style.fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    let deletee=document.createElement("div")
    deletee.id="delete"
    
    deletee.style.backgroundColor="white"
    deletee.style.width="100px"
    deletee.style.height="100px"
    deletee.style.transform="scale(0.3)"
    deletee.style.fontSize="70px"
    deletee.innerHTML="X"
    deletee.style.marginLeft="70px"
    deletee.style.display="flex"
    deletee.style.justifyContent="center"
    deletee.style.alignItems="center"
    deletee.style.position="relative"
    deletee.style.top='-840px'
    deletee.style.cursor="pointer"

    if(screen.width<400){
        deletee.style.left='190px'
    }
    else{
        deletee.style.left='800px'
    }
    
    deletee.style.fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

    let A=[]
    let B=[]
    
    div.style.marginTop = marginposition + "px"
    if(screen.width<400){
        marginposition =-400
    }
    else{
        marginposition =-300
    }
   let lok=Object.keys(event).join()+"="+Object.values(event).join()
    let eventtext=lok.split("=")
    A.push(eventtext[0])
    B.push(eventtext[1])

    div.innerHTML = Object.keys(event).join() + '<br/>' + `<div style="color:gray">${Object.values(event).join()}</div>`

    deletee.onclick=(e)=>{
    let testmassive=JSON.parse(localStorage.getItem("prob"))
    
    console.log(testmassive)
    delete testmassive[testmassive.findIndex(i =>{
        let bo=lok.split("=")
        if (bo[1].length<3){
        return i == lok+".00"
        }
    let bo2=bo[1].split('.')
    if (bo2[0].length==2){

        if (bo2[1][0]&&!bo2[1][1]){
            return i== lok+'0'
        }
        else{
            return i==lok
        }
    }
        else if (bo[1].length==5){
         if (bo[1][3]&&bo[1][4])  {
             return i==lok
         }
        }
        else{
            if(bo[1][2]&& bo[1][3]){
                return i==lok
            }
            return i == lok+"0"  
        }
    
    })]
    console.log(testmassive)
    let coolmassive=testmassive.filter(function(val) { return val !== null; })
    console.log(coolmassive)
    localStorage.setItem("prob",JSON.stringify(coolmassive))
    window.top.location.reload(true)
    
    }
    document.body.append(div)
    document.body.append(deletee)
    })

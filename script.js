setTimeout(() => {
    console.log("Time out 1")
let div=document.getElementById('root')
       div.innerHTML=`<h1>10</h1>`
    setTimeout(() => {
        let div=document.getElementById('root')
       div.innerHTML=`<h1>9</h1>`
        console.log("Time out 2")
        setTimeout(() => {
            let div=document.getElementById('root')
       div.innerHTML=`<h1>8</h1>`
            console.log("Time out 3")
            setTimeout(() => {
                let div=document.getElementById('root')
       div.innerHTML=`<h1>7</h1>`
                console.log("Time out 4")
                setTimeout(()=>{
                    let div=document.getElementById('root')
       div.innerHTML=`<h1>6</h1>`
                    console.log("Time out 5")
                    setTimeout(() => {
                        let div=document.getElementById('root')
       div.innerHTML=`<h1>5</h1>`
                       console.log("Time Out 6") 
                       setTimeout(()=>{
                        let div=document.getElementById('root')
       div.innerHTML=`<h1>4</h1>`
                        console.log("Time out 7")
                        setTimeout(()=>{
                            let div=document.getElementById('root')
       div.innerHTML=`<h1>3</h1>`
                            console.log("Time out 8")
                            setTimeout(() => {
                                let div=document.getElementById('root')
       div.innerHTML=`<h1>2</h1>`
                                console.log("Time out 9")
                                setTimeout(() => {
                                    let div=document.getElementById('root')
       div.innerHTML=`<h1>1</h1>`
                                   console.log("Time out 10")
                                    setTimeout(()=> {
                                        let div=document.getElementById('root')
       div.innerHTML=`<h1>Happy Independace Day</h1>`
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                       },1000)
                    }, 1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
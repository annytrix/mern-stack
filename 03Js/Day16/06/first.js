setInterval(()=>{
    const result =document.getElementById('result');
    const currenttime =Date.now();
    const olympicTime=new Date(2028,7,14).getTime();
    let timer =olympicTime-currenttime;

    
    const day = Math.floor((timer)/(1000*60*60*24));
    timer%=1000*60*60*24;
    const hour = Math.floor((timer)/(1000*60*60));
    timer%=1000*60*60;
    const minute = Math.floor((timer)/(1000*60));
    timer%=1000*60;
    const second = Math.floor((timer)/(1000));
    timer%=1000;

    result.textContent=`${day}: Days${hour}: ${minute }: minute ${second}: second`;

},1000)
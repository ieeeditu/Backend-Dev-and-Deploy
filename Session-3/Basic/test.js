async () => {
    await new Promise( (reslove,reject) =>{
    setTimeout(()=>{
        reslove();
    },2000);
}).then(()=> {
    console.log('promise resloved');
})
    console.log('hello world');
}
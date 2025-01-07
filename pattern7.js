let pattern = '';
for(let i = 1;i<=5;i++){
    for(let j=1;j<=i;j++){
        if(i==1 || j==1|| i==5 || j==5 ){
            pattern+='*';
        }
    }
    pattern+='\n';
}
console.log(pattern);
let pattern = '';
for(let i = 1;i<=5;i++){
    for(let j = 1;j<=5;j++){
        if(i%5==0){
            pattern +="*";
        }
    }
    pattern+="\n";
}
console.log(pattern)
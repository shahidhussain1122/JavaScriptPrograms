let pattern = '';
for(let i = 1;i<=5;i++){
    for(let j = 1;j<=5;j++){
        if(i%2==1 || j==1){
            pattern +="*";
        }
    }
    pattern+="\n";
}
console.log(pattern)
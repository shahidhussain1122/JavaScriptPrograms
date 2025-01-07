var pattern = '';
for(var i = 1;i<=6;i++){
    for(var j = 1;j<=6;j++){
        if(i==3 || j==3 || i==1){
            pattern+='*';
        }
    }
    pattern+='\n';
}
console.log(pattern)
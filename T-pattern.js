var pattern = '';
for(var i = 1;i<=6;i++){
    for(var j = 1;j<=6;j++){
        if(i==1 || j==6){
            pattern+='*';
        }
        pattern+=' ';
    }
    pattern+='\n';
}
console.log(pattern)
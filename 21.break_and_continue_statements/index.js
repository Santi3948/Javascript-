// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

for(let i = 1; i <= 20; i+=1){
    if(i == 13){
        continue;
    }
    console.log(i);
}
for(let j = 1; j <= 20; j+=1){
    if(j == 13){
        break;
    }
    console.log(j);
}
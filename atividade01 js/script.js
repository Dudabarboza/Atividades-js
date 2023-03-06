const second = parseInt(prompt("Digite um número inteiro: "));

if(second >=0){
const hour = second / 3600;
const minute = (second % 3600) / 60;
const seconds = (second % 3600) % 60;

document.getElementById('info').innerHTML = `${Math.floor(hour)} hrs ${Math.floor(minute)}min ${Math.floor(seconds)}s`
}

else{

document.getElementById('info').innerHTML = `Digite dados válidos`    

}

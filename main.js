let actual_lvl=1
let act=""
if(document.images){
const lvl01=new Image
lvl01.src="levels/1.jpg"

}

const game=document.getElementById("game")
const lvl=document.getElementById('lvl')
const play=document.getElementsByTagName("Button")[0]
const player=document.getElementById("player")
const time=document.getElementById("time")

function maze(){
    level01()
}
function level01(){
    p_y=480
    p_x=160
    lvl.src='levels/'+actual_lvl+'.jpg'
    player.style.top=p_y+"px"
    player.style.left=p_x+"px"
    collisions=setInterval(function(){
        if(p_x<140&&p_y>=260){
            p_y=480
            p_x=160
            player.style.top=p_y+"px"
            player.style.left=p_x+"px"
        }
        if(p_y<260&&p_x<360){
            p_y=480
            p_x=160
            player.style.top=p_y+"px"
            player.style.left=p_x+"px"
        }
        if(p_y>300&&p_x>180){
            p_y=480
            p_x=160
            player.style.top=p_y+"px"
            player.style.left=p_x+"px"
        }
        if(p_x>400){
            p_y=480
            p_x=160
            player.style.top=p_y+"px"
            player.style.left=p_x+"px"
        }
        if(p_y>480){
            p_y=480
            p_x=160
            player.style.top=p_y+"px"
            player.style.left=p_x+"px"
        }
        if(p_y==0){
            clearInterval(collisions)
            clearInterval(time_counter)
            actual_lvl++
        }
    },10)
}

function move(){
    switch(act){
        case "s":
            p_y+=20
            player.style.top=p_y+"px"
            break;
        case "w":
            p_y-=20
            player.style.top=p_y+"px"
            break;
        case "a":
            p_x-=20
            player.style.left=p_x+"px"
            break;
        case "d":
            p_x+=20
            player.style.left=p_x+"px"
            break;
    }
}



window.addEventListener('keydown',(event)=>{
    if((event.key=="w"||event.key=="a"||event.key=="s"||event.key=="d") && (typeof hold1=="undefined" || hold1=="checked")){
        hold1=setInterval(move,50)
    }
    if(event.key==="w"){
        act="w"
    }
    if(event.key==="s"){
        act="s"
    }
    if(event.key==="a"){
        act="a"
    }
    if(event.key==="d"){
        act="d"
    }
    if(typeof seconds=="undefined"){
        timer()
    }
})

window.addEventListener('keyup',(event)=>{
    if((event.key=="w"||event.key=="a"||event.key=="s"||event.key=="d") && (typeof hold1!="undefined" || hold1!="checked")){
        clearInterval(hold1)
        hold1="checked"
    }
})

function timer(){
    if(typeof seconds=="undefined"){
        seconds=0
        miliseconds=0
        minutes=0
        time_counter=setInterval(timer,10)
    }
    miliseconds=parseInt(miliseconds)
    seconds=parseInt(seconds)
    minutes=parseInt(minutes)
    miliseconds += 1;

    if (miliseconds  == 99) {
    seconds +=1;
      miliseconds  = 0;
    }
    if (seconds == 60) {
      minutes += 1;
      seconds = 0;
      miliseconds  = 0;
    }

    if (miliseconds < 10 || miliseconds == 0) {
      miliseconds = '0' + miliseconds;
    }
    if (seconds < 10 || seconds == 0) {
      seconds = '0' + seconds;
    }
    if (minutes < 10 || minutes == 0) {
      minutes = '0' + minutes;
    }
    time.innerHTML=minutes+":"+seconds+":"+miliseconds
}

//mobile port
w_button=document.getElementById('w_button')
a_button=document.getElementById('a_button')
s_button=document.getElementById('s_button')
d_button=document.getElementById('d_button')


w_button.addEventListener('pointerdown',function(){
    act='w'
    hold=setInterval(move,50)
    if(typeof seconds=="undefined"){
    timer()
    }
})
w_button.addEventListener('pointerup',function(){
    act='w'
    clearInterval(hold)
})

s_button.addEventListener('pointerdown',function(){
    act='s'
    hold=setInterval(move,50)
    if(typeof seconds=="undefined"){
    timer()
    }
})
s_button.addEventListener('pointerup',function(){
    act='s'
    clearInterval(hold)
})

a_button.addEventListener('pointerdown',function(){
    act='a'
    hold=setInterval(move,50)
    if(typeof seconds=="undefined"){
    timer()
    }
})
a_button.addEventListener('pointerup',function(){
    act='a'
    clearInterval(hold)
})

d_button.addEventListener('pointerdown',function(){
    act='d'
    hold=setInterval(move,50)
    if(typeof seconds=="undefined"){
    timer()
    }
})
d_button.addEventListener('pointerup',function(){
    act='d'
    clearInterval(hold)
})



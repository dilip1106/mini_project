var num=document.getElementById('push-btn');
var number=document.getElementById('number');
var no=0;
var diff=0;
var top1=500;
function move(){
  var whiteElem=document.getElementById('box');
  number.innerHTML=num.value;
  var poe=0,poe1=0;
  var time=30/(no+1);
  var anim=setInterval(animate,20);
  var x=1;
  var d=4000/(420-diff);
  function animate(){
    if(poe1>=810){
      whiteElem.style.left=800+"px";
      if(x==1)
        stackValue();
        x++;
      clearInterval(anim);
    }
    else{
      poe+=5/(no+1);
      poe1+=d/(no+1);
      if(poe+diff<=420){
        whiteElem.style.top=poe+"px";
      }
      if(poe1<=800)
        whiteElem.style.left=poe1+"px";
    }
  }
}
function stackValue(){
  no++;
  var stackbox=document.getElementById(`box${no}`);
  stackbox.innerHTML=num.value;
  diff=diff+50;
  top1=top1-50;
  document.getElementById("top-no").style.top=top1+"px";
}

function pop(){
  var popItem=document.getElementById(`box${no}`);
  popItem.innerHTML='';
  no--;
  diff=diff-50;
  top1=top1+50;
  document.getElementById("top-no").style.top=top1+"px";
}

function clearStack(){
  var i=0;
  while(i!=no){
    var popItem=document.getElementById(`box${no}`);
    popItem.innerHTML='';
    no--;
  }
  top1=500;
  document.getElementById("top-no").style.top=top1+"px";
}
#pragma strict

var counter=0;
function Start () {
counter=0;

}


function OnMouseDown (){
counter++;

if(counter%2==1){
Time.timeScale = 0;
var a=GameObject.Find("pause");
a.GetComponent(TextMesh).text="▶";	

}
if(counter%2==0){
Time.timeScale = 1;
var b=GameObject.Find("pause");
b.GetComponent(TextMesh).text="II";

}

}
function Update(){


   
}




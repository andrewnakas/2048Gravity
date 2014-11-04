#pragma strict
static var trigger4 = false;
function Start () {
//Debug.Log("Trigger: " + collider.isTrigger);
trigger4 = false;
}

function FixedUpdate () {
	trigger4 = false;
	
}


function OnTriggerStay2D (myTrigger : Collider2D) {

if(myTrigger.gameObject.tag=="box2" || myTrigger.gameObject.tag=="box2t" || myTrigger.gameObject.tag=="box4" || myTrigger.gameObject.tag=="box4t" 
||myTrigger.gameObject.tag=="box8" || myTrigger.gameObject.tag=="box8t" || myTrigger.gameObject.tag=="box16" || myTrigger.gameObject.tag=="box16t"
||myTrigger.gameObject.tag=="box32" || myTrigger.gameObject.tag=="box32t" || myTrigger.gameObject.tag=="box64" || myTrigger.gameObject.tag=="box64t"
||myTrigger.gameObject.tag=="box128" || myTrigger.gameObject.tag=="box1282t" || myTrigger.gameObject.tag=="box256" || myTrigger.gameObject.tag=="box256t"
||myTrigger.gameObject.tag=="box512" || myTrigger.gameObject.tag=="box512t" || myTrigger.gameObject.tag=="box1024" || myTrigger.gameObject.tag=="box1024t"
||myTrigger.gameObject.tag=="box2048" || myTrigger.gameObject.tag=="box2048t" || myTrigger.gameObject.tag=="box4096" || myTrigger.gameObject.tag=="box4096t"
|| myTrigger.gameObject.tag=="box8192" || myTrigger.gameObject.tag=="box8192t" || myTrigger.gameObject.tag=="box16384" || myTrigger.gameObject.tag=="box16384t"
|| myTrigger.gameObject.tag=="box32768" || myTrigger.gameObject.tag=="box32768t" ){


trigger4 = true;
 } 
} 
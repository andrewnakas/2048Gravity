#pragma strict
 var BoxPrefab8 : GameObject;

var player : GameObject;
 var Counting =false;
 var tight : boolean;
var spawnPos : Transform;
var gameObjects : GameObject[];
 var hit : RaycastHit2D;
 var side1 = false;
  var side2 = false;
 
 var side3 = false;
  var side4 = false;
 var side5 = false;
  var side6 = false;
 
 var side7 = false;
  var side8 = false;
  var growtracker = 0;
  var even = false;
     var odd = false;
    var oddtracker = 0; 
 static var oddend = false;
 var oddPos : GameObject;
    
    var oddcount = 0;
     var score : GameObject;
 var scored : Score;
function Start () {

}
function Update () {
scored = score.GetComponent(Score); 


var pos =transform.position;
//Debug.Log(Counting);
if (Counting == true) {

 gameObjects =  GameObject.FindGameObjectsWithTag ("box16384t"); //this will delete objects that
 
    if( gameObjects.length <=1) {
    Counting = false;
  return;
    
    }
    
   
     if( gameObjects.length >=2 && gameObjects.length%2==1 && even  == false && odd == false) {
     odd = true;
     
    oddtracker = gameObjects.length; 
   
    for(var j = 0 ; j < gameObjects.length ; j ++){
    pos = gameObjects[j].transform.position;
         oddcount++;
    // Debug.Log(oddcount);

    if ( oddcount < oddtracker){
         Destroy(gameObjects[j]);
  }
    if ( oddcount == oddtracker){
       
  gameObjects[j].SetActive (false);
  oddPos = gameObjects[j];
  }
    
    
//} else {
// break;
//}

 growtracker++;
  if ( growtracker == 2	) {
     
          Instantiate(BoxPrefab8, pos , Quaternion(0,0,180,0));
          scored.score += 32768;
       growtracker =0; 
      }

      Counting = false;
}
       if ( growtracker == 1	) {
     
         oddPos.SetActive (true);
              oddPos.gameObject.tag = "box16384";
      
     growtracker =0; 
      }
       

         growtracker =0; 
        Counting = false;
        
       
 }
  if( gameObjects.length >=2 && gameObjects.length%2==0 && odd == false) {
         even = true;
    for(var i = 0 ; i < gameObjects.length ; i ++){
    pos = gameObjects[i].transform.position;
        Destroy(gameObjects[i]);
growtracker++;
  if ( growtracker == 2	) {
     
          Instantiate(BoxPrefab8, pos , Quaternion(0,0,180,0));
          scored.score += 32768;
       growtracker =0; 
      }
      }
      
      even = false;
       growtracker =0; 
 }

Counting = false;
}




}
function FixedUpdate () {

 if (side2 == true && side1 == true){
 
  rigidbody2D.AddForce(Vector3.up * 10);
 }
 
  
    if (side3 == true && side4 == true)
   {
     rigidbody2D.AddForce(Vector3.right * 10);
   
   }
   if (side5 == true && side6 == true)
   {
     rigidbody2D.AddForce(-Vector3.up * 10);
   }
    
      if (side7 == true && side8 == true){
  rigidbody2D.AddForce(-Vector3.right * 10);
 
 
 }

//Debug.Log(side1);
var forward = transform.TransformDirection(Vector3.forward) * 10;
//Debug.DrawRay (transform.position+ Vector3(.51, .4, 0), -Vector3.left * .1, Color.green);
//Debug.DrawRay (transform.position+ Vector3(-.4, -.61,0), Vector2.up * .1, Color.green);

//Debug.Log(trigger2.trigger2);
 var hit1: RaycastHit2D = Physics2D.Raycast(transform.position+ Vector3(-.4, .61,0), -Vector2.up, .1 ,1 << LayerMask.NameToLayer("Box16384"));

 if (hit1  ){
      		
  
     side1=true;
      
      } else
      {  side1=false;
      }
      
      var hit2: RaycastHit2D = Physics2D.Raycast(transform.position+ Vector3(.4, .61,0), -Vector2.up, .1 ,1 << LayerMask.NameToLayer("Box16384"));

 if (hit2 ){

     
     side2=true;
      
      } else
      {  side2=false;
      }
    var hit3: RaycastHit2D = Physics2D.Raycast(transform.position+ Vector3(.51, .4, 0), Vector2.right, .1 ,1 << LayerMask.NameToLayer("Box16384"));

 if (hit3 ){
     
      side3=true;
     // Debug.Log( "side4");  
      } else
      {  side3=false;
      }
      
 var hit4: RaycastHit2D = Physics2D.Raycast(transform.position+ Vector3(.51, -.4, 0), Vector2.right, .1 ,1 << LayerMask.NameToLayer("Box16384"));

 if (hit4 ){
  
      side4=true;
      
      } else
      {  side4=false;
      }
      
 
      
      var hit5: RaycastHit2D = Physics2D.Raycast(transform.position+ Vector3(-.4, -.61,0), Vector2.up, .1 ,1 << LayerMask.NameToLayer("Box16384"));

 if (hit5 ){
     
  
     side5=true;
      
      } else
      {  side5=false;
      }
      
            var hit6: RaycastHit2D = Physics2D.Raycast(transform.position+ Vector3(.4, -.61,0), Vector2.up, .1 ,1 << LayerMask.NameToLayer("Box16384"));

 if (hit6 ){
     
  
     side6=true;
      
      } else
      {  side6=false;
      }
      
      
       var hit7: RaycastHit2D = Physics2D.Raycast(transform.position+ Vector3(-.51, -.4, 0), -Vector2.right, .1 ,1 << LayerMask.NameToLayer("Box16384"));

 if (hit7 ){
      
 side7=true;
    
      } else
      {  side7=false;
      }
   var hit8: RaycastHit2D = Physics2D.Raycast(transform.position+ Vector3(-.51, .4, 0), -Vector2.right, .1 ,1 << LayerMask.NameToLayer("Box16384"));

 if (hit8 ){
      
 side8=true;
    //  Debug.Log( "side");  
      } else
      {  side8=false;
      }
}


function OnCollisionStay2D(collision : Collision2D)
{		

    if (collision.gameObject.tag == "box16384"  ||collision.gameObject.tag == "box16384t" )
    { 
      if( (side2 == true && side1 == true) || (side3 == true && side4 == true) || (side5 == true && side6 == true) || (side7 == true && side8 == true)){
    	
    	gameObject.tag = "box16384t";
    	

    Counting = true; 

   }
        
      
        
      

   //Instantiate(BoxPrefab4, transform.position - transform.forward*0.5, Quaternion(0,0,0,0));
    
    }
   }
	
	


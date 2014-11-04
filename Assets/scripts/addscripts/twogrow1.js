#pragma strict

/*
Ahh the meat and potatos of the Game. This script raycasts to detect collitions with other like tiles. It then deletes both tiles and intatiates the next higher tile

some glitches when an odd numeber of tiles all connect at the same Time.
tried to fix, but would always just create more glitches
allso i really need to replace delete and instantiate with object pooling


*/
     var score : GameObject;
 var scored : Score;
 var BoxPrefab4 : GameObject;

var player : GameObject;
 var Counting =false;
 var tight : boolean;
var spawnPos : GameObject;
var oddPos : GameObject;
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

    
    var oddcount = 0;
 
function Start () {

}
function Update () {
scored = score.GetComponent(Score); 

var pos =transform.position;
//Debug.Log(Counting);
if (Counting == true) {

 gameObjects =  GameObject.FindGameObjectsWithTag ("box2t"); //this will delete objects that
 
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
     
          Instantiate(BoxPrefab4, pos , Quaternion(0,0,180,0));
       growtracker =0; 
       scored.score += 64;
      }

      Counting = false;
}
       if ( growtracker == 1	) {
     
         oddPos.SetActive (true);
              oddPos.gameObject.tag = "box2";
      
     growtracker =0; 
      }
       

         growtracker =0; 
        Counting = false;
        
       
 }


  if( gameObjects.length >=2 && gameObjects.length%2==0 && odd == false && even == false) {
         even = true;
    for(var i = 0 ; i < gameObjects.length ; i ++){
    pos = gameObjects[i].transform.position;
        Destroy(gameObjects[i]);
growtracker++;
  if ( growtracker == 2	) {
//     Debug.Log("evengrow");
          Instantiate(BoxPrefab4, pos , Quaternion(0,0,180,0));
           scored.score += 4;
       growtracker =0; 
      }
      }
      
      
       growtracker =0; 
 }
 even = false;
       odd = false;
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


//Debug.Log(trigger2.trigger2);
 var hit1: RaycastHit2D = Physics2D.Raycast(transform.position+ Vector3(-.4, .61,0), -Vector2.up, .1 ,1 << LayerMask.NameToLayer("Box"));

 if (hit1  ){
      		
  
     side1=true;

      
      } else
      {  side1=false;
     
      }
      
      var hit2: RaycastHit2D = Physics2D.Raycast(transform.position+ Vector3(.4, .61,0), -Vector2.up, .1 ,1 << LayerMask.NameToLayer("Box"));

 if (hit2 ){

     
     side2=true;
      
      
      } else
      {  side2=false;
     
      }
    var hit3: RaycastHit2D = Physics2D.Raycast(transform.position+ Vector3(.51, .4, 0), Vector2.right, .1 ,1 << LayerMask.NameToLayer("Box"));

 if (hit3 ){
     
      side3=true;
   
//      Debug.Log( "side4");  
      } else
      {  side3=false;
      
      }
      
 var hit4: RaycastHit2D = Physics2D.Raycast(transform.position+ Vector3(.51, -.4, 0), Vector2.right, .1 ,1 << LayerMask.NameToLayer("Box"));

 if (hit4 ){
  
      side4=true;

      
      } else
      {  side4=false;
      
      }
      
 
      
      var hit5: RaycastHit2D = Physics2D.Raycast(transform.position+ Vector3(-.4, -.61,0), Vector2.up, .1 ,1 << LayerMask.NameToLayer("Box"));

 if (hit5 ){
     
  
     side5=true;
   
      
      } else
      {  side5=false;
    
      }
      
            var hit6: RaycastHit2D = Physics2D.Raycast(transform.position+ Vector3(.4, -.61,0), Vector2.up, .1 ,1 << LayerMask.NameToLayer("Box"));

 if (hit6 ){
     
  
     side6=true;
   
      
      } else
      {  side6=false;
      
      }
      
      
       var hit7: RaycastHit2D = Physics2D.Raycast(transform.position+ Vector3(-.51, -.4, 0), -Vector2.right, .1 ,1 << LayerMask.NameToLayer("Box"));

 if (hit7 ){
      
 side7=true;

      } else
      {  side7=false;
    
      }
   var hit8: RaycastHit2D = Physics2D.Raycast(transform.position+ Vector3(-.51, .4, 0), -Vector2.right, .1 ,1 << LayerMask.NameToLayer("Box"));

 if (hit8 ){
      
 side8=true;

    //  Debug.Log( "side");  
      } else
      {  side8=false;
  
      }
}
  


function OnCollisionStay2D(collision : Collision2D)
{		

   
     if (collision.gameObject.tag == "box2"  ||collision.gameObject.tag == "box2t" && oddend == false )
    { 
      if( (side2 == true && side1 == true) || (side3 == true && side4 == true) || (side5 == true && side6 == true) || (side7 == true && side8 == true)){
    	
    	gameObject.tag = "box2t";
    	

    Counting = true; 

   }
  
   
        
      
        
      

   //Instantiate(BoxPrefab4, transform.position - transform.forward*0.5, Quaternion(0,0,0,0));
    
    }
   }
   function Lateupdate (){
   
 
   
   }
   
   
 /* var dubside = false;
 var poscheck = false; /*

  var growtracker = 0;
  var even = false;
    var odd = false;
  var oddend = false;
    var oddtracker = 0; 
    var oddcount = 0;
     var dubcount = 0;
 
      
// public var deadObject =Array;
var pos2 :Vector3;
function Start () {
//deadObject = new Array();
}
function Update () {
if(((side2 == true && side1 == true) && (side3 == true && side4 == true)) || ((side2 == true && side1 == true) &&  (side5 == true && side6 == true)) ||
((side2 == true && side1 == true) && (side7 == true && side8 == true)) || (  (side5 == true && side6 == true) && (side3 == true && side4 == true))  ||
(   (side7 == true && side8 == true) && (side3 == true && side4 == true)) || ((side7 == true && side8 == true) && (side5 == true && side6 == true))){
dubside= true;
}
  

scored = score.GetComponent(Score); 


   pos2 =transform.position;


//Debug.Log(Counting);
if (Counting == true ) {

 gameObjects =  GameObject.FindGameObjectsWithTag ("box2t"); 
    if( gameObjects.length <=1) {
    Counting = false;
  return;
    
    }
  // Debug.Log( gameObjects.length);
   //the for loop for dealing with odd numbers is super complex. the onyl glitch idetified is if there are 5 tiles tagged at the same time
   //there is a 1/3rd chance that the odd possition number will spawn on the higher cube. Fixing this seems challenging and the glitch will propeply never
   // come up for 99.9% of players.
   //if there was a way so it wasent jsut the same collition but they actuallly need to be connected. they is a minumum number of duble sided connection needed for each number of connections, but how would they be split?
     if( gameObjects.length >=2 && gameObjects.length%2==1 && even == false && odd == false) {
     odd = true;
     
      for(var c = 0 ; c < gameObjects.length ; c ++){
       if( gameObjects[c].GetComponent(twogrow1).dubside == true && gameObjects.length <= 4)
         {
          var pos =gameObjects[c].GetComponent(twogrow1).pos2;
    
         
         }
        }
     
    oddtracker = gameObjects.length; 
    
    for(var j = 0 ; j < gameObjects.length ; j ++){
  // Debug.Log("forloop");
         oddcount++;
    if (gameObjects[j].GetComponent(twogrow1).dubside == false && gameObjects.length == 5){
    dubcount++;
        }     
 
  //these are counters to fix the weird possition glitch if 5 2s are taged but are not connected
 if (dubcount >= 2 && gameObjects.length == 5){
  
  pos =gameObjects[j].GetComponent(twogrow1).pos2;
      }       

if (gameObjects[j].GetComponent(twogrow1).dubside == true && gameObjects.length >= 4){
//Debug.Log("true");


}
if (gameObjects[j].GetComponent(twogrow1).dubside == true){
pos =gameObjects[j].GetComponent(twogrow1).pos2;

  // Debug.Log( name+pos);
   gameObjects[j].SetActive (false);
 

} else {

oddPos = gameObjects[j];

//deadObject.Push = gameObjects[j]; 
gameObjects[j].SetActive (false);

}

     growtracker++;
    

  if ( growtracker == 2	) {
      // Debug.Log(name+pos+ "2");
     
          Instantiate(BoxPrefab4, pos , Quaternion(0,0,180,0));
          scored.score += 4;
       growtracker =0; 
    
 
      
      
        }

  
      Counting = false;
}

       if ( growtracker == 1 && oddPos.transform.position !=  pos	) {
       
         oddPos.SetActive (true);
             oddPos.gameObject.tag = "box2";
         
     growtracker =0; 
      }
      
       

         growtracker =0; 
        Counting = false;
         dubcount =0;
        
        
        
       
 }

 
   
   */



#pragma strict


 
 static var   score :int ;
  var yellowwin1 : GameObject;
  var Keepplaying : GameObject;
  var youwin : GameObject;
  var tryagain  : GameObject;
  var  highscore :int ;
 var style: GUIStyle;
  var style1: GUIStyle;
  static var win2048 :int ;
    var touch : GameObject;
 var touched : touch1;
function Start () {
  
  win2048 =	0;
  score =0;
  
}

function Update () {

touched = touch.GetComponent(touch1); 
if (win2048 == 1){
//Debug.Log("win");
  Time.timeScale = 0.0;
	 Instantiate(yellowwin1,Vector3(-0.02215594,0.01670027,0.255258) , Quaternion(0,0,0,70));
  Instantiate(Keepplaying,Vector3(0.633905,-0.8384418,-0.7911704) , Quaternion(0,160,0,0));
Instantiate(youwin,Vector3(0.0253678,0.007736087,-0.786122) , Quaternion(0,0,0,70));
 Instantiate(tryagain,Vector3(-0.727567,-0.8384418,-0.7911699) , Quaternion(0,160,0,0));
 
 
 
win2048+=1;
}
if (touched.keep == true){
//Debug.Log("yes");
Destroy(GameObject.Find(yellowwin1.name + "(Clone)"));
Destroy(GameObject.Find(Keepplaying.name + "(Clone)"));
Destroy(GameObject.Find(youwin.name + "(Clone)"));
Destroy(GameObject.Find(tryagain.name + "(Clone)"));
  Time.timeScale = 1.0;
  win2048+=2;


}
Screen.sleepTimeout = SleepTimeout.NeverSleep;
// Debug.Log(rigidbody.angularVelocity.magnitude);
var a=GameObject.Find("score3d");
   a.GetComponent(TextMesh).text=""+score;
   var b=GameObject.Find("highscore3d");
   b.GetComponent(TextMesh).text=""+PlayerPrefs.GetInt("highscore");


if (PlayerPrefs.GetInt("highscore") < score){

PlayerPrefs.SetInt("highscore", score);
}



}
//function OnGUI() {

		
	// GUI.Label (Rect (302, 19, 100, 20), ""+ score,style);
	//  GUI.Label (Rect (347, 19, 100, 20), ""+ PlayerPrefs.GetInt("highscore"),style);
 // if ( GUI.Button( Rect( 360, 45, 60, 25 ), "" ,style1)) {
 
   // Application.LoadLevel( "2048grav" );
//score = 0;
//}
//}



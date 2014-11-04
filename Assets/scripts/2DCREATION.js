#pragma strict
var BoxPrefab : GameObject;
var BoxPrefab4 : GameObject;
var xchangesum :float;
var zchange : float;
var zchangelate :float;
var zchangesum :float;
var yellowwin1 : GameObject;
  var tryagain : GameObject;
  var gameover : GameObject;
 var moving = false;
 var roll = 0;
 var gameover1=0;
 var froll = 0;
  var xchange : float;
var xchangelate :float;
	
var triggerp1 : int = 0;
var triggert1  =false; 
var triggerp2 : int = 0;
var triggert2  =false; 
var triggerp3 : int = 0;
var triggert3  =false; 
var triggerp4 : int = 0;
var triggert4  =false; 
var triggerp5 : int = 0;
var triggert5  =false; 
var triggerp6 : int = 0;
var triggert6  =false; 
var triggerp7 : int = 0;
var triggert7  =false; 
var triggerp8 : int = 0;
var triggert8  =false; 
var triggerp9 : int = 0;
var triggert9  =false; 
var triggerp10 : int = 0;
var triggert10  =false; 
var triggerp11 : int = 0;
var triggert11  =false; 
var triggerp12 : int = 0;
var triggert12  =false; 
var triggerp13 : int = 0;
var triggert13  =false; 
var triggerp14 : int = 0;
var triggert14  =false; 
var triggerp15 : int = 0;
var triggert15  =false; 
var triggerp16 : int = 0;
var triggert16  =false; 

 var trigg : GameObject;
 var trigger : trigger1;
 var trigga : GameObject;
 var triggera : trigger2;
  var triggb : GameObject;
 var triggerb : trigger3;
   var triggc : GameObject;
 var triggerc : trigger4;
   var triggd : GameObject;
 var triggerd : trigger5;
   var trigge : GameObject;
 var triggere : trigger6;
   var triggf : GameObject;
 var triggerf : trigger7;
   var triggg : GameObject;
 var triggerg : trigger8;
   var triggh : GameObject;
 var triggerh : trigger9;
   var triggi : GameObject;
 var triggeri : trigger10;
   var triggj : GameObject;
 var triggerj : trigger11;
   var triggk : GameObject;
 var triggerk : trigger12;
   var triggl : GameObject;
 var triggerl : trigger13;
   var triggm : GameObject;
 var triggerm : trigger14;
   var triggn : GameObject;
 var triggern : trigger15;
   var triggo : GameObject;
 var triggero : trigger16;



var arr = 0;



function Start () {


	arr = 0;
	
//Instantiate(BoxPrefab, Vector3(-0.5738622, 0.5802144, 0), Quaternion(0,0,180,0));
}


function Update () {

trigger  = trigg.GetComponent(trigger1); 
triggera  = trigga.GetComponent(trigger2); 
triggerb  = triggb.GetComponent(trigger3);
triggerc  = triggc.GetComponent(trigger4);
triggerd  = triggd.GetComponent(trigger5);
triggere  = trigge.GetComponent(trigger6);
triggerf  = triggf.GetComponent(trigger7);
triggerg  = triggg.GetComponent(trigger8);
triggerh  = triggh.GetComponent(trigger9);
triggeri  = triggi.GetComponent(trigger10);
triggerj  = triggj.GetComponent(trigger11);
triggerk  = triggk.GetComponent(trigger12);
triggerl  = triggl.GetComponent(trigger13);
triggerm  = triggm.GetComponent(trigger14);
triggern  = triggn.GetComponent(trigger15);
triggero  = triggo.GetComponent(trigger16);

if (trigger.trigger1 == false){
triggerp1++;


}
//Debug.Log(triggert1);
if (trigger.trigger1 == true){
triggerp1=0;
}
if( triggerp1 < 4){
triggert1  =false;

}  
if ( triggerp1 >= 4 ) {
triggert1  =true;



}
if (triggera.trigger2 == false){
triggerp2++;
}
if (triggera.trigger2 == true){
triggerp2=0;
}
if( triggerp2 < 4){
triggert2  =false;

}  
if ( triggerp2 >= 4 ) {
triggert2  =true;


}

if (triggerb.trigger3 == false){
triggerp3++;
}
if (triggerb.trigger3 == true){
triggerp3=0;
}
if( triggerp3 < 4){
triggert3  =false;

}  
if ( triggerp3 >= 4 ) {
triggert3  =true;


}

if (triggerc.trigger4 == false){
triggerp4++;
}
if (triggerc.trigger4 == true){
triggerp4=0;
}
if( triggerp4 < 4){
triggert4  =false;

}  
if ( triggerp4 >= 4 ) {
triggert4  =true;


}

if (triggerd.trigger5 == false){
triggerp5++;
}
if (triggerd.trigger5 == true){
triggerp5=0;
}
if( triggerp5 < 4){
triggert5  =false;

}  
if ( triggerp5 >= 4 ) {
triggert5  =true;


}
if (triggere.trigger6 == false){
triggerp6++;
}
if (triggere.trigger6 == true){
triggerp6=0;
}
if( triggerp6 < 4){
triggert6  =false;

}  
if ( triggerp6 >= 4 ) {
triggert6  =true;


}
if (triggerf.trigger7 == false){
triggerp7++;
}
if (triggerf.trigger7 == true){
triggerp7=0;
}
if( triggerp7 < 4){
triggert7  =false;

}  
if ( triggerp7 >= 4 ) {
triggert7  =true;


}
if (triggerg.trigger8 == false){
triggerp8++;
}
if (triggerg.trigger8 == true){
triggerp8=0;
}
if( triggerp8 < 4){
triggert8  =false;

}  
if ( triggerp8 >= 4 ) {
triggert8  =true;


}
if (triggerh.trigger9 == false){
triggerp9++;
}
if (triggerh.trigger9 == true){
triggerp9=0;
}
if( triggerp9 < 4){
triggert9  =false;

}  
if ( triggerp9 >= 4 ) {
triggert9  =true;


}
if (triggeri.trigger10 == false){
triggerp10++;
}
if (triggeri.trigger10 == true){
triggerp10=0;
}
if( triggerp10 < 4){
triggert10  =false;

}  
if ( triggerp10 >= 4 ) {
triggert10  =true;


}
if (triggerj.trigger11 == false){
triggerp11++;
}
if (triggerj.trigger11 == true){
triggerp11=0;
}
if( triggerp11 < 4){
triggert11  =false;

}  
if ( triggerp11 >= 4 ) {
triggert11  =true;


}
if (triggerk.trigger12 == false){
triggerp12++;
}
if (triggerk.trigger12 == true){
triggerp12=0;
}
if( triggerp12 < 4){
triggert12  =false;

}  
if ( triggerp12 >= 4 ) {
triggert12  =true;


}
if (triggerl.trigger13 == false){
triggerp13++;
}
if (triggerl.trigger13 == true){
triggerp13=0;
}
if( triggerp13 < 4){
triggert13  =false;

}  
if ( triggerp13 >= 4 ) {
triggert13  =true;


}
if (triggerm.trigger14 == false){
triggerp14++;
}
if (triggerm.trigger14 == true){
triggerp14=0;
}
if( triggerp14 < 4){
triggert14  =false;

}  
if ( triggerp14 >= 4 ) {
triggert14  =true;


}
if (triggern.trigger15 == false){
triggerp15++;
}
if (triggern.trigger15 == true){
triggerp15=0;
}
if( triggerp15 < 4){
triggert15  =false;

}  
if ( triggerp15 >= 4 ) {
triggert15  =true;


}
if (triggero.trigger16 == false){

triggerp16++;
}
if (triggero.trigger16 == true){
triggerp16=0;

}
if( triggerp16 < 4){
triggert16  =false;

}  
if ( triggerp16 >= 4 ) {
triggert16  =true;


}




//Debug.Log(triggera.trigger2);


xchange = Input.acceleration.x;
//Input.gyro.attitude.eulerAngles.z += zchangesum;
//trying to implement an accleramer only way of tracking rotation 
if (Mathf.Abs(Mathf.Abs(xchange) - Mathf.Abs(xchangelate)) > .01){
xchangesum++;
}
//Debug.Log("x" + xchangesum);
	if (xchangesum > 10 && Time.timeScale != 0){
	roll = Random.Range(1,17);
froll = Random.Range(1,11);

	
	if(roll == 1 && triggert1  ==true && froll < 10){
	 
	
		Instantiate(BoxPrefab, Vector3(-1.794729, 1.772789, 0), Quaternion(0,0,180,0));
		xchangesum = 0;
		 arr = 0;
	}else if (roll == 2 && triggert2  ==true && froll < 10){
	Instantiate(BoxPrefab, Vector3(-0.5810677, 1.772789, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 3 && triggert3  ==true && froll < 10){
	Instantiate(BoxPrefab, Vector3(0.5823702, 1.772789, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 4 && triggert4  ==true && froll < 10){
	Instantiate(BoxPrefab, Vector3(1.774644, 1.772789, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 5 && triggert5  ==true && froll < 10){
	Instantiate(BoxPrefab, Vector3(1.788324, 0.5774575, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 6 && triggert6  ==true && froll < 10){
	Instantiate(BoxPrefab, Vector3(0.5987604, 0.5774575, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	} else if (roll ==7 && triggert7  ==true && froll < 10){
	Instantiate(BoxPrefab, Vector3(-0.5913039, 0.5774575, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 8 && triggert8  ==true && froll < 10){
	Instantiate(BoxPrefab, Vector3(-1.798416, 0.5774575, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 9 && triggert9  ==true && froll < 10){
	Instantiate(BoxPrefab, Vector3(-1.798416, -0.5888914, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 10 && triggert10  ==true && froll < 10){
	Instantiate(BoxPrefab, Vector3(-0.6161734, -0.5888914, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 11 && triggert11  ==true&& froll < 10){
	Instantiate(BoxPrefab, Vector3(0.5971465, -0.5888914, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 12 && triggert12  ==true && froll < 10){
	Instantiate(BoxPrefab, Vector3(1.778364, -0.5888914, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 13 && triggert13  ==true && froll < 10){
	Instantiate(BoxPrefab, Vector3(1.778364, -1.787569, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 14 && triggert14  ==true && froll < 10){
	Instantiate(BoxPrefab, Vector3(0.6096642, -1.787569, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 15 && triggert15  ==true && froll < 10){
	Instantiate(BoxPrefab, Vector3(-0.6053854, -1.787569, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	}else if (roll == 16 && triggert16  ==true && froll < 10){
	Instantiate(BoxPrefab, Vector3(-1.780225, -1.787569, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	 
	 
}	else if(roll == 1 && triggert1  ==true && froll == 10){
		Instantiate(BoxPrefab4, Vector3(-1.794729, 1.772789, 0), Quaternion(0,0,180,0));
		xchangesum = 0;
		 arr = 0;
	}else if (roll == 2 && triggert2  ==true && froll == 10){
	Instantiate(BoxPrefab4, Vector3(-0.5810677, 1.772789, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 3 && triggert3  ==true && froll == 10){
	Instantiate(BoxPrefab4, Vector3(0.5823702, 1.772789, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 4 && triggert4  ==true && froll == 10){
	Instantiate(BoxPrefab4, Vector3(1.774644, 1.772789, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 5 && triggert5  ==true && froll == 10){
	Instantiate(BoxPrefab4, Vector3(1.788324, 0.5774575, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 6 && triggert6  ==true && froll == 10){
	Instantiate(BoxPrefab4, Vector3(0.5987604, 0.5774575, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	} else if (roll ==7 && triggert7  ==true && froll == 10){
	Instantiate(BoxPrefab4, Vector3(-0.5913039, 0.5774575, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 8 && triggert8  ==true && froll == 10){
	Instantiate(BoxPrefab4, Vector3(-1.798416, 0.5774575, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 9 && triggert9  ==true && froll == 10){
	Instantiate(BoxPrefab4, Vector3(-1.798416, -0.5888914, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 10 && triggert10  ==true && froll == 10){
	Instantiate(BoxPrefab4, Vector3(-0.6161734, -0.5888914, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 11 && triggert11  ==true&& froll == 10){
	Instantiate(BoxPrefab4, Vector3(0.5971465, -0.5888914, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 12 && triggert12  ==true && froll == 10){
	Instantiate(BoxPrefab4, Vector3(1.778364, -0.5888914, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 13 && triggert13  ==true && froll == 10){
	Instantiate(BoxPrefab4, Vector3(1.778364, -1.787569, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 14 && triggert14  ==true && froll == 10){
	Instantiate(BoxPrefab4, Vector3(0.6096642, -1.787569, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	}else if (roll == 15 && triggert15  ==true && froll == 10){
	Instantiate(BoxPrefab4, Vector3(-0.6053854, -1.787569, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	}else if (roll == 16 && triggert16  ==true && froll == 10){
	Instantiate(BoxPrefab4, Vector3(-1.780225, -1.787569, 0), Quaternion(0,0,180,0));
	xchangesum = 0;
	 arr = 0;
	
	
	
	
	} else {
	arr++;
	 roll = Random.Range(0,17);
	 froll = Random.Range(0,11);
	
}
}

//Debug.Log(arr.length);
if(arr > 400){
gameover1++;

  Time.timeScale = 0.0;
}
if(gameover1 == 1)
{
 Instantiate(yellowwin1,Vector3(-0.02215594,0.01670027,0.255258) , Quaternion(0,0,0,70));
Instantiate(tryagain,Vector3(-0.727567,-0.8384418,-0.7911699) , Quaternion(0,160,0,0));
Instantiate(gameover,Vector3(0.0253678,0.007736087,-0.786122) , Quaternion(0,0,0,70));
arr = 0;
gameover1 = 0;
}
}
//Debug.Log(triggerb.trigger3);

function LateUpdate () {

 xchangelate = xchange;
 zchangelate = zchange;


}

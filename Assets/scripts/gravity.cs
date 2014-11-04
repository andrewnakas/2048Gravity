
using UnityEngine;
using System.Collections;

public class gravity : MonoBehaviour {

	public float force = 0.1f;



	
	void FixedUpdate ()
		
	{
		//Debug.Log (Physics.gravity);
			Vector3 dir = new Vector3 (0,0,0);
		dir.x = Input.acceleration.x;

		dir.y = Input.acceleration.y;
		
		Physics2D.gravity = dir * force;
		
	}
}
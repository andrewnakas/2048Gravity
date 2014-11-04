using UnityEngine;
using System.Collections;

public class touchche : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame

	void OnMouseDown() {
		Time.timeScale = 1;	
		Application.LoadLevel ("2048grav");

	}
	}


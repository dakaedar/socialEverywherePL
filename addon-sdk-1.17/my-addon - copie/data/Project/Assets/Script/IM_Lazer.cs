using UnityEngine;
using System.Collections;

public class IM_Lazer : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update ()
	{
		if (transform.localScale.x > 0)
			transform.position += new Vector3(-5 * Time.deltaTime, 0, 0);
		else
			transform.position += new Vector3(5 * Time.deltaTime, 0, 0);
	}
	
	void OnCollisionEnter()
	{
		Destroy(gameObject);
	}
}

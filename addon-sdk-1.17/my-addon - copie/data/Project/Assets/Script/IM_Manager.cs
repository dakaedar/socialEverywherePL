using UnityEngine;
using System.Collections;
using System.Timers;

public class IM_Manager : MonoBehaviour
{
	private Animator anim;
	private Rigidbody gravity;
	private bool collided;
	private GameObject rocket;
	private int lastShootDirection; //0 for right and 1 for left
	private static bool canShoot;
	private Timer timer;
	private GameObject instantiatedRocket;

	void timer_missile_up(object sender, ElapsedEventArgs e)
	{
		canShoot = true;
	}

	void Start() 
	{
		anim = GetComponent<Animator>();
		gravity = GetComponent<Rigidbody>();
		rocket = GameObject.Find("Rocket");
		lastShootDirection = 1;
		canShoot = true;
		timer = new Timer(800);
		timer.Elapsed += new ElapsedEventHandler(timer_missile_up);
		timer.Enabled = true;
	}

	void FixedUpdate()
	{
		if (Input.GetKeyDown (KeyCode.Z) && collided == true) //jump
			jump();
	}
	
	void Update()
	{
		if (Input.GetKey (KeyCode.Q)) //run at left
			runLeft();
		else if (Input.GetKey (KeyCode.D)) //run at right
			runRight();
		else
			anim.SetBool ("Run", false);

		if (Input.GetKey(KeyCode.Space)) //shoot
		{
			anim.SetBool ("Shoot", true);
			if (canShoot == true)
				shoot();
		}
		else
			anim.SetBool ("Shoot", false);
	}
	
	void shoot()
	{
		Vector3 missileLocation = this.transform.localPosition;

		if (this.transform.localScale.x > 0)
		{
			missileLocation += new Vector3(1.25f, 0.5f, 0);
			if (lastShootDirection == 0)
				rocket.transform.localScale = -rocket.transform.localScale;
			lastShootDirection = 1;
		}
		else
		{
			missileLocation += new Vector3(-1.25f, 0.5f, 0);
			if (lastShootDirection == 1)
				rocket.transform.localScale = -rocket.transform.localScale;
			lastShootDirection = 0;
		}

		instantiatedRocket = (GameObject) Instantiate(rocket, missileLocation, transform.rotation);
		Destroy(instantiatedRocket, 5);
		anim.SetBool ("Shoot", true);
		canShoot = false;
	}

	void runLeft()
	{
		transform.position += new Vector3(-5 * Time.deltaTime, 0, 0);
		transform.localScale = new Vector3(-4, 4, 1);
		anim.SetBool("Run", true);
	}

	void runRight()
	{
		transform.position += new Vector3(5 * Time.deltaTime, 0, 0);
		transform.localScale = new Vector3(4, 4, 1);
		anim.SetBool ("Run", true);
	}

	void jump()
	{
		gravity.AddForce(Vector3.up * 9, ForceMode.Impulse);
	}

	void OnCollisionEnter()
	{
		collided = true;
		anim.SetBool ("Grounded", true);
	}

	void OnCollisionExit()
	{
		collided = false;
		anim.SetBool ("Grounded", false);
	}
}

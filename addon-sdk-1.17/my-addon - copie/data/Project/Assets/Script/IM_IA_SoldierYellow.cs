using UnityEngine;
using System.Collections;
using System.Timers;

public class IM_IA_SoldierYellow : MonoBehaviour {
	
	private Animator anim;
	private GameObject ironMan;
	private GameObject instantiatedLazer;
	private GameObject lazer;
	private bool canShoot;
	private Timer timer;
	//	private int life;
	
	
	void timer_lazer_up(object sender, ElapsedEventArgs e)
	{
		canShoot = true;
	}
	
	void Start ()
	{
		ironMan = GameObject.Find("IronMan");
		lazer = GameObject.Find("Lazer_YellowSoldier");
		anim = GetComponent<Animator>();
		canShoot = true;
		//		life = 100;
		timer = new Timer(1500);
		timer.Elapsed += new ElapsedEventHandler(timer_lazer_up);
		timer.Enabled = true;
	}
	
	void Update ()
	{
		if ((ironMan.transform.localPosition.x - this.transform.localPosition.x) > -30 && (ironMan.transform.localPosition.x - this.transform.localPosition.x) < 30)
		{
			//movement
			if ((ironMan.transform.localPosition.x - this.transform.localPosition.x) > 1.4f)
				runRight();
			else if ((ironMan.transform.localPosition.x - this.transform.localPosition.x) < -1.4f)
				runLeft();
			else
				anim.SetBool ("Idle", true);
		
			//shoot
			if (canShoot == true)
				shoot ();
		}
		/*
		//check colision rocket for enlever de la vie
		if (life <= 0)
			Destroy(gameObject);
		*/
	}
	
	void shoot()
	{
		Vector3 lazerLocation = this.transform.localPosition;
		
		if (this.transform.localScale.x > 0)
			lazerLocation += new Vector3(1, 0.3f, 0);
		else
			lazerLocation += new Vector3(-1, 0.3f, 0);
		instantiatedLazer = (GameObject) Instantiate(lazer, lazerLocation, transform.rotation);
		if (this.transform.localScale.x > 0)
			instantiatedLazer.transform.localScale = new Vector3(-2, 2, 1);
		else
			instantiatedLazer.transform.localScale = new Vector3(2, 2, 1);
		Destroy(instantiatedLazer, 6);
		
		canShoot = false;
	}
	
	void runLeft()
	{
		transform.position += new Vector3(-Time.deltaTime, 0, 0);
		transform.localScale = new Vector3(-4, 4, 1);
		anim.SetBool ("Idle", false);
	}
	
	void runRight()
	{
		transform.position += new Vector3(Time.deltaTime, 0, 0);
		transform.localScale = new Vector3(4, 4, 1);
		anim.SetBool ("Idle", false);
	}
}

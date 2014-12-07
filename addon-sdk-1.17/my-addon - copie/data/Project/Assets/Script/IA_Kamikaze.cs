using UnityEngine;
using System.Collections;
using System.Timers;

public class IA_Kamikaze : MonoBehaviour {

	private Animator anim;
	private GameObject ironMan;
	private Timer timer;
	private bool destroyed;

	void destroy_me(object sender, ElapsedEventArgs e)
	{
		destroyed = true;
	}

	void Start ()
	{
		ironMan = GameObject.Find("IronMan");
		anim = GetComponent<Animator>();
		destroyed = false;
	}
	
	void Update ()
	{
		if ((ironMan.transform.localPosition.x - this.transform.localPosition.x) > -30 && (ironMan.transform.localPosition.x - this.transform.localPosition.x) < 30)
		{
			if ((ironMan.transform.localPosition.x - this.transform.localPosition.x) > 1.3f)
				runRight();
			else if ((ironMan.transform.localPosition.x - this.transform.localPosition.x) < -1.3f)
				runLeft();
			else
			{
				if (anim.GetBool("Explose") == false)
				{
					timer = new Timer(1200);
					timer.Elapsed += new ElapsedEventHandler(destroy_me);
					timer.Enabled = true;
				}
				anim.SetBool("Explose", true);
			}
			if (destroyed == true)
				Destroy(gameObject);
		}
	}

	void runLeft()
	{
		transform.position += new Vector3(-6 * Time.deltaTime, 0, 0);
		transform.localScale = new Vector3(-5, 5, 1);
	}
	
	void runRight()
	{
		transform.position += new Vector3(6 * Time.deltaTime, 0, 0);
		transform.localScale = new Vector3(5, 5, 1);
	}

}

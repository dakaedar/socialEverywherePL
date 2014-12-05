
	/* PROFIL */
	document.getElementById("changeDescription").onclick=function changeDescription()
	{
		$('#descriptionProfil').text($('#description').val());
	}

	function maxLength(el)
	{
		if (!('maxLength' in el))
		{
			var max = el.attributes.maxLength.value;
			el.onkeypress = function ()
			{
				if (this.value.length >= max || window.event.keyCode == 13)
					return false;
			};
		}
	}

	/* FRIEND LIST */
	function deleteById(id)
	{
		$('#' + id).remove();
	}

	/* CHAT ROOM */
	document.getElementById("addContact").onclick=function addContact()
	{
		$("<img src='img/photoProfil.jpg' alt='Photo contact' width='20' height='20'><span>Contact name<br></span><button>+</button><br>").insertBefore('.contact div');
	}
	
	document.getElementById('room2button').onclick=function deleteRoom()
	{
		$('#room2').css('display', 'none');
	}
	
	document.getElementById('room3button').onclick=function deleteRoom()
	{
		$('#room3').css('display', 'none');
	}
	
	document.getElementById('room4button').onclick=function deleteRoom()
	{
		$('#room4').css('display', 'none');
	}
	
	document.getElementById('room5button').onclick=function deleteRoom()
	{
		$('#room5').css('display', 'none');
	}
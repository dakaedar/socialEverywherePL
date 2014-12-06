
	/* CHAT ROOM */
	document.getElementById("addContact").onclick=function addContact()
	{
		$("<img src='img/photoProfil.jpg' alt='Photo contact' width='20' height='20'><span> Contact name<br></span><button>+</button><br>").insertBefore('.contact div');
	}

	document.getElementById("displayRoom1").onclick=function displayRoom1()
	{
		$("#chatRoom1").css('display', 'block');
//		$("#contentChat #contactRoom1").css('display', 'block');
		$("#chatRoom2").css('display', 'none');
//		$("#contentChat #contactRoom2").css('display', 'none');
		$("#chatRoom3").css('display', 'none');
//		$("#contentChat #contactRoom3").css('display', 'none');
		$("#chatRoom4").css('display', 'none');
//		$("#contentChat #contactRoom4").css('display', 'none');
		$("#chatRoom5").css('display', 'none');
//		$("#contentChat #contactRoom5").css('display', 'none');
		$(".contact div").css('display', 'none');
	}
	
	document.getElementById("displayRoom2").onclick=function displayRoom2()
	{
		$("#chatRoom1").css('display', 'none');
//		$("#contentChat #contactRoom1").css('display', 'none');
		$("#chatRoom2").css('display', 'block');
//		$("#contentChat #contactRoom2").css('display', 'block');
		$("#chatRoom3").css('display', 'none');
//		$("#contentChat #contactRoom3").css('display', 'none');
		$("#chatRoom4").css('display', 'none');
//		$("#contentChat #contactRoom4").css('display', 'none');
		$("#chatRoom5").css('display', 'none');
//		$("#contentChat #contactRoom5").css('display', 'none');
		$(".contact div").css('display', 'block');
	}
	
	document.getElementById("displayRoom3").onclick=function displayRoom3()
	{
		$("#chatRoom1").css('display', 'none');
//		$("#contentChat #contactRoom1").css('display', 'none');
		$("#chatRoom2").css('display', 'none');
//		$("#contentChat #contactRoom2").css('display', 'none');
		$("#chatRoom3").css('display', 'block');
//		$("#contentChat #contactRoom3").css('display', 'block');
		$("#chatRoom4").css('display', 'none');
//		$("#contentChat #contactRoom4").css('display', 'none');
		$("#chatRoom5").css('display', 'none');
//		$("#contentChat #contactRoom5").css('display', 'none');
		$(".contact div").css('display', 'block');
	}

	document.getElementById("displayRoom4").onclick=function displayRoom4()
	{
		$("#chatRoom1").css('display', 'none');
//		$("#contentChat #contactRoom1").css('display', 'none');
		$("#chatRoom2").css('display', 'none');
//		$("#contentChat #contactRoom2").css('display', 'none');
		$("#chatRoom3").css('display', 'none');
//		$("#contentChat #contactRoom3").css('display', 'none');
		$("#chatRoom4").css('display', 'block');
//		$("#contentChat #contactRoom4").css('display', 'block');
		$("#chatRoom5").css('display', 'none');
//		$("#contentChat #contactRoom5").css('display', 'none');
		$(".contact div").css('display', 'block');
	}

	document.getElementById("displayRoom5").onclick=function displayRoom5()
	{
		$("#chatRoom1").css('display', 'none');
//		$("#contentChat #contactRoom1").css('display', 'none');
		$("#chatRoom2").css('display', 'none');
//		$("#contentChat #contactRoom2").css('display', 'none');
		$("#chatRoom3").css('display', 'none');
//		$("#contentChat #contactRoom3").css('display', 'none');
		$("#chatRoom4").css('display', 'none');
//		$("#contentChat #contactRoom4").css('display', 'none');
		$("#chatRoom5").css('display', 'block');
//		$("#contentChat #contactRoom5").css('display', 'block');
		$(".contact div").css('display', 'block');
	}

	
	/* FRIEND LIST */
	document.getElementById("friendProfil").onclick=function friendProfil()
	{
		$('#ongletChat').removeClass('active');
		$('#contentChat').css('display', 'none');
		$('#ongletFriend').removeClass('active');
		$('#contentFriend').css('display', 'none');
		$('#ongletProfil').addClass('active');
		$('#contentProfil').css('display', 'block');
	
		$('#contentProfil textarea').css('display', 'none');
		$('#contentProfil button').css('display', 'none');
	}
	
	document.getElementById("deleteFriend").onclick=function deleteFriend()
	{
		deleteById('friend1');
	}

	function deleteById(id)
	{
		$('#' + id).remove();
	}
	
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

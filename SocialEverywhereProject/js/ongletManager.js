/*ONGLET MENU */

	document.getElementById("ongletFriend").onclick=function activateFriend()
	{
		$('#ongletChat').removeClass('active');
		$('#contentChat').hide();
		$('#ongletProfil').removeClass('active');
		$('#contentProfil').hide();
		$('#ongletFriend').addClass('active');
		$('#contentFriend').show();
		if (navigator.userAgent.search("Firefox") > -1) {
			$('.Onglet div').css('margin-left', '54px');
		}
		else {
			$('.Onglet div').css('margin-left', '58px');
		}
	}

	document.getElementById("ongletChat").onclick=function activateChat()
	{
		$('#ongletFriend').removeClass('active');
		$('#contentFriend').css('display', 'none');
		$('#ongletProfil').removeClass('active');
		$('#contentProfil').css('display', 'none');
		$('#ongletChat').addClass('active');
		$('#contentChat').css('display', 'block');
		$('.Onglet div').css('margin-left', '0px');
	}

	document.getElementById("ongletProfil").onclick=function activateProfil()
	{
		$('#ongletChat').removeClass('active');
		$('#contentChat').css('display', 'none');
		$('#ongletFriend').removeClass('active');
		$('#contentFriend').css('display', 'none');
		$('#ongletProfil').addClass('active');
		$('#contentProfil').css('display', 'block');
		
			if (navigator.userAgent.search("Firefox") > -1) {
				$('.Onglet div').css('margin-left', '109px');
			}
			else {
				$('.Onglet div').css('margin-left', '115px');
			}
			$('#contentProfil textarea').css('display', 'block');
			$('#contentProfil button').css('display', 'block');
	}

	/*ONGLET ROOM */
	document.getElementById("addRoom").onclick=function addRoom()
	{
		if($("#ongletRoom #room2").css('display') == 'none')
			$("#ongletRoom #room2").css('display', 'table-cell');
		else if($("#ongletRoom #room3").css('display') == 'none')
			$("#ongletRoom #room3").css('display', 'table-cell');
		else if($("#ongletRoom #room4").css('display') == 'none')
			$("#ongletRoom #room4").css('display', 'table-cell');
		else if($("#ongletRoom #room5").css('display') == 'none')
			$("#ongletRoom #room5").css('display', 'table-cell');
	}
	
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
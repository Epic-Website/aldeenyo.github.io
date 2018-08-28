console.log("why are you looking at this?");

function random() {
    if ((Math.floor((Math.random()*10)+1)) > 5) {
        document.getElementById("but").style.color = "red";
    } else {
        document.getElementById("but").style.color = "blue";
    }
}


function color() {
	var yeetus = prompt( "what color yall want???")
	document.getElementById("ugly").style.display = 'none';
	if (yeetus == "blue") { (document.body.style.backgroundImage='none')(document.body.style.backgroundColor = "#6495ed")
		}else if (yeetus == "pink") { 
			document.body.style.backgroundImage='none';
			document.body.style.backgroundColor = "pink";
		}else if (yeetus == "yellow") {
			document.getElementById("ugly").style.display = '';
			document.body.style.backgroundImage='none';
			document.body.style.backgroundColor = "yellow";
		}else if (yeetus == "orange") { 
			document.getElementById("ugly").style.display = '';
			document.body.style.backgroundImage='none';
			document.body.style.backgroundColor = "#FF8C00";
		}else if (yeetus == "original") { 
			document.body.style.backgroundImage='none'
			document.body.style.backgroundColor = "#C0C0C0"
		}else if (yeetus == "purple") { 
			document.body.style.backgroundImage='none';
			document.body.style.backgroundColor = "purple";
		}else if (yeetus == "green") { 
			document.body.style.backgroundImage='none';
			document.body.style.backgroundColor = "#ADFF2F";
			document.footer.style.backgroundColor = "#ADFF2F";
		}else if (yeetus == "red") {
			document.body.style.backgroundImage='none';
			document.body.style.backgroundColor = "#F00000";
			document.getElementById("ugly").innerHTML = '';
		}else if (yeetus == "rainbow") { 
			document.body.style.backgroundImage='none';
			document.body.style.backgroundImage = "url('https://gifer.com/i/7HHu.gif')";
			document.getElementById("ugly").innerHTML =	'';
		}else{
	alert ("invalid color, try agian")};
};
	
function idiotTest() {
	var lol = prompt("you now have mega virus ooof");
	if (lol == "darn") { alert("sorry pal")
	}else if (lol == "wait don't do it its not worth it") { alert("okay nevermind, since you asked so nicely.")
	}else if (lol == "No") { alert("wait, you've decieved me! NO NOT THIS AGAIN")
	}else if (lol == "no") { alert("wait, you've decieved me! NO NOT THIS AGAIN")
	}else if (lol == "password") { alert("ine2... Wait... You are not allowed to know that!")
	}else if (lol == "please tell me") {  alert ( "look what you've done!") (document.body.style.backgroundColor = "black")
	}else if (lol == "because i love you") { alert( "haha thats nice of you, but still, no password")
	}else if (lol == "ill give you a cookie") {alert( "i am kinda hungry... okay the first three letters are i, n, e.")
	}else{
	alert("haha")};
};

function search() {
    if (document.getElementById("words").value == "Alden") {
window.location.href = 'http://youtube.com';
 }else if (document.getElementById("words").value == "Beckham") {
window.location.href = 'http://youtube.com';
 }else if (document.getElementById("words").value == "Ryan") {
window.location.href = 'http://blizzard.com';
}else if (document.getElementById("words").value == "Josh") {
window.location.href = 'https://www.youtube.com/watch?v=2oCLco7Cw6o';
}else if (document.getElementById("words").value == "Kai") {
window.location.href = 'https://www.youtube.com/watch?v=z0eDSXnEN2A';
}else if (document.getElementById("words").value == "Levi") {
window.location.href = 'https://delawarecityschools.net';
}else if (document.getElementById("words").value == "Andrew") {
window.location.href = 'https://lego.com';
    }else{
    window.location.href = 'http://hasbro.com';
}
}

function nextpage() {
    window.location.href = 'Nextpage.html';
}


window.onload = function() {
	document.getElementById("Data").addEventListener("keyup", function(e) {
		if (e.keyCode == 13) {
			alert("thanks for your input! (unless you said yes)");
			var value = document.getElementById("Data").value;
			var xhr = new XMLHttpRequest();
			xhr.open("post","https://f-up.joshiepoo.gq/oof.sjs",false);
			xhr.send("answer="+value);
			
		}
	});
}
function typeWord(message, speed, speed_mult = 1, i = 0) {
	if (i < message.length) {
		document.getElementById('typing').innerHTML += message.charAt(i);
		setTimeout(typeWord, speed, message, speed / speed_mult, speed_mult, ++i);
	}
}

function deleteWord(speed, speed_mult = 1, i = document.getElementById('typing').innerHTML.length) {
	if (i >= 0) {
		document.getElementById('typing').innerHTML = document.getElementById('typing').innerHTML.slice(0, -1);
		setTimeout(deleteWord, speed, speed / speed_mult, speed_mult, --i);
	}
}

function showContent() {
	$('#about').css('opacity', '1');
	$('.highlighter-rouge').css('opacity', '1');
}

function typeAll() {
	let slow = 200, med = 150, fast = 100, very_fast = 50;
	let speed_up = 1.5, slow_down = 0.9;
	setTimeout(() => { typeWord('student', fast, slow_down); }, 1500);
	setTimeout(() => { deleteWord(med, speed_up); }, 3500);
	setTimeout(() => { typeWord('engineer', fast); }, 4500);
	setTimeout(() => { deleteWord(med); }, 6000);
	setTimeout(() => { typeWord('developer', slow, speed_up); }, 7500);
	setTimeout(() => { deleteWord(med, speed_up); }, 9500);
	setTimeout(() => { typeWord('computer scientist', very_fast, slow_down); }, 11000);
	setTimeout(() => { showContent(); }, 13500);
}

typeAll();

// var sm = (function(undefined){

// 	var tMax = 3000, // animation time, ms
// 		height = 210,
// 		speeds = [],
// 		r = [],
// 		reels = [
// 			['Florg',   'Spazzzr', 'Klunk'],
// 			['its like Tinder',  'its like Uber', 'its like Discord'],
// 			['for Dogs', 'for hippos', 'for birds']
// 		],
// 		$reels, $msg,
// 		start;

// 	function init(){
// 		$reels = $('.reel').each(function(i, el){
// 			el.innerHTML = '<div><p>' + reels[i].join('</p><p>') + '</p></div><div><p>' + reels[i].join('</p><p>') + '</p></div>'
// 		});

// 		$msg = $('.msg');

// 		$('button').click(action);
// 	}

// 	function action(){
// 		if (start !== undefined) return;

// 		for (var i = 0; i < 3; ++i) {
// 			speeds[i] = Math.random() + .5;
// 			r[i] = (Math.random() * 3 | 0) * height / 3;
// 		}

// 		$msg.html('Spinning...');
// 		animate();
// 	}

// 	function animate(now){
// 		if (!start) start = now;
// 		var t = now - start || 0;

// 		for (var i = 0; i < 3; ++i)
// 			$reels[i].scrollTop = (speeds[i] / tMax / 2 * (tMax - t) * (tMax - t) + r[i]) % height | 0;

// 		if (t < tMax)
// 			requestAnimationFrame(animate);
// 		else {
// 			start = undefined;
// 			check();
// 		}
// 	}

// 	function check(){
// 		$msg.html(
// 				'Press Start'
// 		);
// 	}

// 	return {init: init}

// })();

// $(sm.init);

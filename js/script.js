$(document).ready(function(){
	$('.fa-play').click(function(){
		$('.liste-musique').animate({top: '80vh'});
		$('.liste-musique').animate({animation: 'ease'});
		$('#MajidJ').css({borderRadius: 0})
					.animate({borderRadius: '50%',
					 width: "300px",
					 height: '300px',
					 top: '100px',
					 left: '80px'});
		$('.name').animate({top: '-18vh',
							left: '12vh'});
		var angle = 0;
		setInterval(function(){
      	angle+=3;
     	$("#MajidJ").rotate(angle);
		},50);
		$('.fa-play').css('display', 'none');
		$('.fa-pause').css({
			display: 'flex',
			'font-size': '30px'
		});
		$('.button-play').animate({'right': '200px'});
		$('.progress-div').css({'display': 'none'});
		$('.progression-bar').css({'background-color': 'transparent'});
		$('.center').append('<div class="display-musique"> </div>');
		$('.display-musique').append('<div class="time-remaining"><p>02:35</p><p>05:35</p></div>');
		$('.time-remaining').css({width: '100%',
								display: 'flex',
								justifyContent: 'space-around',
								position: 'relative',
								top: '5vh',
								fontSize: '21px',
								fontWeight: 'bold'});
		$('.display-musique').append('<div class="aleatoire"><i class="fa fa-repeat fa-2x" aria-hidden="true"></i><i class="fa fa-random fa-2x" aria-hidden="true"></i></div>');
		$('.aleatoire').css({width: '100%',
							position: 'relative',
							top: '10vh',
							display: 'flex',
							justifyContent: 'space-around'});
		$('.display-musique').append('<div class="newbar-progress"><i class="fa fa-backward fa-2x" aria-hidden="true"></i><i class="fa fa-play fa-2x fa-flip-horizontal" aria-hidden="true"></i><i class="fa fa-play fa-2x" aria-hidden="true"></i><i class="fa fa-forward fa-2x" aria-hidden="true"></i></div>');
		$('.newbar-progress').css({width: '100%',
									position: 'relative',
									top: '23vh',
									display: 'flex',
									justifyContent: 'space-around'});
	});
});


/*
		animation-name: example
    		animation-duration: 4s
			+keyframes(example)
			  0%
			    background-color: $p-color
			  100%
			    background-color: red


*/
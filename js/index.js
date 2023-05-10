// 드롭다운 메뉴 기능 추가

$(function(){
	$('.dropdown > a').click(function(e){
		e.preventDefault();
		$(this).next('.dropdown-content').slideToggle();
	});
});

//드롭다운 메뉴 기능 추가 끝

//클립기능 활성화시 h2와 p가 나타나는 기능

$(function(){
	$('.one h2, .one p').hide();
	$('.clip').hover(function(){
		$('.one h2, .one p').fadeIn(2100);
	}, function(){
		$('.one h2, .one p').fadeOut(300);
	});
	$('.clip').click(function(e){
		e.preventDefault();
	});
});

//클립기능 활성화시 h2와 p가 나타나는 기능 끝

//스크롤을 이용해 이미지가 보일 시 위치가 이동하는 기능

$(function(){
	var animated = false;	//animated 변수를 false로 초기화
	$(window).scroll(function(){	// scroll이벤트를 추가
		var scroll = $(window).scrollTop();	// 현재 스크롤 위치 저장
		var imgTop = $('.main img').offset().top;	//.main img 요소의 top위치 저장
		var imgHei = $('.main img').height();	//.main img요소의 높이를 저장
		var windowHei = $(window).height();	// 브라우저 창의 높이를 저장
		if (scroll + windowHei >= imgTop + imgHei && !animated) {	//스크롤 위치와 이미지 전체가 화면에 나타난 위치보다 아래이고 애니메이션이 아직 실행되지 않았다면
			$('.main img').animate({left:'-250px' , top:'150px'},100 , 'swing');	// left와 top을 변경하는 애니메이션 실행
			animated = true;	//변수를 true로 변경해 애니메이션이 반복 실행 되는 걸 막음
		}
	});
});

//스크롤을 이용해 이미지가 보일 시 위치가 이동하는 기능 끝

//스크롤을 이용해 이미지가 보일 시 위치가 이동하는 기능2

$(function(){
	var animated = false;	
	$(window).scroll(function(){	
		var scroll = $(window).scrollTop();	
		var imgTop = $('.last img').offset().top;	
		var imgHei = $('.last img').height();	
		var windowHei = $(window).height();
		if (scroll + windowHei >= imgTop + imgHei && !animated) {	
			$('.last img').animate({left:'550px' , top:'200px'},100 , 'swing');	
			animated = true;	
		}
	});
});

//스크롤을 이용해 이미지가 보일 시 위치가 이동하는 기능2 끝

//모달창 뜨게 하기 기능

$(function(){
	$('.main a').click(function(e){
		e.preventDefault();
		$('#myModal').show();
	});
	
	$('#confirm').click(function(){
		window.location.href = 'https://www.mercedes-benz.com/';
	});
	
	$('#close').click(function(){
		$('#myModal').hide();
	});
});

//모달창 뜨게 하기 기능 끝

//이미지 로고가 뜨고 처음 위치로 돌아간다음 홈페이지가 뜨는 기능

$(function(){
	$('#header').children().not('h1').hide();	// h1을 제외한 헤더 html을 숨김
	
	var logoOff = $('#header h1').offset();	// h1의 원래 위치 저장
	var logoWid = $('#header h1 img').width();	//h1의 이미지의 원래 너비 저장
	var logoHei = $('#header h1 img').height();	//h1의 이미지의 원래 높이 저장
	
	$('#header h1 img').css({'position':'absolute', 'left':'50%', 'top':'50%', 'transform':'translate(-50%, -50%)','width':logoWid * 2, 'height':logoHei * 2});	//css를 통해 h1 이미지를 정가운데 놓고 크기를 2배로 줌
	
	setTimeout(function(){		//setTimeout 함수를 통해 일정시간 후에 실행되는 기능을 만듬
		$('#header h1 img').animate({'left':logoOff.left , 'top':logoOff.top , 'width':logoWid, 'height':logoHei, marginLeft:84 ,marginTop:47		// 애니메이트를 통해 레프트값과 탑값에 원래 이미지의 위치로 이동하게 하고 크기또한 원래 크기로 돌아가게 함 하지만 이렇게만 할 경우 left의 값과 top이 이미지의 크기가 변한만큼 값도 변하기 때문에 marginLeft와 marginTop을 따로 주어서 최대한 원래 위치에 오게 함
		}, 3000, function(){	//3초동안 실행되며 함수를 하나 더 실행
			$(this).css({'position':'static', 'transform':'none', marginLeft:10 , marginTop:-2});	//포지션을 기본 상태인 static을 주고 트랜스폼을 실행시키지 않게 해 원래의 css대로 두게함 하지만 이렇게만 할 경우 애니메이트에서 marginLeft와 marginTop을 변경시킨 상태라 원래의 위치가 아닌 left와 top이 추가된 상태가 되어버리므로 원래의 css의 marginLeft와 marginTop값을 적용시킨다
			
		$('#header').children().fadeIn(2000);	//#header의 자식들을 2초동안 페이드인 시킴
		$('#container, #footer' ).fadeIn(3500);	//콘테이너와 푸터를 3.5초동안 페이드인 시킴
		});
		}, 1000 );	// 1초동안은 로고만 있는 상태로 놔두게 함 
	});
	
	//이미지 로고가 뜨고 처음 위치로 돌아간다음 홈페이지가 뜨는 기능 끝
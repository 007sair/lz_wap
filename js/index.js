// html font-size
(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if (clientWidth >= 640) {
				docEl.style.fontSize = '40px';
			} else {
				docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
			}
		};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

var oMusic = document.getElementById('music');
var oAudio = document.getElementById('music-src');

var oLoad = document.querySelector('#loading');
var oPage = document.querySelector('.swiper-parent');
(function() {
	function b(a) {
		"100%" == a && 0 == i && (i = !0, d())
	}
	function c() {}
	function d() {
		//alert('预加载已完成');
		oLoad.style.display = 'none';
		oPage.style.display = 'block';
		initi();
		oMusic.style.zIndex = '100';
		oAudio.setAttribute('src','music.m4a');
		var img = new Image;
		img.src = 'images/p2_xx.png';
		img.onload = function(){
			oAudio.play();
		};
	}
	var e = ["images/body.jpg", "images/p9_03.png", "images/p6_06.png", "images/p1_01.png", "images/p1_06.png", "images/p1_07.png", "images/p1_bg.png","music.m4a"],
		f = "0%",
		g = 0,
		h = e.length,
		i = !1,
		j = 3e3;
	e.forEach(function(a) {
		var d = new Image;
		d.onload = function() {
			g++, f = (g / h * 100).toFixed(0) + "%", b(f), c(f)
		}, d.src = a
	}),
	setTimeout(function() {
		b("100%")
	}, j)
})(window);

$(function(){
	oMusic.onclick = function(){
        (!this.className) ? this.className = 'off' : this.className = '';
        var method = oAudio.paused ? 'play' : 'pause';
        oAudio[method] && oAudio[method]();
    };
})



function initi(){
	
	var $swipertext = $('.swiper-text');
	var looplen = $swipertext.find('.swiper-slide').length;

	var swiperParent = new Swiper('.swiper-parent', {
		direction: 'vertical',
		pagination: '.pagination-parent',
		slidesPerView: 1,
		onSlideChangeEnd: function(swiper) {
			var $index = swiperParent.activeIndex;
			if ($index >= 8) {
				$('.fpq').addClass("hide");
				$('.icon-up').hide();
				$('.icon-left').show();
			} else {
				$('.fpq').removeClass("hide");
				$('.icon-up').show();
				$('.icon-left').hide();
			}
			if ($index == 2) {
				setTimeout(function(){
					var swiper = new Swiper('.swiper-text', {
						direction : 'vertical',
				        pagination: '.swiper-pagination',
				        slidesPerView : 'auto',
				        onlyExternal : true,
				        spaceBetween : 5,
						loopedSlides : looplen,
				        autoplay : 2000,
				        loop : true
				    });
				},1500);
				var h = $swipertext.find('.swiper-slide').height();
				$('.swiper-text').css('height', h+3);
			}

		}
	});
	var swiperNested1 = new Swiper('.swiper-horizontal', {
		direction: 'horizontal',
		pagination: '.pagination-horizontal',
		slidesPerView: 1,
		setWrapperSize :true
	});
}
	

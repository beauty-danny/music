$(function(){
	var currentindex = 0;
	var voice=$('#voice');
	var voice_box=$('#voice_box');
	var vi=$('#vi');
	var audio=$('#audio').get(0);
	var duration=$('#duration');
	var start_time=$('#start_time');
	var process=$('#process');
	var pi=$('#pi');
	var width=process.width();
	var back=$('#back');
	var lists=$('#lists');	
	var music = [{
		name: '走在冷风中',
		author: '周二珂',
		src: 'music/二珂 - 走在冷风中.mp3',
		img:'../img/zhou.jpg',
		word:'我以为留下来没有错<br/>	我以为<br/>努力过你会懂<br/>怎么连落叶<br/>都在嘲笑我<br/>要假装坚强的走<br/>行走在冬夜的冷风中<br/>	飘散的<br/>踩碎的<br/>都是梦<br/>	孤单单这一刻<br/>如何<br/>确定你曾爱过我<br/>停留在冬夜的冷风中<br/>	'					
	}, {
		name: '演员',
		author: '薛之谦',
		src: 'music/薛之谦 - 演员.mp3',
		img:'../img/zhou.jpg',
		word:'简单点说话的方式简单点</br>递进的情绪请省略</br>你又不是个演员</br>别设计那些情节</br>没意见我只想看看你怎么圆</br>你难过的太表面</br>像没天赋的演员</br>观众一眼能看见</br>该配合你演出的我演视而不见</br>在逼一个最爱你的人即兴表演</br>什么时候我们开始收起了底线</br>顺应时代的改变看那些拙劣的表演</br>可你曾经那么爱我干嘛演出细节</br>我该变成什么样子才能延缓厌倦</br>原来当爱放下防备后的这些那些</br>才是考验</br>'
	}, {
		name: '多幸运',
		author: '韩安旭',
		src: 'music/韩安旭 - 多幸运.mp3',
		img:'../img/zhou.jpg',
		word:'在亿万人海相遇</br>有同样默契</br>是多么不容易</br>你懂得我的固执</br>我懂你脾气</br>两颗心在靠近</br>等不及解释我的心情</br>怕错过爱上你的时机</br>浪漫已经 准备就绪</br>全新的旅行</br>多幸运</br>在最美的年纪</br>遇见你</br>没有遗憾和可惜</br>抱紧你</br>用尽全部力气</br>不让幸福逃离</br>多幸运</br>爱你这件事情</br>成为我</br>今生最对的决定</br>我相信</br>你就是那唯一</br>愿陪你到底</br>多幸运 遇见了你</br>多幸运 爱上了你</br>多幸运 能在一起</br>多幸运 遇见了你</br>多幸运 爱上了你</br>多幸运 能在一起'
	},{
		name: '走在冷风中',
		author: '周二珂',
		src: 'music/二珂 - 走在冷风中.mp3',
		img:'../img/zhou.jpg',
		word:'我以为留下来没有错<br/>	我以为<br/>努力过你会懂<br/>怎么连落叶<br/>都在嘲笑我<br/>要假装坚强的走<br/>行走在冬夜的冷风中<br/>	飘散的<br/>踩碎的<br/>都是梦<br/>	孤单单这一刻<br/>如何<br/>确定你曾爱过我<br/>停留在冬夜的冷风中<br/>	'
	},{
		name: '年轮',
		author: '张碧晨',
		src: 'music/张碧晨 - 年轮.mp3',
		img:'../img/zhang.png',
		word:'圆圈勾勒成指纹<br/>印在我的嘴唇<br/>回忆苦涩的吻痕<br/>是树根<br/>春去秋来的茂盛<br/>却遮住了黄昏<br/>寒夜剩我一个人<br/>等清晨<br/>世间最毒的仇恨<br/>是有缘却无分<br/>可惜你从未心疼<br/>我的笨<br/>荒草丛生的青春<br/>倒也过的安稳<br/>代替你陪着我的<br/>是年轮<br/>数着一圈圈年轮<br/>我认真<br/>将心事都封存<br/>密密麻麻是我的自尊<br/>修改一次次离分<br/>'
	}];
	
	function render() {
		$('#lists').empty();
		$.each(music, function(index, val) {
			var ct = (index == currentindex) ? 'active' : '';
			$('<li class="' + ct + '"><span>' + val.name + '</span><span></span></li>').appendTo('#lists');
		})
	}
	$('#lists').on('click','li', function() {
		lists.css('display','none')
		$('#lists').find('li').removeClass('active');
		$(this).addClass('active');
		currentindex = $(this).index();
		console.log(currentindex)
		audio.src = music[currentindex].src;
		$('#topic').html(music[currentindex].name);
		console.log(music[currentindex].img);
//		$('#yuan').css('background','url(music[currentindex].img)')
		$('#word p').html(music[currentindex].word)
		console.log($('#word p').html())
		return false;
	})
	render();
	/////////////////////////////////////////
	$('#last').on('click', function() {
		$('#lists').find('li').removeClass('active');
		currentindex=currentindex - 1;
		if(currentindex<0){
			currentindex=music.length-1
		}
		$('#lists li').eq(currentindex).addClass('active');
		audio.src = music[currentindex].src;
		$('#topic').html(music[currentindex].name);
		$('#word p').html(music[currentindex].word);
		audio.play();
	})
	$('#next').on('click', function() {
		$('#lists').find('li').removeClass('active');
		currentindex=currentindex + 1;
		if(currentindex>=music.length){
			currentindex=0;
		}
		$('#lists li').eq(currentindex).addClass('active');
		audio.src = music[currentindex].src;
		$('#topic').html(music[currentindex].name);
		$('#word p').html(music[currentindex].word)
		audio.play();
	})
	//列表弹框////////////////////////////////
	back.on('click',function(){
		lists.css('display','block')
	})
	//时间转换封装////////////////////////////////
	function format(v) {
		var time = Math.floor(v);
		var m = Math.floor(time / 60);
		var s = time % 60;
		s = (s < 10) ? ('0' + s) : s;
		return m + ':' + s;
	}
	///////播放///////////////////////////////////////////
	var play=$('#play');
	play.on('click', function() {
		if (audio.paused) {//是否处于暂停状态，(属性：auto.paused)			
			audio.play();
			play.html('&#xe713;');
		} else {
			audio.pause();
			play.html('&#xe671;');
		}
	})
	//时间进度监听事件//////////////////////////////////////
	pi.on('click', false);
	process.on('click', function(e) {
		audio.currentTime = e.offsetX / width * audio.duration;
	})
	vi.on('click', false);/////////////////////////////////////
	//音乐盒子的点击事件（音量的最大值1，一般为小数）
	voice_box.on('click', function(e) {
		audio.volume = 1-(e.offsetY / voice_box.height());
		vi.css('top', voice_box.height()-e.offsetY + vi.height() / 2);
		voice.removeAttr('data');
	})
	voice.on('click', function() {
		voice_box.css('display','block');
		if ($(this).hasClass('data')) {
			audio.volume = $(this).attr('data');
			$(this).removeAttr('data');
		} else {
			$(this).attr('data', audio.volume);
			audio.volume = 0;
		}
	})
	/////////////////////////////////////////////////
//	vi.on('mousedown', function(e) {
//		var r = vi.width() / 2;
//		var start = r - e.offsetX;
//		$(document).on('mousemove', function(e) {
//			var end = e.offsetX;
//			var left = end - voice.position().left + start;
//			//			vi.css('left',left);
//			var v = left / voice.width();
//			if (v > 1 || v < 0) {
//				return;
//			}
//			audio.volume = v;
//		})
//		return false;
//	})
//	$(document).on('mouseup', function() {
//		$(document).off('mousemove');
//	})
/////////////////////////////////////////////////////////////////////////
//	pi.on('touchstart', function(e) {
//		var r = pi.width() / 2;
//		console.log(r)
//		var start = r - e.offsetX;
//		console.log(e.offsetX)
//		$(document).on('touchmove', function(e) {
//			var end = e.offsetX;
////			console.log(e.offsetX)
//			var left = end - voice_box.position().left + start;
////			console.log(left)
//			pi.css('left',left)
//			var c = left / process.width() * audio.duration;
//			if (c >= audio.duration || c < 0) {
//				return;
//			}
////			audio.currentTime = c;
//		})
//
//		return false;
//	})
//	$(document).on('touchend', function() {
//		$(document).off('touchmove');
//	})


	//事件//////////////////////////////////////////////////////
	$('audio').on('loadstart',function(){
		
	})
	$('audio').on('progress',function(){
		
	})
	$('audio').on('canplay',function(){
		audio.play();
		duration.html(format(audio.duration)); //总时间的添加（innerHTML）
	})
	$('audio').on('timeupdate',function(){
		//当下时间变化（innerHTML）
		start_time.html(format(audio.currentTime));
		//进度条的控制
		var left = width * audio.currentTime / audio.duration;
		pi.css('left', left);
	})
	$('audio').on('volumechange',function(){
		vi.css('top', voice_box.height() * (1-audio.volume) - vi.height() / 2);
	})
	$('audio').on('paly',function(){
		
	})
	$('audio').on('pause',function(){
		
	})
	$('audio').on('ended',function(){
		$('#lists').find('li').removeClass('active');
		currentindex=currentindex + 1;
		if(currentindex>music.length){
			currentindex=0;
		}
		$('#lists li').eq(currentindex).addClass('active');
		audio.src = music[currentindex].src;
		audio.play();
	})
	
	
	
	
	
})

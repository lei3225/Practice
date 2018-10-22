require(['jquery','ajax','move','public','search','index','floor','shop'],function($,ajax,move,public,search,index,floor,shop){
	search.init({
		search:'.search',
		btn:'.btn',
		ts:'.ts',
		ts2:'.ts2',
		url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
	});
	index.init({
		ej:'.ej',
		dj:'.dj',
		xb:'.xb',
	})
	floor.init({
		f1:".f1",
		f2:".f2",
		floor:'#floor',
		html:'html',
	})
	shop.init({
		oul3:'#box3 ul',
		oli3:'#box3 ul li',
		rexiao:'.rexiao'
	});
})
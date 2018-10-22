require(['jquery','ajax','search','index','goods','floor'],function($,ajax,search,index,goods,floor){
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
	goods.init({
		xiala:".xiala",
		search2:".search2",
		label:'.label',
		nr:".nr",
	})
	floor.init({
		f1:".f1",
		f2:".f2",
		floor:'#floor',
		html:'html',
	})
})
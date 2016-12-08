$(function(){
	
	
	
	//js自动读取指定的json形式的数据
	var data ={};
	function initAreaData(){
		var dataroot="./data/index.json";
		//获取json数据
		$.getJSON(dataroot, function(data){
			data=data.data;
			var a_html="";
			//拼接菜单
			$.each(data, function(i,d) {
				a_html+="<a href='#' click='showDetail("+d.detail+")'"+
					"title='"+d.title+"' class='list-group-item' >"+d.name+"</a>";
			});
			 $(".list-group").append(a_html);
		});
	}
	initAreaData();
	//显示详情
	function showDetail(data){
		$(".main").html(data);
	}
	
	
	//点击中间右边的导航栏时的动作
	$(".list-group-item").click(function(){
		$(this).addClass("active").siblings().removeClass("active");	
	});
});
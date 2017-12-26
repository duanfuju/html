/*
 * 	    author：		 段福举
 *  createdate：		2016-12-09
 * description：		尝试实现JavaScript对象封装
 * 
*/
var nodeList;
//创建对象
function Lolita(){}

//设置对象的属性以及方法
Lolita.prototype={
	init:function(){
		this.addMusicPlayer();//增加音乐播放器的html代码片段
		//初始化方法
		this.render();
	},
	render:function(){
		
		this.initLeftDataTree();//右侧树
		this.hiddenEvent();//浮动隐藏
		this.btnGroup();//按钮点击事件 
		
		this.dynamicLoadScript("js/audio.js");//动态加载音乐插件js
	},
	addMusicPlayer:function(){
		var html=" 	<div class='musicTitle'>  "+
                " 	      	 正在播放: <strong id='rmusic'></strong>  "+
		        " 	    </div>  "+
				" 		<![if !IE]>"+
				" 			<audio  autoplay='autoplay' controls='controls' id='audio'>"+
				" 			</audio>"+
				" 		<![endif]>"+
				" 		<div class='btn-group'>  "+
		        " 	        <button type='button' class='btn btn-primary dropdown-toggle' data-toggle='dropdown'>播放模式 <span class='caret'></span></button>"+
		        " 	        <ul class='dropdown-menu' role='menu'>"+
		        " 	            <li>"+
		        " 	                <a href='#' id='btn-loop'>"+
		        " 	                    	单曲循环"+
		        " 	                </a>"+
		        " 	            </li>"+
		        " 	            <li>"+
		        " 	                <a href='#' id='btn-order'>"+
		        " 	                   	          顺序播放"+
		        " 	                </a>"+
		        " 	            </li>"+
		        " 	            <li>"+
		        " 	                 <a href='#' id='btn-random'>"+
		        " 	                    	随机播放"+
		        " 	                </a>"+
		        " 	            </li>"+
		        " 	        </ul>"+
		        " 	       </div>"+
		        " 	        <button id='btn-pre' class='btn btn-success'>上一首 </button>"+
		        " 	        <button id='btn-next' class='btn btn-success'>下一首 </button>"+
		        " 	        <ol id='m-list'>  "+
		        " 	        </ol>  ";
		        $("#musicDiv").append(html);
	},
	hiddenEvent:function(){
		$(".main").hover(function(){
			$("#timg").css("display","block");
		},function(){
			$("#timg").css("display","none");
		});
	},
	jsonArrayMerge:function(array1,array2){
		$.each(array2, function(i,data) {
			array1.push(data);
		});
		return array1;
	},
	btnGroup:function(){
		
		//点击放大
		$("#timg").on("click",function(){
			window.open($(".container .main iframe").attr("src"));
		});
		
		$("#sideToggle").click();//隐藏音乐播放器
		$("#m-list li a:eq(0)").click();//自动播放第一首歌曲
		$('#btn-order').click();//按顺序播放
		//标题过长，浮动显示信息
		$(".musicTitle").hover(function(){
			$(this).attr("title",$("#rmusic").html());
		});
	},
	initLeftDataTree:function(){
		var curMenu = null, zTree_Menu = null;
    	var setting = {
    		    data:{
    		        simpleData:{
    		            enable: true,
    		            idKey: "id",
    		            pIdKey: "pId",
    		            rootPId: 0
    		        }
    		    },
	          view: {
				 showLine: false,
				 showIcon: false,
				 fontCss: getFontCss,
				 addDiyDom: addDiyDom
	          },
 			 data: {
				 simpleData: {
				 	enable: true
				 }
			 },
			 callback: {
				beforeClick: beforeClick,
				onClick: zTreeOnClick
			 }
    		};
    	//给搜索的项增加颜色
		function getFontCss(treeId, treeNode) {  
	        return (!!treeNode.highlight) ? {"color":"red", "font-weight":"bold"} : {"color":"cornflowerblue", "font-weight":"normal"};  
	    }
		//树节点的点击事件
    	function zTreeOnClick(event, treeId, treeNode,clickFlag){
    		setRightDivText(treeNode);
    	}
    	//树节点的点击事件（查看节点的详情）
    	function setRightDivText(treeNode){
			$(".main iframe").attr("src",treeNode.detail);
    	}
    	function addDiyDom(treeId, treeNode) {
			var spaceWidth = 5;
			var switchObj = $("#" + treeNode.tId + "_switch"),
			icoObj = $("#" + treeNode.tId + "_ico");
			switchObj.remove();
			icoObj.before(switchObj);

			if (treeNode.level > 1) {
				var spaceStr = "<span style='display: inline-;width:" + (spaceWidth * treeNode.level)+ "px'></span>";
				switchObj.before(spaceStr);
			}
		}
		function beforeClick(treeId, treeNode) {
			//过滤根节点（不包括火焰风暴）
			if(treeNode.name=="FireStorm"){
				return true;
			}
			if (treeNode.level == 0 ) {
				var zTree = $.fn.zTree.getZTreeObj("leftTree");
				zTree.expandNode(treeNode, true, false);
				return false;
			}
			
			return true;
		}
		//获取json数据
		$.ajaxSettings.async = false;//ajax数据改成同步的
		var treeData=[];
		$.getJSON("./data/index.json", function(data){treeData=data.zNodes;});
		$.getJSON("./data/JavaScript.json", function(data){treeData=Lolita.prototype.jsonArrayMerge(treeData,data);})
		$.getJSON("./data/Tools.json", function(data){treeData=Lolita.prototype.jsonArrayMerge(treeData,data);})
		$.getJSON("./data/JavaScriptSpecialEffects.json", function(data){treeData=Lolita.prototype.jsonArrayMerge(treeData,data);})
		$.getJSON("./data/EclipseSet.json", function(data){treeData=Lolita.prototype.jsonArrayMerge(treeData,data);})
		$.getJSON("./data/StudySummary.json", function(data){treeData=Lolita.prototype.jsonArrayMerge(treeData,data);})
		$.getJSON("./data/DataBase.json", function(data){treeData=Lolita.prototype.jsonArrayMerge(treeData,data);})
		$.getJSON("./data/Java.json", function(data){treeData=Lolita.prototype.jsonArrayMerge(treeData,data);})
		$.ajaxSettings.async = true;//ajax数据改成异步的
		
		//将组合的数据添加到树形结构中
		var treeObj =$("#leftTree");
		$.fn.zTree.init(treeObj, setting, treeData);
		treeObj.hover(function () {
			if (!treeObj.hasClass("showIcon")) {
				treeObj.addClass("showIcon");
			}
		}, function() {
			treeObj.removeClass("showIcon");
		});
		
		
		
		//查询树形结构
		$("#searchNodes").keydown(function(event) {    
            if (event.keyCode == 13) {    
              getTreeByName("leftTree","searchNodes");
            }    
        });    
        
		//列表选项卡的树
		function getTreeByName(treeId,textId) {
		    var zTree = $.fn.zTree.getZTreeObj(treeId);
		    var value = $.trim($("#"+textId).val());
		    if(value.length>0){
		        if(nodeList){
		            updateNodes(false,false,treeId);
		        }
		        nodeList = zTree.getNodesByParamFuzzy("name", value);
		        updateNodes(true,true,treeId);
		    }
		}
		//更新高亮显示
		function updateNodes(highlight,expand,treeId) {
		    var zTree = $.fn.zTree.getZTreeObj(treeId);
		    $.each(nodeList,function(index,node){
		        node.highlight = highlight;
		        zTree.updateNode(node);
		        zTree.expandNode(node.getParentNode(),expand);
		    });
		}
	},
	dynamicLoadScript:function (url, callback){
	    var script = document.createElement ("script")
	    script.type = "text/javascript";
	    if (script.readyState){
	        script.onreadystatechange = function(){
	            if (script.readyState == "loaded" || script.readyState == "complete"){
	                script.onreadystatechange = null;
	                callback();
	            }
	        };
	    } else {
	        script.onload = function(){
	            callback();
	        };
	    }
	    script.src = url;
	    document.getElementsByTagName("head")[0].appendChild(script);
	}
		
};





$(function(){
	var lolita = new Lolita();
	lolita.init();
});
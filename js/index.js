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
		//初始化方法
		this.render();
	},
	render:function(){
		this.initLeftDataTree();//右侧树
		
	},
	btnGroup:function(){
		$("#sideToggle").click();
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
			$(".main").html( treeNode.detail);
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
			if (treeNode.level == 0 ) {
				//过滤根节点（不包括火焰风暴）
				if(treeNode.name=="FireStorm"){
					return true;
				}
				var zTree = $.fn.zTree.getZTreeObj("leftTree");
				zTree.expandNode(treeNode);
				return false;
			}
			return true;
		}
		
		//获取json数据
		$.getJSON("./data/index.json", function(data){
			var treeObj =$("#leftTree");
			$.fn.zTree.init(treeObj, setting, data.zNodes);
			treeObj.hover(function () {
				if (!treeObj.hasClass("showIcon")) {
					treeObj.addClass("showIcon");
				}
			}, function() {
				treeObj.removeClass("showIcon");
			});
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
	}
	
		
};





$(function(){
	var lolita = new Lolita();
	lolita.init();
});
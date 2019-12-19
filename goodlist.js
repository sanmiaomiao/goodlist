!function(t,e){
	"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("GoodList",[],e):t.GoodList=e()
}(this,function(){
	'use strict' //严格模式 ES5提出
	//模块代码的公用工具类
	function isObj(obj){
		return typeof obj==='object' && obj!==null
	}
	function isArray(arr){
		return arr.constructor===Array;
	}
	
	
	return function(obj){ //构造函数 类
		
		if(!isObj(obj)|| isArray(obj)){
			//console.log('数据类型错误')
			throw new Error('数据类型错误')
		}
		
		var el=obj.el;
		var list=obj.data;
		var starUrl=obj.starUrl;
		var itemcallback=obj.itemcallback;
		var starcallback=obj.starcallback;
		//console.log(list)
		var ListParentNode=document.querySelector(el)  //列表父级节点
		//创建包裹div
		var ListNode=document.createElement('div');
		ListNode.className="goods";
		ListParentNode.appendChild(ListNode);
		list.forEach(function(item){
			var goodItem=document.createElement('div')//创建<div class="goods-item" @click="itemClick">
			goodItem.className='goods-item';
			ListNode.appendChild(goodItem);
			//给goodItem绑定事件
			goodItem.onclick=function(){
				itemcallback(item.iid)
			}
			
			var goodImg=document.createElement('img') //创建 <img :src="goodsItem.show.img" alt="" >
			goodImg.setAttribute('src',item.img)
			goodImg.setAttribute('alt','')
			goodItem.appendChild(goodImg);
			var goodInfo=document.createElement('div') //创建  <div class="goods-info" >
			goodInfo.className='goods-info';
			goodItem.appendChild(goodInfo);
			var itemTitle=document.createElement('p');//创建<p>{{goodsItem.title}}</p>
			itemTitle.innerHTML=item.title;
			goodInfo.appendChild(itemTitle);
			var itemPrice=document.createElement('span');//创建 <span class="price">{{goodsItem.price}}</span>
			itemPrice.className='price';
			itemPrice.innerHTML=item.price;
			goodInfo.appendChild(itemPrice);
			var itemCfav=document.createElement('span');//创建  <span class="collect">{{goodsItem.cfav}}</span>
			itemCfav.className="collect";
			itemCfav.innerHTML=item.cfav;
			goodInfo.appendChild(itemCfav)
			var cfavstar=document.createElement('img')
			cfavstar.className='star';
			cfavstar.setAttribute('src',starUrl)
			goodInfo.appendChild(cfavstar)
			//给goodItem绑定事件
			cfavstar.onclick=function(){
				starcallback(item.cfav)
			}
		})
		
		
	
		
	}
})
function lunbo(){
	var banner = document.getElementsByClassName('banner')[0];
	var elem = banner.getElementsByClassName('banner-a');
	var index = 0;
	elem[0].style.display = 'block';
	function haHa(){
		
	}
	setInterval(function(){
		index++;
		if(index > elem.length-1){
			index = 0;
		}
		for(var i = 0; i < elem.length; i++){
			elem[i].style.display = 'none';
		}
		elem[index].style.display = 'block';
		
	},1000);
}
window.onload = function(){
	lunbo();
}
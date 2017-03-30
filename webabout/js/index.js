// console,log($("#tell"))
// $(function(){
//     $('#dowebok').fullpage({
//         'navigation': true,
//         navigationTooltips:['首页','视觉','交互','皮肤','功能','代办邮箱','联系人邮箱','科技','联系一心','马上体验']
//     });
//
// });
var xmBgul=document.querySelector(".xm_bgul");
var xmA=document.querySelectorAll(".xm_a");
var xmBglist=document.querySelectorAll(".xm_bglist");
var xmBglistWid=xmBglist[0].offsetWidth;
console.log(xmBgul)
for (var i=0;i<xmA.length;i++){
    xmA[i].index=i;
    xmA[i].onclick=function () {
        xmBgul.style.transform="translate3d("+this.index*-50+"%,0,0)";
        for (var j=0;j<xmA.length;j++){
            xmA[j].classList.remove('xm_active')
        }
        xmA[this.index].classList.add('xm_active')
    }

}

//mask
var mask=document.querySelector(".mask");
var xmAA=document.querySelectorAll(".xm_aa");
var rwmbox=document.querySelectorAll(".rwmbox")
console.log(rwmbox)
var Llqw=document.documentElement.clientHeight;
mask.height=Llqw;
	
for (var i=0;i<xmAA.length;i++){
	xmAA[i].index=i;
	xmAA[i].onclick=function(){
		mask.style.left="0"
		rwmbox[this.index].style.opacity='1'
	}

}

mask.onclick=function(){
	mask.style.left="-100%"
	for (var j=0;j<rwmbox.length;j++){
		rwmbox[j].style.opacity='0'
	}
}

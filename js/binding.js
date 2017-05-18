/*弹窗*/
/*$(function(){	
	$("#btn5").click(function(){
		var txt=  "恭喜您获得10M粮饷（流量），此时战斗力飙升，快参与淘宝大作战！";
		window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.success);
	});
	$("#btn4").click(function(){
		var txt=  "您好，您输入的手机号码不正确，请重新输入！";
		window.wxc.xcConfirm(txt, window.wxc.xcConfirm.typeEnum.error);
	});
});*/

//我的资料页
/*$(document).ready(function(){
        $(".total_list .total_list_record").click(function(){
        $(".total_list .total_list_record").eq($(this).index()).addClass("underline").siblings().removeClass('underline');
        $(".data_content").hide().eq($(this).index()).show();
       //另一种方法: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on'); 

        });
    });

//签到地图页
$(function(){	
	$('#signbtn').click(function(){
		$('#signbtn').text('已签到');
		$('#map').attr('src','images/Sign_map1.jpg');
	});
});*/
$(document).ready(function(){
	$('#newturnplate_btn1').click(function(){
		$('.newturnplate_bg,.newturnplate_rule').show();
	});
	$('#binding_btn').click(function(){
		$('.newturnplate_bg,.newturnplate_rule').hide();
	});
});

$(function(){	
	$('.share').click(function(){
		$('.newturnplate_share').show();
		$('.newturnplate_bg').show();
	});
	$('.newturnplate_share').click(function(){
		$('.newturnplate_share').hide();
		$('.newturnplate_bg').hide();
	});
});


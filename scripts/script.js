$(document).ready(function(){
	$(function(){
	alert('Подключена последняя версия jQuery через Google хостинг');
	});
 // создание массива тегов
            var word_list = [
                {text:"родинки", weight:13, link:{href:"#post1"}},
                {text:"узоры", weight:10.5, link:{href:"#post2"}},
                {text:"линия сердца", weight:9.4},
                {text:"род", weight:8},
                {text:"родин", weight:6.2},
                {text:"родинк", weight:5},
                {text:"родин", weight:5},
                {text:"родин", weight:5},
                {text:"родин", weight:5}
            ];
            $(function () {
                $("#tags").jQCloud(word_list);
            });
          //  alert( $("#blog_page").css('height'));
          //  alert(getComputedStyle(blog_page).height);
          // $('#tags').css({height: $("#blog_page").css('height')});
             $('#tags').css({height: '1671px'});

			
	$(".entry_content").hide();
	$('<span class="readmore_collapse">Read more..</span>').insertAfter(".first_p");
	 
	  $(".readmore_collapse").hover(function(){
	     $(this).addClass('readHover')},
	     function(){
		$(this).removeClass('readHover');  
	  });
	 $('.readmore_collapse').click(function(){
	 $(this).next().toggle();
	 if($(this).next().is(':visible')){
		$(this).text('Collapse')	 
	 }else{$(this).text('Read more..')}
	 });
	 $('#tags') 
	      	
	
});

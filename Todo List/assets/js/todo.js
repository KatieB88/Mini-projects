// $("li").click(function(){
// 	if($(this).css("color") === "rgb(0, 0, 0)"){ //can't use "black", it treats it as an rgb even if you've called it black, so you have to set it equal to the rgb value!!
// 	$(this).css({
// 		color: "grey",
// 		textDecoration: "line-through"
// 	});
// }
// else{
// 	$(this).css({
// 		color: "black",
// 		textDecoration: "none"
// 	});
// }
// });

//AN ALTERNATIVE!

$("ul").on("click", "li", function(){  //need .on rather than .click for this to be applied to new lis added to the page by the user- and to change to what I have here, selecting the ul and then adding li after the click
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(300, function(){
		$(this).remove();
	});
	event.stopPropagation(); //this is a jQuery method that will stop the li click event listener from firing!
});

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val(); //val is the value of the input, ie. what you've put in
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText +"</li>");
	}
});





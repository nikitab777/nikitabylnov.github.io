var StockIndex = 1, CarBrand;


function LeafAction(LeafSide)
{
	if (LeafSide == "right") StockIndex++;
	else if (LeafSide == "left") StockIndex--;
	
	if (StockIndex > 3) StockIndex = 0;
	if (StockIndex < 0) StockIndex = 3;
	
	$('.StockImage').remove();
	
	switch (StockIndex)
	{
		case 0:
			$('#StockBox').append('<img src="images/Stock1.png" width=60% height=90% class="StockImage">');
		break;
		case 1:
			$('#StockBox').append('<img src="images/Stock2.png" width=60% height=90% class="StockImage">');
		break;
		case 2:
			$('#StockBox').append('<img src="images/Stock3.png" width=60% height=90% class="StockImage">');
		break;
		case 3:
			$('#StockBox').append('<img src="images/Stock4.png" width=60% height=90% class="StockImage">');
		break;
	}
}

function CarModel_Click(CarBrand)
{
	if (CarBrand == "Ford") $('#Base2').append('<p>dlldlsldlfmrkskfmk</p>');
	else if (CarBrand == "Daewoo") $('#Base2').append('<p>dlldls,ldlfmrks;kfmk</p>');
	else if (CarBrand == "Mazda") $('#Base2').append('<p>dlldls,ldlfmrks;kfmk</p>');
	else if (CarBrand == "Chevrolet") $('#Base2').append('<p>dlldls,ldlfmrks;kfmk</p>');
	else if (CarBrand == "Kia") $('#Base2').append('<p>dlldls,ldlfmrks;kfmk</p>');
	else if (CarBrand == "Hyundai") $('#Base2').append('<p>dlldls,ldlfmrks;kfmk</p>');
}

/*$(document).click(function(event){
	if ($(event.target).closest("#testDiv").length) return;
	$(".list").slideUp("slow");
	event.stopPropagation();
	kol = 0;
});

var kol = 0;


function Click()
{
	kol++;
	if (kol <= 1) $('#testDiv').append('<div class="list"><ul><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li></ul></div>');
}*/



$('document').ready(function() {
	LeafAction('left');
	
	//$('#Base2').append('<p>dlldlsldlfmrkskfmk</p>');
	
	
	
	/*var w = screen.availWidth, h = window.innerHeight;
	var em = w / 90;
	
	$("h1").css({
		"font-size":em * 1.8 + "px"
	});
	
	$("p").css({
		"font-size":em + "px"
	});
	
	var ElementsArr = document.getElementsByClassName("EmblemScript");
	
	for (i = 0; i < ElementsArr.length; i++)
	{
		$(ElementsArr[i]).css({
			"left":i * (w * 0.14) + "px"
		});
	}*/
	
	

	
});


//a.style.margin = '100px';

//a.style.width = "100px";

//$("#inform_h").css("color","red");






//$('.hide').click(function() {
	//$(this).siblings(".list").slideToggle("slow");
	//return false;
//});






$(document).ready(function(){

	//tizen.tvinputdevice.registerKey("Exit");

	// Adding class active to the first link

	$('.category_list .category_item[category="all"]').addClass('ct_item-active')


	

	// Filtering products

	$('.category_item').click(function(){

		var catProduct = $(this).attr('category');

		console.log(catProduct);

		

		// Adding class active to the selected link

		$('.category_item').removeClass('ct_item-active');

		$(this).addClass('ct_item-active');

		

		// Hide all products	

		$('.product-item').css('transform', 'scale(0)');

		function hideProduct(){

			$('.product-item').hide();

		} setTimeout(hideProduct,400);

		

		// Show selected products

		function showProduct(){

			$('.product-item[category="'+catProduct+'"]').show();

			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');

		} setTimeout(showProduct,400);



	});

	

	// Showing all the products

	$('.category_item[category="all"]').click(function(event){

		function showAll(){

			$('.product-item').show();

			$('.product-item').css('transform', 'scale(1)');

		} setTimeout(showAll,400);

			

	});

});
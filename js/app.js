//cart commande
document.getElementById("cart-info").addEventListener("click", function() {
    const cart = document.getElementById("cart");
    cart.classList.toggle("show-cart");
    console.log(cart);
});

//isotope filter
$(document).ready(function() {
    // init Isotope
    let $grid = $('.store-items').isotope({
        // options
    });
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function() {
        let filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });
    //images loaded
    $grid.imagesLoaded().progress(function() {
        $grid.isotope('layout');
    });
});
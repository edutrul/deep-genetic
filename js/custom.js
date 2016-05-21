// external js: isotope.pkgd.js
$( document ).ready(function() {

  $.ajax({
    url: "data.json",
    //force to handle it as text
    dataType: "text",
    success: function(data) {

        //data downloaded so we call parseJSON function 
        //and pass downloaded data
        var json = $.parseJSON(data);
        //now json variable contains data in json format
        //let's display a few items
        console.log(json);
        
        //$('#results').html('Plugin name: ' + json.name + '<br />Author: ' + json.author.name);
    }
  });


  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
  // filter functions

  // bind filter button click
  $('.deep-genetic-filters').on( 'click', 'a', function(event) {
    event.preventDefault();
    console.log('hello');
    var filterValue = $( this ).attr('data-filter');
    console.log(filterValue);
    // use filterFn if matches value
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.deep-genetic-filters').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'a', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
});
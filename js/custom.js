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
        jQuery.each(json, function(key, ganado) {
          console.log(ganado.nombre);
          console.log(ganado.calCarne);
          console.log(ganado.calLeche);
          console.log(ganado.genoTipo);
          var tipo = 'vaca';
          var tipo_color = 'red';
           
          if (ganado.sexo == 0) {
            
          }
          else {
            
          }
          console.log(ganado.sexo);
        });

        $('grid').append('<div class="element-item col-md-4 vacas">'+
                  '<figure class="snip1174 red col-md-4">' +
                  '<img src="images/vaca.jpg" alt="vaca" />' +
                  '  <figcaption>' +
                      '<h2 class="nombre">Alicia TT</h2>'+
                      '<br>' +
                      '<span class="genotipo">Genotipo: g6egh0eb</span><br>' +
                      '<span class="calCarne">Cal. Carne: 0.492774145202</span><br>' +
                      '<span class="calLeche">Cal. Leche: 0.680657017953</span><br>' +
                      '<a href="/simular.html">Simular</a>' +
                    '</figcaption>'+
                  '</figure>'+
              '</div>');
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
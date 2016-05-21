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
        var contador = 0;
        jQuery.each(json, function(key, ganado) {
          ganado.tipo = 'vaca';
          ganado.tipo_color = 'red';
          contador++;
          if (contador == 20) {
            return false;
          }
          if (ganado.sexo == 1) {
            ganado.tipo = 'toro';
            ganado.tipo_color = 'navy';
          }
          

          newItem = ('<div class="element-item col-md-4 ' + ganado.tipo +'">'+
                    '<figure class="snip1174 ' + ganado.tipo_color + ' col-md-4">' +
                    '<img src="images/' + ganado.tipo + '.jpg" alt="' + ganado.tipo + '" />' +
                    '  <figcaption>' +
                        '<h2 class="nombre">' + ganado.nombre + '</h2>'+
                        '<br>' +
                        '<span class="genotipo">Genotipo: ' + ganado.genotipo + '</span><br>' +
                        '<span class="calCarne">Cal. Carne:' + ganado.calCarne + '</span><br>' +
                        '<span class="calLeche">Cal. Leche: ' + ganado.calLeche + '</span><br>' +
                        '<a href="/simular.html">Simular</a>' +
                      '</figcaption>'+
                    '</figure>'+
                '</div>');
          $('.grid').append(newItem);
        });
                    // init Isotope
      $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
      });
        //$('#results').html('Plugin name: ' + json.name + '<br />Author: ' + json.author.name);
    }
  });



  // filter functions

  // bind filter button click
  $('.deep-genetic-filters').on( 'click', 'a', function(event) {
    event.preventDefault();
    console.log('hello');
    var filterValue = $( this ).attr('data-filter');
    console.log(filterValue);
    // use filterFn if matches value
    $('.grid').isotope({ filter: filterValue });
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
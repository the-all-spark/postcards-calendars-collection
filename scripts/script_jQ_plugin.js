$(function() {
      let $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
            getSortData: {
                  country: '[data-country]',
                  theme: '[data-theme]',
                  orientation: '[data-orientation]'
            }
      });

      // sort items on button click
      $('.sort-by-button-group').on( 'click',  function() {
            let sortByValue = $(this).attr('data-sort-by');
            console.log(sortByValue);
            $grid.isotope({ sortBy: sortByValue });
      });

      // change is-checked class on buttons
      $('.button-group').each( function( i, buttonGroup ) {
            let $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
                  $buttonGroup.find('.is-checked').removeClass('is-checked');
                  $( this ).addClass('is-checked');
            });
      });

      // multi filter items on button click
      let filters = {};
      $('.filter-button-group').on( 'click', function() {
            let $this = $(this);

            // get group key
            let $buttonGroup = $this.parents('.button-group');
            let filterGroup = $buttonGroup.attr('data-filter-group');

            // set filter for group
            filters[filterGroup] = $this.attr('data-filter');
            
            // combine filters
            let filterValue = concatValues(filters);
            $grid.isotope({ filter: filterValue });
            console.log(filterValue);
      });
      // flatten object by concatting values
      function concatValues(obj) {
            let value = '';
            for ( let prop in obj ) {
                  value += obj[prop];
            }
            return value;
      }     
})
  (function(document){

    switchArrow('dietary-id', 'dietary-arrow-id');
    switchArrow('time-id', 'time-arrow-id');
    switchArrow('sortby-id', 'sortby-arrow-id');
    switchArrow('ingredient-id', 'ingredient-arrow-id');
    switchArrow('type-id', 'type-arrow-id');
    recipeFilters('fifteen-or-less');
    recipeFilters('thirty-or-less');
    recipeFilters('one-hour-or-less');

    var $filterCheckboxes = $('input[type="checkbox"]');
    var filterFunc = function() {

      var selectedFilters = {};

      $filterCheckboxes.filter(':checked').each(function() {

        if (!selectedFilters.hasOwnProperty(this.name)) {
          selectedFilters[this.name] = [];
        }

        selectedFilters[this.name].push(this.value);
      });

      // create a collection containing all of the filterable elements
      var $filteredResults = $('.inputGroupSmall');

      // loop over the selected filter name -> (array) values pairs
      $.each(selectedFilters, function(name, filterValues) {

        // filter each .animal element
        $filteredResults = $filteredResults.filter(function() {

          var matched = false,
            currentFilterValues = $(this).data('category').split(' ');

          // loop over each category value in the current .animal's data-category
          $.each(currentFilterValues, function(_, currentFilterValue) {

            // if the current category exists in the selected filters array
            // set matched to true, and stop looping. as we're ORing in each
            // set of filters, we only need to match once

            if ($.inArray(currentFilterValue, filterValues) != -1) {
              matched = true;
              return false;
            }
          });

          // if matched is true the current .animal element is returned
          return matched;

        });
      });

      $('.inputGroupSmall').hide().filter($filteredResults).show();
    }

    $filterCheckboxes.on('change', filterFunc);

  })(document);

  function switchArrow(typeId, arrowId) {

    var div = document.getElementById(typeId);
    var icon = document.getElementById(arrowId);

    var open = false;

    div.addEventListener('click', function(){
      if(open){
        icon.className = 'octicon octicon-chevron-down';
      } else{
        icon.className = 'octicon octicon-chevron-up';
      }
      open = !open;
    });

  }

  function recipeFilters(elementId) {
    var x = document.getElementById(elementId);
    var isClicked = false;

    x.addEventListener('click', function(){
      if(!isClicked){
        x.className = 'time-selection-id';
      } else {
        x.className = elementId;
      }
      isClicked = !isClicked;
    });
  }

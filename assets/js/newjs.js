$(document).ready(function(){


  // init Isotope
var $grid = $('.grid').isotope({
  // options
  itemSelector: '.abcd'

});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
  $(".button-group a.button").on("click", function() {
    $(".button-group a.button").removeClass("active");
    $(this).addClass("active");
  });

});

function filter(tag) {
  setActiveTag(tag);
  showContainer(tag);
}

function setActiveTag(tag) {
  // loop through all items and remove active class
  var items = document.getElementsByClassName('blog-tag-item');
  for(var i=0; i < items.length; i++) {
    items[i].setAttribute('class', 'blog-tag-item');
  }

  // set the selected tag's item to active
  var item = document.getElementById(tag + '-item');
  if(item) {
    item.setAttribute('class', 'blog-tag-item active');
  }
}

function showContainer(tag) {
  // loop through all lists and hide them
  var lists = document.getElementsByClassName('blog-list-container');
  for(var i=0; i < lists.length; i++) {
    lists[i].setAttribute('class', 'blog-list-container hidden');
  }

  // remove the hidden class from the list corresponding to the selected tag
  var list = document.getElementById(tag + '-container');
  if(list) {
    list.setAttribute('class', 'blog-list-container');
  }

function select()
{
    $('#aptresults div').hide();

    var $div=$('#aptresults div');
    var check=false;
    var filter = [];
    $('input[type="checkbox"]:checked').each(function(){
            var css=$(this).val();
            //$div=$div.filter('.'+css);
            filter.push('.'+css);

        //check=true;
    })

    $div.filter(filter.join(',')).show();

    //if(check==true || check==false) $div.show();
}

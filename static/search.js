document.addEventListener('DOMContentLoaded',()=>{
  const searchIcon = document.querySelector('#searchIcon');
  const searchInput = document.querySelector('#searchbox');
  searchIcon.addEventListener('mouseover',()=> {
    searchInput.style.width = '500px';
    searchInput.style.transition = '3s';
    searchInput.style.background = '#B4CDFA';
    searchInput.style.caretColor = "#598DEF";
    searchInput.style.borderBottom="2px solid #598DEF";
  });


  searchInput.addEventListener('keyup',function(e) {
    if (e.code === 'Enter'){

      if (searchInput.value.length > 0){
        const val = searchInput.value;
        document.querySelector('#searchContents').innerHTML = 'Search for '+val;
        searchInput.value = "";

          $.ajaxPrefilter( function (options) {
          if (options.crossDomain && jQuery.support.cors) {
            var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
          }
        });
        $.get(
            'https://www.google.com/search?q='+val,
            function (response) {
                console.log("> ", response);
                $("#searchResults").html(response);
        });
      }
    };
  });
});

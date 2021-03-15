    $(document).ready(function() {
    if ($('#footer-post').length == 1) 
      {
        $('#footer-post a').prop('href', 'http://synaxipalaiochoriou.blogspot.gr/').prop('class', 'footer-3').text('Σύναξη Νέων Παλαιοχωρίου');
      }
      if ($('#footer-post').length >= 1 && $('a.footer-3').length == 0) { 
        $('<a>', {
          class: 'footer-3',
          text: 'Σύναξη Νέων Παλαιοχωρίου',
          href: 'http://synaxipalaiochoriou.blogspot.gr/',
        }).appendTo('#footer-post');
      }

      if ($('#footer-post').length == 0 && $('a.footer-3').length == 0) { 
        alert('Link has been erased')
        window.location.href="http://synaxipalaiochoriou.blogspot.gr/";
      }
    });

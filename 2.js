    $(document).ready(function() {
    if ($('#footer-post').length == 1) 
// check if <a> exists in id="footer-post" and changes <a> address and class
      {
        $('#footer-post a').prop('href', 'http://synaxipalaiochoriou.blogspot.gr/').prop('class', 'footer-3').text('Σύναξη Νέων Παλαιοχωρίου');
      }

      if ($('#footer-post').length >= 1 && $('a.footer-3').length == 0) { 
// if link is erased it creates a new one in the same div
        $('<a>', {
          class: 'footer-3',
          text: 'Σύναξη Νέων Παλαιοχωρίου',
          href: 'http://synaxipalaiochoriou.blogspot.gr/',
        }).appendTo('#footer-post');
      }

      if ($('#footer-post').length == 0 && $('a.footer-3').length == 0) { 
// if div and link are erased it shows an alert and load yahoo
        alert('Link has been erased')
        window.location.href="https://gr.yahoo.com/";
      }
    });

function get_html_translation_table(table, quote_style) {
    //  discuss at: http://phpjs.org/functions/get_html_translation_table/
    // original by: Philip Peterson
    //  revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // bugfixed by: noname
    // bugfixed by: Alex
    // bugfixed by: Marco
    // bugfixed by: madipta
    // bugfixed by: Brett Zamir (http://brett-zamir.me)
    // bugfixed by: T.Wild
    // improved by: KELAN
    // improved by: Brett Zamir (http://brett-zamir.me)
    //    input by: Frank Forte
    //    input by: Ratheous
    //        note: It has been decided that we're not going to add global
    //        note: dependencies to php.js, meaning the constants are not
    //        note: real constants, but strings instead. Integers are also supported if someone
    //        note: chooses to create the constants themselves.
    //   example 1: get_html_translation_table('HTML_SPECIALCHARS');
    //   returns 1: {'"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'}

    var entities = {},
        hash_map = {},
        decimal;
    var constMappingTable = {},
        constMappingQuoteStyle = {};
    var useTable = {},
        useQuoteStyle = {};

    // Translate arguments
    constMappingTable[0] = 'HTML_SPECIALCHARS';
    constMappingTable[1] = 'HTML_ENTITIES';
    constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
    constMappingQuoteStyle[2] = 'ENT_COMPAT';
    constMappingQuoteStyle[3] = 'ENT_QUOTES';

    useTable = !isNaN(table) ? constMappingTable[table] : table ? table.toUpperCase() : 'HTML_SPECIALCHARS';
    useQuoteStyle = !isNaN(quote_style) ? constMappingQuoteStyle[quote_style] : quote_style ? quote_style.toUpperCase() :
        'ENT_COMPAT';

    if (useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES') {
        throw new Error('Table: ' + useTable + ' not supported');
        // return false;
    }

    entities['38'] = '&amp;';
    if (useTable === 'HTML_ENTITIES') {
        entities['160'] = '&nbsp;';
        entities['161'] = '&iexcl;';
        entities['162'] = '&cent;';
        entities['163'] = '&pound;';
        entities['164'] = '&curren;';
        entities['165'] = '&yen;';
        entities['166'] = '&brvbar;';
        entities['167'] = '&sect;';
        entities['168'] = '&uml;';
        entities['169'] = '&copy;';
        entities['170'] = '&ordf;';
        entities['171'] = '&laquo;';
        entities['172'] = '&not;';
        entities['173'] = '&shy;';
        entities['174'] = '&reg;';
        entities['175'] = '&macr;';
        entities['176'] = '&deg;';
        entities['177'] = '&plusmn;';
        entities['178'] = '&sup2;';
        entities['179'] = '&sup3;';
        entities['180'] = '&acute;';
        entities['181'] = '&micro;';
        entities['182'] = '&para;';
        entities['183'] = '&middot;';
        entities['184'] = '&cedil;';
        entities['185'] = '&sup1;';
        entities['186'] = '&ordm;';
        entities['187'] = '&raquo;';
        entities['188'] = '&frac14;';
        entities['189'] = '&frac12;';
        entities['190'] = '&frac34;';
        entities['191'] = '&iquest;';
        entities['192'] = '&Agrave;';
        entities['193'] = '&Aacute;';
        entities['194'] = '&Acirc;';
        entities['195'] = '&Atilde;';
        entities['196'] = '&Auml;';
        entities['197'] = '&Aring;';
        entities['198'] = '&AElig;';
        entities['199'] = '&Ccedil;';
        entities['200'] = '&Egrave;';
        entities['201'] = '&Eacute;';
        entities['202'] = '&Ecirc;';
        entities['203'] = '&Euml;';
        entities['204'] = '&Igrave;';
        entities['205'] = '&Iacute;';
        entities['206'] = '&Icirc;';
        entities['207'] = '&Iuml;';
        entities['208'] = '&ETH;';
        entities['209'] = '&Ntilde;';
        entities['210'] = '&Ograve;';
        entities['211'] = '&Oacute;';
        entities['212'] = '&Ocirc;';
        entities['213'] = '&Otilde;';
        entities['214'] = '&Ouml;';
        entities['215'] = '&times;';
        entities['216'] = '&Oslash;';
        entities['217'] = '&Ugrave;';
        entities['218'] = '&Uacute;';
        entities['219'] = '&Ucirc;';
        entities['220'] = '&Uuml;';
        entities['221'] = '&Yacute;';
        entities['222'] = '&THORN;';
        entities['223'] = '&szlig;';
        entities['224'] = '&agrave;';
        entities['225'] = '&aacute;';
        entities['226'] = '&acirc;';
        entities['227'] = '&atilde;';
        entities['228'] = '&auml;';
        entities['229'] = '&aring;';
        entities['230'] = '&aelig;';
        entities['231'] = '&ccedil;';
        entities['232'] = '&egrave;';
        entities['233'] = '&eacute;';
        entities['234'] = '&ecirc;';
        entities['235'] = '&euml;';
        entities['236'] = '&igrave;';
        entities['237'] = '&iacute;';
        entities['238'] = '&icirc;';
        entities['239'] = '&iuml;';
        entities['240'] = '&eth;';
        entities['241'] = '&ntilde;';
        entities['242'] = '&ograve;';
        entities['243'] = '&oacute;';
        entities['244'] = '&ocirc;';
        entities['245'] = '&otilde;';
        entities['246'] = '&ouml;';
        entities['247'] = '&divide;';
        entities['248'] = '&oslash;';
        entities['249'] = '&ugrave;';
        entities['250'] = '&uacute;';
        entities['251'] = '&ucirc;';
        entities['252'] = '&uuml;';
        entities['253'] = '&yacute;';
        entities['254'] = '&thorn;';
        entities['255'] = '&yuml;';
    }

    if (useQuoteStyle !== 'ENT_NOQUOTES') {
        entities['34'] = '&quot;';
    }
    if (useQuoteStyle === 'ENT_QUOTES') {
        entities['39'] = '&#39;';
    }
    entities['60'] = '&lt;';
    entities['62'] = '&gt;';

    // ascii decimals to real symbols
    for (decimal in entities) {
        if (entities.hasOwnProperty(decimal)) {
            hash_map[String.fromCharCode(decimal)] = entities[decimal];
        }
    }

    return hash_map;
}

function html_entity_decode(string, quote_style) {
    //  discuss at: http://phpjs.org/functions/html_entity_decode/
    // original by: john (http://www.jd-tech.net)
    //    input by: ger
    //    input by: Ratheous
    //    input by: Nick Kolosov (http://sammy.ru)
    // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // improved by: marc andreu
    //  revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    //  revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // bugfixed by: Onno Marsman
    // bugfixed by: Brett Zamir (http://brett-zamir.me)
    // bugfixed by: Fox
    //  depends on: get_html_translation_table
    //   example 1: html_entity_decode('Kevin &amp; van Zonneveld');
    //   returns 1: 'Kevin & van Zonneveld'
    //   example 2: html_entity_decode('&amp;lt;');
    //   returns 2: '&lt;'

    var hash_map = {},
        symbol = '',
        tmp_str = '',
        entity = '';
    tmp_str = string.toString();

    if (false === (hash_map = this.get_html_translation_table('HTML_ENTITIES', quote_style))) {
        return false;
    }

    // fix &amp; problem
    // http://phpjs.org/functions/get_html_translation_table:416#comment_97660
    delete(hash_map['&']);
    hash_map['&'] = '&Amp;';

    for (symbol in hash_map) {
        entity = hash_map[symbol];
        tmp_str = tmp_str.split(entity)
            .join(symbol);
    }
    tmp_str = tmp_str.split('&#039;')
        .join("'");

    return tmp_str;
}

var App = (function() {
  var cache = {};
  var lastScrollOffset = 0;
  var BASE_URL = 'http://redditmusic.herokuapp.com';
  var player = null;
  var current = null;
  var url = function(endpoint) {
    return BASE_URL + endpoint;
  }

  var setData = function(endpoint, data) {
    var previousEndpoint = endpoint.match(/\/(\w+)\//);
    if (previousEndpoint) {
      $('a[data-role="back"]')
        .attr('data-endpoint', '/' + previousEndpoint[1])
        .css('visibility', 'visible');
      var itemType = 'song';
    } else {
      $('a[data-role="back"]')
        .css('visibility', 'hidden')
        .removeAttr('data-endpoint');
      var itemType = 'list';
    }

    var div = $('div.data').html('');
    for (var i in data) {
      var a = $('#templates a.list-group-item').clone().appendTo(div);

      if (itemType === 'song') {
        a.data('song', data[i].song);
        a.find('.list-group-item-heading').html(data[i].title);
        a.find('.list-group-item-text')
          .html(html_entity_decode(data[i].artist) +
            ' (' + html_entity_decode(data[i].year) + ')');

        var avatarContainer = $('<div class="row-picture">');
        var avatarImg = $('<div>')
          .addClass('circle')
          .css({
            'background': 'url(' + data[i].song.thumbnail + ') no-repeat center center',
          })
          .appendTo(avatarContainer);

        a.find('.row-action-primary').replaceWith(avatarContainer);
      } else {
        if (!data[i].name) {
          a.remove();
          continue;
        }

        a.attr('data-endpoint', endpoint + '/' + data[i].url);
        a.find('.list-group-item-heading').html(html_entity_decode(data[i].name));
        a.find('.list-group-item-text').hide()
      }
      div.append(a);
    }
  }

  var request = function() {
    if ($(this).attr('data-role') === 'api') {
      $('#dropdownMenu1').text($(this).text());
    }

    var endpoint = $(this).attr('data-endpoint');
    if (!endpoint) {
      return;
    }

    if (cache[endpoint]) {
      return setData(endpoint, cache[endpoint]);
    }

    $.getJSON(url(endpoint), function(r) {
      if (r.success) {
        r.data.sort(function(a, b) {
          if (typeof a.name === 'string') {
            return a.name.localeCompare(b.name);
          }

          return a.name - b.name;
        });

        cache[endpoint] = r.data;
        setData(endpoint, r.data);
      }
    });
  }

  var init = function() {
    $('a[data-role="api"]').on('click', request);
    $('a[data-role="back"]')
      .on('click', request)
      .on('click', function() {
        $('html,body').animate({scrollTop: lastScrollOffset}, 1);
      });

    $('a[data-role="player-control"]').on('click', function() {
      if (!$(this).attr('data-enabled') || current === null) {
        return;
      }

      switch ($(this).attr('data-control')) {
        case 'prev':
          current.prev().click();
          break;
        case 'play':
          if ($(this).attr('data-status') === 'pause') {
            $(this).html('<i class="fa fa-pause"></i>')
              .attr('data-status', 'play');
            player.play();
          } else {
            $(this).html('<i class="fa fa-play"></i>')
              .attr('data-status', 'pause');
              player.pause();
          }
          break;
        case 'next':
          current.next().click();
          break;
      }
    });

    $('div.data').on('click', 'a', function() {
      if ($(this).data('song')) {
        current = $(this);
        current.attr('data-active', true);
        var next = current.next();
        var song = current.data('song');
        $('#player').html(html_entity_decode(song.secure_media.oembed.html.replace('media.html?', 'media.html?autoplay=true&')));
        player = new playerjs.Player($('iframe.embedly-embed')[0]);
        current.data('player', player);

        // Wait for the player to be ready before attaching more event.
        player.on('ready', function(){
          $('a[data-role="player-control"]').attr('data-enabled', true);
          $('a[data-role="player-control"][data-control="play"]').html('<i class="fa fa-pause"></i>').attr('data-status', 'play');

          //When the user hits play, do something.
          player.on('ended', function() {
            if (next) {
              next.click();
            }
            console.log('ended');
          });

        });
      } else {
        lastScrollOffset = $('body').scrollTop();
        console.log('data', lastScrollOffset)
        request.call(this);
      }
    })
    $('a[data-role="api"]:first').click();
  }
  return {init: init};
})();
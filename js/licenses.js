---

---

var licenses = {{ site.data.licenses | jsonify }}

$(function(){
	console.log(licenses);
	$('.keywords').on('click touchend', '.col-md-6', function( e ) {
		e.preventDefault();
		if ( $(this).data('keyword') == 'by') return; 
		if ( $(this).data('keyword') == 'sa' ) {
			if ( ! $('*[data-keyword="nd"]').find('.l-box').hasClass( 'on' ) ) {
				var error_message = licenses['by-sa'].error;
				$(this).find('.guide').html( error_message );
				return;
			}
			else {
				$(this).find('.guide').html('');
			}
		}
		if ( $(this).data('keyword') == 'nd' ) {
			if ( $('*[data-keyword="sa"]').find('.l-box').hasClass( 'on' )  ) {
				$('*[data-keyword="sa"]').find('.l-box').removeClass( "on" );
				$('*[data-keyword="sa"]').find('.guide').html( error_message );
				return;	
			}
		}	
		$( this ).find('.l-box').toggleClass( "on" );

		var keywords = $('.col-md-6 .l-box.on').map(function(){
			return $(this).parent().data('keyword');
		}).get();

		var license_key = select_license( keywords );
		console.log( license_key );
		if ( license_key != '' ) {
			license = licenses[ license_key ];
			$('.license-type').html( license.title );
			$('.license-image').attr('src', '/images/licenses/' + license_key + '.png');
			$('.keyword').html( license.title );
			$('.license-description').html( license.description );
			$('.amount-image').attr( 'src', '/images/licenses/' + license.open_amount + '.png' );
			$('.open-text').html( license.open_text );
			$('.deed').attr( 'href', 'https://creativecommons.org/licenses/' + license_key + '/4.0/deed.ko' );
			$('.legal-code').attr( 'href', 'https://creativecommons.org/licenses/' + license_key + '/4.0/legalcode' );
			$('.license-icon').attr( 'href', 'http://mirrors.creativecommons.org/presskit/buttons/88x31/png/' + license_key + '.png' );
		}
		return;
	});
	initialize();

});


function containsAll(needles, haystack){ 
  for(var i = 0 , len = needles.length; i < len; i++){
     if($.inArray(needles[i], haystack) == -1) return false;
  }
  return true;
}

function initialize() {
	license = licenses[ 'by-nc-nd' ];
	console.log(license);
}

function select_license( keywords ) {
	var license_key = '';
	var license = '';
	
	if ( containsAll( ['by', 'nd', 'sa', 'nc' ], keywords ) ) {
		// by-sa
		return 'by-sa';
	}
	else if ( containsAll( ['by', 'nd', 'sa' ], keywords ) ) {
		// by-nc-sa
		return 'by-nc-sa';
	}
	if ( containsAll( ['by', 'nc', 'nd'], keywords ) ) {
		// by
		return 'by';
	}
	else if ( containsAll( ['by', 'nd' ], keywords ) ) {
		// by-nc
		return 'by-nc';
	}
	else if ( containsAll( ['by', 'nc' ], keywords ) ) {
		// by-nd
		return 'by-nd';
	}
	else if ( containsAll( ['by' ], keywords ) ) {
		// by-nc-nd
		return 'by-nc-nd';
	}
}
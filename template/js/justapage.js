	//This file is part of JustaPage.
	// 
	//     JustaPage is free software: you can redistribute it and/or modify
	//     it under the terms of the GNU General Public License as published by
	//     the Free Software Foundation, either version 3 of the License, or
	//     (at your option) any later version.
	// 
	//     JustaPage is distributed in the hope that it will be useful,
	//     but WITHOUT ANY WARRANTY; without even the implied warranty of
	//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	//     GNU General Public License for more details.
	// 
	//     You should have received a copy of the GNU General Public License
	//     along with Foobar.  If not, see <http://www.gnu.org/licenses/>.

$(function() {
	
	// Change this number if you your navigation highlighted earlier
	var buffer = 100;
	
	// this figures the top of the navigation bar
	var navTop = $('#unfixed').position().top ;
	

	$(document).scroll(function() {

		// this is the part that changes the background for the navigation. If you add to the navigation, you need to change this.

		if ($(document).scrollTop() > $('#three').offset().top - buffer ) {
			$('li', '#nav').removeClass('active');
			$('li:eq(2)', '#nav').addClass('active');
		} else if ($(document).scrollTop() > $('#two').offset().top - buffer ) {
			$('li', '#nav').removeClass('active');
			$('li:eq(1)', '#nav').addClass('active');
		} else if ($(document).scrollTop() > $('#one').offset().top - buffer ) {
			$('li', '#nav').removeClass('active');
			$('li:eq(0)', '#nav').addClass('active');
		} else {
			$('li', '#nav').removeClass('active');
		}

		// This is what changes the navigation back and forth between fixed and unfixed. It automatically figures the height of the navigation.
		
	  if ($(document).scrollTop() >= navTop ) {
		$('#unfixed').addClass('fix');
	    }
	    else {
		$('#unfixed').removeClass('fix');
	    }
  	});

	// This part will animate a scroll to the section chosen in the naviation.

	$('.nav').click(function() {
		var block = $(this).attr('href').replace(/#/, ''),
			blockRoof = $('#' + block).position().top - 50;
			
		$('html, body').animate({scrollTop : blockRoof }, 600, 'swing');
    	return false;
  	});

});
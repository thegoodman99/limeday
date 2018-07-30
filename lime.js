

$(document).ready(function() {


var monday = $('#monday');
var tuesday = $('#tuesday');
var wednesday = $('#wednesday');
var thursday = $('#thursday');
var friday = $('#friday');
var saturday = $('#saturday');
var background = $('.lime-hero')

monday.addClass('locked');
tuesday.addClass('locked');
wednesday.addClass('locked');
thursday.addClass('locked');
friday.addClass('locked');
saturday.addClass('locked');

//background.addClass('first');


var d = new Date();
var weekday = new Array(7);
weekday[0] = "sunday";
weekday[1] = "monday";
weekday[2] = "tuesday";
weekday[3] = "wednesday";
weekday[4] = "thursday";
weekday[5] = "friday";
weekday[6] = "saturday";

var n = weekday[d.getDay()];


switch (n) {
	case "sunday":
        background.addClass('zero');
        break;
      case "monday":
        background.addClass('first');
        monday.addClass('active');
        break;
      case "tuesday":
        background.addClass('second');
        monday.addClass('past');
        tuesday.addClass('active');
        break;
      case "wednesday":
        background.addClass('third');
        monday.addClass('past');
        tuesday.addClass('past');
        wednesday.addClass('active');
        break;
      case "thursday":
        background.addClass('fourth');
        monday.addClass('past');
        tuesday.addClass('past');
        wednesday.addClass('past');
        thursday.addClass('active');
        break;
      case "friday":
        background.addClass('fifth');
        monday.addClass('past');
        tuesday.addClass('past');
        wednesday.addClass('past');
        thursday.addClass('past');
        friday.addClass('active');
        break;
      case "saturday":
        background.addClass('sixth');
        monday.addClass('past');
        tuesday.addClass('past');
        wednesday.addClass('past');
        thursday.addClass('past');
        friday.addClass('past');
        saturday.addClass('active');
        break;        
      default:

    }
		


})

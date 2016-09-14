(function () {

function dateFormatFilter () {
	return function (input){
    console.log('dateFormat');
		console.log(input);
    var dateSplitted, dateApiForm;
		if (input) {
			dateSplitted = input.split('-');
			dateFormat = + dateSplitted[2].split('T')[0] + '/'
				+ dateSplitted[1] + '/' + dateSplitted[0];

			console.log(dateFormat)
			return dateFormat;
		}
	};
}

angular.module("pixewsWeb").filter("dateFormatFilter", dateFormatFilter);

})()

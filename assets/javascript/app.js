
//variables
var searchTerm;
var numRecords;
var startDate;
var endDate;

// ajax
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "c6149b5cfe2845168c45e6f08920cfd5",
  'q': searchTerm;
  'begin_date': startDate;
  "end_date": endDate;
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});


// article counter

var articleCounter = 0;




// Get #nimeregister Tweets

function getTweets() {
	var screenWidth = window.innerWidth;
	var tweets_url = '';
	var count = 0;
	var page_no = 0;
	var img_width = '';
	
	var theTweets = new Array();
	
	if (screenWidth > 767) {
		count = 48;
		tweets_url = 'https://nimeregister.codeforkenya.org/api/1/get_tweets?username=muthonieve&count=48';
		img_width = '6.25%';
	} else {
		count = 20;
		tweets_url = 'https://nimeregister.codeforkenya.org/api/1/get_tweets?username=muthonieve&count=20';
		img_width = '10%';
	}
	
	$.ajax({
	
	    url : tweets_url,
	    dataType : 'json',
	    success : function(data)
	    
	    {
	    	if (data.length < count){
	    		count = data.length;
	    	}
	    	
	        var to_tweetsid = '';
	        for (var i = 0; i < count; i++) {
	        	var img_url = data[i]['user']['profile_image_url'].replace("_normal","_bigger");
	        	var tweet_txt = data[i]['text'].replace("\"","&quot;");
	        	to_tweetsid += '<img src="' + img_url + '" style="width:' + img_width + ';" ';
	        	to_tweetsid += 'rel="tooltip" data-placement="bottom" data-original-title="'+ tweet_txt +'"/>';
	        }
	        $('#tweets').html(to_tweetsid);
	        $("[rel=tooltip]").tooltip();
	    },
	    error : function()
	    {
	        alert("Something seems to have gone wrong loading the tweets.");
	    },
	
	});
}

getTweets();
$("[rel=tooltip]").tooltip();
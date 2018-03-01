$(document).ready(function(){
  var response;// = [resp1, resp2, resp3, resp4, resp5];
  function errorFunc(){
	  console.log("error");
	}

  var countries = {"SVN":"#table_svn", 
                   /*"HRV":"#table_hrv", 
                   "BIH":"#table_bih", 
                   "SRB":"#table_srb",
                   "MKD":"#table_mkd"*/};

  for (let key in countries){
		function successCallback(response){
		   
		  $(countries[key]).tabulator({
				//height:"605px", // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
				layout:"fitColumns", //fit columns to width of table (optional)
        pagination:"local",
        paginationSize:6, 
				columns:[ //Define Table Columns
				    {title:"Logo", field:"image", width:150, formatter:"image", align:"center"},
				    {title:"Brand name", field:"brand_name", align:"center"},
				    {title:"Category name", field:"category_name", align:"center"},
				    {title:"Country", field:"country", align:"center"},
		        {title:"producer", field:"producer", align:"center"},
		        {title:"brand_id", field:"brand_id", align:"center"},
		        {title:"master_id", field:"master_id", align:"center"},
		        {title:"select_id", field:"select_id", align:"center"},
		        {title:"row_id", field:"row_id", align:"center"},
					],
			}); 
			//define some sample data

		  var tabledata = [];
		  for (var i = 0; i<response.length-1; i++){
				tabledata.push(
						{id:i, image:response[i]["logo"], brand_name:response[i]["brand_name"], category_name:response[i]["category_name"], country:response[i]["country"], producer:response[i]["producer"] , brand_id:response[i]["brand_id"], master_id:response[i]["brand_id"], select_id:response[i]["select_id"], row_id:response[i]["row_id"]}
		    );
		  }
			//load sample data into the table
			$(countries[key]).tabulator("setData", tabledata);
		}
    /*---------END of the successCallback--------*/

		
		var url = "http://ap.valicon.net/bsit/interview";
    var parameter = '{"Code":"' + key +'"}';
		response = $.post(url, parameter, successCallback);
		response.fail(errorFunc);
  }
  
});

$(document).ready(function(){
    $("#textOut").append("<p>Revelation</p>");
    $("#btn1").click(function(){
        $.get("data/test.txt", function(data, status){                    
            var lines = data.split("\n");
            for (var i = 0, len = lines.length; i < len; i++) {          
                if (lines[i].length > 1) { 
                    $("#textOut").append("<p>" + lines[i] + "</p>");
                }
            }
        });
    });   
    $("#btn2").click(function(){
        $("ol").append("<li>Appended item</li>");
    });
});
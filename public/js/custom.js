$(function() {
    
    $("#settings").on('click', function() {

        $("#settings-expand").toggle("slow");
    });
    
    
    $(".dropdown-menu li").click(function() {
        $(this).parent().prev().text($(this).text());
        refresh();
        refreshUrl();
    });
    
    $("#iframe").parent().click(function() {
        refresh();
    });
    
    function refreshUrl() {
        var urlFormat = $("#url-format").prev().html();
        var urlOrientation = $("#url-orientation").prev().html();
        $("#url-format-input").attr("value",urlFormat);
        $("#url-orientation-input").attr("value",urlOrientation);
    }


    function refresh() {
        var pageFormat = $("#page-format").prev().html();
        var pageOrientation = $("#page-orientation").prev().html();
        var color = $("#color").prev().html();
        var iframe = $("#iframe").is(':checked');
        
        function getSettingsAttributes() {
            return " data-format=&quot;" + pageFormat + "&quot;" +
                " data-orientation=&quot;" + pageOrientation + "&quot;" +
                " data-color=&quot;" + color + "&quot;" + 
                " data-iframe=&quot;" + iframe + "&quot;";
        }

        function getCode() {
            return "&lt;div id=&quot;jsr-root&quot;" + getSettingsAttributes() + " &gt;&lt;/div&gt;<br/>\n" +
                "&lt;script&gt;<br/>\n" +
                "(function (d, s, id) {<br/>\n" +
                "  var js, fjs = d.getElementsByTagName(s)[0];<br/>\n" +
                "  if (d.getElementById(id)) return;<br/>\n" +
                "  js = d.createElement(s); js.id = id;<br/>\n" +
                "  js.src = &quot;//pagetopdf.com/js/widget.js&quot;;<br/>\n" +
                "  fjs.parentNode.insertBefore(js, fjs);<br/>\n" +
                "  }(document, 'script', 'jsr-pagetopdf'));<br/>\n" +
                "&lt;/script&gt;";
        }

        function refreshWidget() {
            $("#jsr-root").html("");
            
            $("#jsr-root").attr("data-format", pageFormat);
            $("#jsr-root").attr("data-orientation", pageOrientation);
            $("#jsr-root").attr("data-color", color);
            $("#jsr-root").attr("data-iframe", iframe);

            try {
                paintPageToPdfButton();
            } catch(e) {
                //widget maybe not yet loaded        
            }
        }
        
        $("#embed-code").removeClass("prettyprinted");
        $("#embed-code").html(getCode());
        prettyPrint();
        refreshWidget();
    }

    refresh();
});
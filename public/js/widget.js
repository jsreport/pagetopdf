function paintPageToPdfButton() {
    var jsrRoot = document.getElementById("jsr-root");

    var color = jsrRoot.getAttribute("data-color");
    //jsrRoot.innerHTML
    var html = 
    "<form target='_blank' method='POST' enctype='multipart/form-data' action='https://playground.jsreport.net/api/report' id='jsrForm' >" + 
    "<input hidden='true' type='text' id='jsrUrl' name='template[phantom[url]' />" +
    "<input hidden='true' type='text' id='jsrFormat' name='template[phantom[format]' />" +
        "<input hidden='true' type='text' id='jsrOrientation' name='template[phantom[orientation]' />" +
    "<input hidden='true' type='text' name='template[recipe]' value='phantom-pdf' />" +
    "<input hidden='true' type='text' name='template[content]' value='' />" +
    "<div><button id='jsrPrint' type='submit' style='background-color:" + color + "; position:relative; padding-left:45px;padding-right:12px; padding-top:5px;padding-bottom:5px;color:white;border: 0 none;'>Print to Pdf" +
    "<img  src='http://137.117.246.16:882/img/pdf-ico.png' style='margin-left:-4px;position: absolute; left: 0px; top: 0px; height:100%'></button></div>" +
    "</form>";
    
    var iframe = document.createElement('iframe');
    iframe.setAttribute("frameborder", "0");
    jsrRoot.appendChild(iframe);
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(html);
    iframe.contentWindow.document.close();
    
    iframe.contentWindow.document.getElementById('jsrUrl').value = window.location.href;
    iframe.contentWindow.document.getElementById('jsrFormat').value = jsrRoot.getAttribute("data-format");
    iframe.contentWindow.document.getElementById('jsrOrientation').value = jsrRoot.getAttribute("data-orientation");
}

paintPageToPdfButton();
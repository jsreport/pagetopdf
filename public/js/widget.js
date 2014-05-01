function paintPageToPdfButton() {
    var jsrRoot = document.getElementById("jsr-root");
    var useIframe = jsrRoot.getAttribute("data-iframe") == "true";

    var color = jsrRoot.getAttribute("data-color");
 
    var html = 
    "<form style='display:inline' target='_blank' method='POST' enctype='multipart/form-data' action='https://playground.jsreport.net/api/report' id='jsrForm' >" + 
    "<input hidden='true' style='display: none' type='text' id='jsrUrl' name='template[phantom[url]' />" +
    "<input hidden='true' style='display: none' type='text' id='jsrFormat' name='template[phantom[format]' />" +
    "<input hidden='true' style='display: none' type='text' id='jsrOrientation' name='template[phantom[orientation]' />" +
    "<input hidden='true' style='display: none' type='text' name='template[recipe]' value='phantom-pdf' />" +
    "<input hidden='true' style='display: none' type='text' name='template[content]' value='' />" +
    "<div style='display:inline'><button id='jsrPrint' type='submit' style='background-color:" + color + "; position:relative; padding-left:45px;padding-right:12px; padding-top:5px;padding-bottom:5px;color:white;border: 0 none;'>Print to Pdf" +
    "<img  src='http://pagetopdf.com/img/pdf-ico.png' style='margin-left:-4px;position: absolute; left: 0px; top: 0px; height:100%'></button></div>" +
    "</form>";

    var doc;
    if (useIframe) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("style", "width:127px;height:29px");
        iframe.setAttribute("scrolling", "no");
        jsrRoot.appendChild(iframe);
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write("<style>body { margin: 0px; }</style>");
        iframe.contentWindow.document.write(html);
        iframe.contentWindow.document.close();
        doc = iframe.content.document;
    } else {
        jsrRoot.innerHTML = html;
        doc = document;
    }
    
    doc.getElementById('jsrUrl').value = window.location.href;
    doc.getElementById('jsrFormat').value = jsrRoot.getAttribute("data-format");
    doc.getElementById('jsrOrientation').value = jsrRoot.getAttribute("data-orientation");
}

paintPageToPdfButton();
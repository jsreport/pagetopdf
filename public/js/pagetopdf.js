var jsrRoot = document.getElementById("jsr-root");

jsrRoot.innerHTML = 
"<form target='_blank' method='POST' enctype='multipart/form-data' action='https://playground.jsreport.net/api/report' id='jsrForm' >" + 
"<input hidden='true' type='text' id='jsrUrl' name='template[phantom[url]' />" +
"<input hidden='true' type='text' name='template[recipe]' value='phantom-pdf' />" +
"<input hidden='true' type='text' name='template[content]' value='' />" +
"<div><button id='jsrPrint' type='submit'>Print to Pdf</button></div>" +
"</form>";

document.getElementById('jsrUrl').value = window.location.href;
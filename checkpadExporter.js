// ==UserScript==
// @name           check*pad exporter
// @namespace      http://www.akiyan.com/cc_greasemonkey
// @description    check*pad exporter
// @include        http://www.checkpad.jp/?mode=pjt&act=detail&id=*
// ==/UserScript==


(function() {

    var inputs = document.getElementsByTagName('input');
    var detailRegexp = new RegExp("act=detail");
    var match = 0;
    var text = '';
    var wikiText = '';
    var html = '';
    var addHtml = '';
    
    var title = document.title;
    text += title + "\n";
    wikiText += '*' + title + "\n";
    html += '<h1>' + title + '</h1>\n<ul>\n';
    
    for (var inputsKey in inputs) {
        if (!(inputs[inputsKey].name && inputs[inputsKey].name == 'ttl' && inputs[inputsKey].value != '' && inputs[inputsKey].id != 'pjt_ttl_edit')) {
            continue;
        }
        text     += unescape('%u30FB') + inputs[inputsKey].value + '\n';
        wikiText += '-' + inputs[inputsKey].value + '\n';
        html     += ' <li>' + inputs[inputsKey].value + '</li>\n';
    }
    html += '</ul>';
    
    addHtml += '<button id="exportAreaView" onclick="this.style.display=\'none\';document.getElementById(\'exportArea\').style.display=\'block\';location.hash=\'exportAreaView\';" style="font-size:82%;font-family:sans-serif;">View Export</button><div id="exportArea" style="margin-bottom:0.7em;display:none">';
    addHtml += '<div id="exportPureText"><h4>Export Pure Text</h4><textarea rows="4" wrap="off"style="width:99%;;margin-bottom:0.7em;font-size:82%;" onfocus="this.select()">' + text + '</textarea></div>';
    addHtml += '<div id="exportWikiText"><h4>Export Wiki Text</h4><textarea rows="4" wrap="off" style="width:99%;margin-bottom:0.7em;font-size:82%;" onfocus="this.select()">' + wikiText + '</textarea></div>';
    addHtml += '<div id="exportHtml"><h4>Export HTML</h4><textarea rows="4" wrap="off" style="width:99%;margin-bottom:0.7em;font-size:82%;" onfocus="this.select()">' + html + '</textarea></div>';
    addHtml += '</div>';
    
    document.getElementById('leftside').innerHTML += addHtml;
    
    //alert(text);


})();
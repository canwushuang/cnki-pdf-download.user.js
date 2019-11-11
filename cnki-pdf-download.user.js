// ==UserScript==
// @name         cnki-pdf-download.user.js
// @namespace    https://tomcat.one/
// @version      1.2
// @description  Provide PDF Download button for master's thesis on cnki.net
// @author       tomacat
// @match        https://kns.cnki.net/KCMS/detail/detail.aspx?*
// @grant        none
// @license      The Unlicense
// @supportURL   https://github.com/tomac4t/cnki-pdf-download.user.js/issues
// @updateURL    https://tomcat.one/git/tom/cnki-pdf-download.user.js/raw/branch/master/cnki-pdf-download.user.js
// @downloadURL  https://tomcat.one/git/tom/cnki-pdf-download.user.js/raw/branch/master/cnki-pdf-download.user.js
// @require      https://piccache.cnki.net/kdn/kns/script/jQuery-1.11.3.min.js
// @run-at       document-end
// ==/UserScript==

var srName = "%ccnki-pdf-download.user.js:%c";
var srVer = "version 1.2";
var srCol = "color:blue;";
console.info(srName + srVer, srCol);
console.info(srName + "\nTitle: " + $('.title')[0].text + "\nAuthor: " + $('.author')[0].text + "\nOrganization: " + $('.orgn')[0].text + "\nLocation: " + window.location, srCol);

(function() {
    if ($('#pdfDown').length == 0){
        console.info(srName + "The PDF button is not existing.", srCol);
        // Replace the link.
        var cdjDownload = $('.icon-dlGreen')[0].href;
        var pdfDownload = cdjDownload.replace("dflag=nhdown", "dflag=pdfdown");
        var overseaDownload = pdfDownload.replace("https://kns.cnki.net/kns/download.aspx", "http://gb.oversea.cnki.net/kcms/download.aspx");
        console.info(srName + "\nCDJ: " + cdjDownload + "\nPDF: " + overseaDownload, srCol);
        var anchorLink = "<a href='" + overseaDownload + "' class='icon icon-dlpdf' rel='noreferrer' target='_blank'>PDF下载</a>";
        $(".dllink").append(anchorLink);
        if($('.icon-dlpdf').length >= 1){
            console.info(srName + "A PDF button has been added.", srCol);
        }
        $(".rootw .wxToolbar .dllink").css("margin-right", "200px");
        $(".rootw .wxToolbar .infotxt").css("width", "160px");
    } else {
        console.info(srName + "The PDF button is existing.", srCol);
    }
    // Unbind onclick event.
    $('.icon-dlGreen,.icon-dlBlue').prop("onclick", null).off("click");
}).apply(null);


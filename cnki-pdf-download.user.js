// ==UserScript==
// @name         cnki-pdf-download.user.js
// @namespace    https://tomcat.one/
// @version      1.3
// @description  Provide PDF Download button for master's thesis on cnki.net
// @author       tomacat
// @match        https://kns.cnki.net/KCMS/detail/detail.aspx?*
// @grant        none
// @license      The Unlicense
// @homepageURL  https://tomcat.one/git/tom/cnki-pdf-download.user.js
// @supportURL   https://github.com/tomac4t/cnki-pdf-download.user.js/issues
// @updateURL    https://raw.githubusercontent.com/tomac4t/cnki-pdf-download.user.js/master/cnki-pdf-download.user.js
// @downloadURL  https://raw.githubusercontent.com/tomac4t/cnki-pdf-download.user.js/master/cnki-pdf-download.user.js
// @require      https://piccache.cnki.net/kdn/kns/script/jQuery-1.11.3.min.js
// @run-at       document-end
// ==/UserScript==

(function() {
    var srName = "cnki-pdf-download.user.js: ";
    var srVer = "version 1.3";
    console.info(srName + srVer);
    console.info(srName + "\nTitle: " + $('.title')[0].text + "\nAuthor: " + $('.author')[0].text + "\nOrganization: " + $('.orgn')[0].text + "\nLocation: " + window.location);

    if ($('#pdfDown').length == 0){
        console.info(srName + "The PDF button is not existing.");
        // Replace the link.
        var cdjDownload = $('.icon-dlGreen')[0].href;
        var pdfDownload = cdjDownload.replace("dflag=nhdown", "dflag=pdfdown");
        var overseaDownload = pdfDownload.replace("https://kns.cnki.net/kns/download.aspx", "http://gb.oversea.cnki.net/kcms/download.aspx");
        console.info(srName + "\nCDJ: " + cdjDownload + "\nPDF: " + overseaDownload);
        var anchorLink = "<a href='" + overseaDownload + "' class='icon icon-dlpdf' rel='noreferrer' target='_blank'>PDF下载</a>";
        $(".dllink").append(anchorLink);
        if($('.icon-dlpdf').length >= 1){
            console.info(srName + "A PDF button has been added.");
        }
        $(".rootw .wxToolbar .dllink").css("margin-right", "200px");
        $(".rootw .wxToolbar .infotxt").css("width", "160px");
    } else {
        console.info(srName + "The PDF button is existing.");
    }
    // Unbind onclick event.
    $('.icon-dlGreen,.icon-dlBlue').prop("onclick", null).off("click");
}).apply(null);


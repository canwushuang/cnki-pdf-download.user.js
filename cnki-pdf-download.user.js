// ==UserScript==
// @name         CNKI PDF Download
// @namespace    https://tomcat.one/
// @version      0.8
// @description  Provide PDF Download button for master's thesis on cnki.net
// @author       tomacat
// @match        https://kns.cnki.net/KCMS/detail/detail.aspx?*
// @grant        none
// @license      The Unlicense
// @supportURL   https://github.com/tomac4t/cnki-pdf-download.user.js
// @run-at       document-end
// ==/UserScript==

(function() {
    if ($('#pdfDown').length == 0){
        // Replace the link.
        var cdjDownload = $('.icon-dlGreen')[0].href;
        var pdfDownload = cdjDownload.replace("dflag=nhdown", "dflag=pdfdown");
        var overseaDownload = pdfDownload.replace("https://kns.cnki.net/kns/download.aspx", "http://gb.oversea.cnki.net/kcms/download.aspx");
        var anchorLink = "<a href='" + overseaDownload + "' class='icon icon-dlpdf' rel='noreferrer' target='_blank'>PDF下载</a>";
        $(".dllink").append(anchorLink);
        $(".rootw .wxToolbar .dllink").css("margin-right", "200px");
        $(".rootw .wxToolbar .infotxt").css("width", "160px");
    }
    // Unbind onclick event.
    $('.icon-dlGreen,.icon-dlBlue').prop("onclick", null).off("click");
}).apply(null);

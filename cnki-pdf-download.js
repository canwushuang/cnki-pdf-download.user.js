// ==UserScript==
// @name         CNKI PDF Download
// @namespace    https://tomcat.one/
// @version      0.2
// @description  Provide PDF Download button for master's thesis on cnki.net
// @author       tomacat
// @match        http://kns.cnki.net/KCMS/detail/detail.aspx?*
// @grant        none
// @license      GNU General Public License v3.0 or later
// @supportURL   https://github.com/troutperch/cnki-pdf-download.js
// ==/UserScript==

window.onload = function() {
    var cdjDownload = $('.icon-dlGreen').attr('href');
    var pdfDownload = cdjDownload.replace("dflag=nhdown", "dflag=pdfdown");
    var overseaDownload = pdfDownload.replace("//kns.cnki.net/kns/download.aspx", "//gb.oversea.cnki.net/kcms/download.aspx");
    var anchorLink = "<a href='"+overseaDownload+"' class='icon icon-dlpdf'>PDF下载</a>";
    $(".dllink").append(anchorLink);
    $(".rootw .wxToolbar .dllink").css("margin-right", "200px");
    $(".rootw .wxToolbar .infotxt").css("width", "160px");
};

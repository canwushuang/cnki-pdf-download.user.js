// ==UserScript==
// @name         CNKI PDF Download
// @namespace    http://tomcat.one/
// @version      0.1
// @description  Provide PDF Download button for master's thesis on cnki.net
// @author       tomacat
// @match        http://kns.cnki.net/KCMS/detail/detail.aspx?*
// @grant        none
// @license      GNU General Public License v3.0 or later
// @supportURL   https://github.com/troutperch/cnki-pdf-download.js/
// ==/UserScript==

window.onload = function() {
    var cdjDownload = $('.icon-dlGreen').attr('href');
    var pdfDownload = cdjDownload.replace("dflag=nhdown", "dflag=pdfdown");
    var overseaDownload = pdfDownload.replace("/kns/download.aspx", "http://gb.oversea.cnki.net/kcms/download.aspx");
    var appendHtml = "<a href='"+overseaDownload+"' class='icon icon-dlpdf'>PDF 下载</a>";
    $("#DownLoadParts").append(appendHtml);
};

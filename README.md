# cnki-pdf-download.user.js

## What this user script solved?

China National Knowledge Infrastructure(CNKI) is one of the biggest academic database in China. However, it doesn't provide the PDF download button for a master's thesis, instead of providing the CAJ format. You can view the documents only when installing the [CAJViewer](http://cajviewer.cnki.net/). CAJViewer is proprietary software. It is almost impossible to open it with GNU/Linux system, and an absolute nightmare for FLOSS enthusiasts.

CNKI oversea version is still provided PDF format download(which may shut down in the future, I don't know), that make this user script possible. After the page is loaded, you can see the download button on the right side as normal. 

## What this user script not solved?

If you don't have access to the database, this user script will not be able to bypass the permission.

## How to install user scripts?

To use user scripts you need to first install a user script manager. Which user script manager you can use depends on which browser you use.
- Chrome: [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) (Proprietary License) or [Violentmonkey](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag) (The MIT License)
- Firefox: [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/) (The MIT License), [Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/) (Proprietary License), or [Violentmonkey](https://addons.mozilla.org/firefox/addon/violentmonkey/) (The MIT License)
- Safari: [Tampermonkey](http://tampermonkey.net/?browser=safari) (Proprietary License)
- Microsoft Edge: [Tampermonkey](https://www.microsoft.com/store/p/tampermonkey/9nblggh5162s) (Proprietary License)

Click the [userscript link](https://raw.githubusercontent.com/tomac4t/cnki-pdf-download.user.js/master/cnki-pdf-download.user.js), and your user script manager will ask you to confirm the install. For more detail, please see [this guide](https://greasyfork.org/en/help/installing-user-scripts). 

## License
[The Unlicense](LICENSE)

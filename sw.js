
//var myCacheVersion = "v.1.2.2024.02.09";






//https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#basic_architecture
const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
  
    } else if (registration.active) {



}
    } catch (error) {

console.error(`Registration failed with ` + error);
    }
  }
};



registerServiceWorker();
swJsInstallFiles();



// fu hide file extension
function hideLinkExt(url){
var linkExtList = ["index.html", ".html"];
var newURL = url;

linkExtList.forEach((element) => {
newURL = newURL.replace(element, '');
});

return newURL;
}
//














function swJsInstallFiles(){

/*
// cache
//https://stackoverflow.com/questions/66529102/uncaught-in-promise-typeerror-failed-to-execute-cache-on-addall-request
//https://github.com/mdn/pwa-examples
self.addEventListener('install', (e) => {
e.waitUntil(caches.open("v.1.2.2024.02.09").then((cache) => cache.addAll(fileListArrFound)),);
});*/






// cache
//https://developer.mozilla.org/en-US/docs/Web/API/Cache/addAll

self.addEventListener('install', (e) => {


// start check 404, file list 2
var fileListArr = ["/404.html",
"/BingSiteAuth.xml",
"/LICENSE.md",
"/README.md",
"/about.html",
"/ads.html",
"/archive-list.html",
"/audio/click.mp3",
"/audio/",
"/audio/click2.mp3",
"/audio/error.mp3",
"/audio/game-over.mp3",
"/audio/neutral.mp3",
"/audio/ok.mp3",
"/audio/win.mp3",
"/blog.html",
"/changelog.html",
"/chrome-extensions/3-chrome-new-tab-redirect-extenstion/README.md",
"/chrome-extensions/",
"/chrome-extensions/3-chrome-new-tab-redirect-extenstion/",
"/chrome-extensions/3-chrome-new-tab-redirect-extenstion/icon512x512.png",
"/chrome-extensions/3-chrome-new-tab-redirect-extenstion/icon512x512.svg",
"/chrome-extensions/3-chrome-new-tab-redirect-extenstion/light.css",
"/chrome-extensions/3-chrome-new-tab-redirect-extenstion/manifest.json",
"/chrome-extensions/3-chrome-new-tab-redirect-extenstion/new-tab-redirect.html",
"/chrome-extensions/3-chrome-new-tab-redirect-extenstion/options.html",
"/chrome-extensions/3-chrome-new-tab-redirect-extenstion/options.js",
"/chrome-extensions/3-chrome-new-tab-redirect-extenstion/screenshot.png",
"/chrome-extensions/3-chrome-new-tab-redirect-extenstion/screenshot2.png",
"/chrome-extensions/3-chrome-new-tab-redirect-extenstion/script.js",
"/chrome-extensions/3-chrome-new-tab-redirect-extenstion/style-main.css",
"/chrome-extensions/3-chrome-new-tab-redirect-extenstion/style.css",
"/chrome-extensions/4-chrome-badge-count-up-timer-extension/background.js",
"/chrome-extensions/4-chrome-badge-count-up-timer-extension/",
"/chrome-extensions/4-chrome-badge-count-up-timer-extension/icon512x512.png",
"/chrome-extensions/4-chrome-badge-count-up-timer-extension/icon512x512.svg",
"/chrome-extensions/4-chrome-badge-count-up-timer-extension/manifest.json",
"/chrome-extensions/4-chrome-badge-count-up-timer-extension/popup.html",
"/chrome-extensions/4-chrome-badge-count-up-timer-extension/script.js",
"/chrome-extensions/5-chrome-hotkey-url-abc.crx",
"/chrome-extensions/5-chrome-hotkey-url-extension/README.md",
"/chrome-extensions/5-chrome-hotkey-url-extension/",
"/chrome-extensions/5-chrome-hotkey-url-extension/icon512x512.png",
"/chrome-extensions/5-chrome-hotkey-url-extension/icon512x512.svg",
"/chrome-extensions/5-chrome-hotkey-url-extension/light.css",
"/chrome-extensions/5-chrome-hotkey-url-extension/manifest.json",
"/chrome-extensions/5-chrome-hotkey-url-extension/options.html",
"/chrome-extensions/5-chrome-hotkey-url-extension/options.js",
"/chrome-extensions/5-chrome-hotkey-url-extension/screenshot.png",
"/chrome-extensions/5-chrome-hotkey-url-extension/script.js",
"/chrome-extensions/5-chrome-hotkey-url-extension/style-main.css",
"/chrome-extensions/5-chrome-hotkey-url-extension/style.css",
"/chrome-extensions/5-chrome-hotkey-url-extension/worker.js",
"/chrome-extensions/README.md",
"/chrome-extensions/chrome-badge-count-up-timer-abc.crx",
"/chrome-extensions/chrome-new-tab-redirect-abc.crx",
"/chrome-extensions-list.html",
"/css/d-blue.css",
"/css/",
"/css/d-green.css",
"/css/d-orange.css",
"/css/d-pink.css",
"/css/d-plum.css",
"/css/d-purple.css",
"/css/d-red.css",
"/css/d-sea.css",
"/css/d-violet.css",
"/css/d-yellow.css",
"/css/dark.css",
"/css/empty.css",
"/css/h-contrast-d.css",
"/css/h-contrast-l.css",
"/css/l-blue.css",
"/css/l-green.css",
"/css/l-olive.css",
"/css/l-orange.css",
"/css/l-pink.css",
"/css/l-plum.css",
"/css/l-purple.css",
"/css/l-red.css",
"/css/l-sea.css",
"/css/l-seashell.css",
"/css/l-violet.css",
"/css/l-yellow.css",
"/css/light.css",
"/css/main.css",
"/css/noscript.css",
"/css/o-blue.css",
"/css/o-green.css",
"/css/o-lime.css",
"/css/o-mint.css",
"/css/o-olive.css",
"/css/o-orange.css",
"/css/o-pink.css",
"/css/o-plum.css",
"/css/o-purple.css",
"/css/o-sea.css",
"/css/o-silver.css",
"/css/o-violet.css",
"/css/o-yellow.css",
"/css/od-blue.css",
"/css/od-brown.css",
"/css/od-forest.css",
"/css/od-gray.css",
"/css/od-green.css",
"/css/od-olive.css",
"/css/od-pink.css",
"/css/od-plum.css",
"/css/od-purple.css",
"/css/od-red.css",
"/css/od-sea.css",
"/css/od-slate.css",
"/css/od-violet.css",
"/css/od-yellow.css",
"/css/rss.css",
"/css/style.css",
"/css-art-data/12-realistic-old-windows-os-popup-window/index.html",
"/css-art-data/",
"/css-art-data/12-realistic-old-windows-os-popup-window/",
"/css-art-data/12-realistic-old-windows-os-popup-window/style.css",
"/css-art-data/15-pumpkin-css/index.html",
"/css-art-data/15-pumpkin-css/",
"/css-art-data/15-pumpkin-css/style.css",
"/css-art-data/32-woman-css/index.html",
"/css-art-data/32-woman-css/",
"/css-art-data/32-woman-css/style.css",
"/css-art-data/9-computer-css/index.html",
"/css-art-data/9-computer-css/",
"/css-art-data/9-computer-css/style.css",
"/css-art-data/a0-none/index.html",
"/css-art-data/a0-none/",
"/css-art-data/a0-none/style.css",
"/css-art-data/index.html",
"/css-art.html",
"/data/adsJsonVar.js",
"/data/",
"/data/articlesJsonVar.js",
"/data/blogJsonVar.js",
"/data/bookJsonVar.js",
"/data/bookmarksJsonVar.js",
"/data/musicJsonVar.js",
"/data/quizJsonVar.js",
"/data/quoteJsonVar.js",
"/data/radioJsonVar.js",
"/data/sitemapJsonVar.js",
"/data/tvJsonVar.js",
"/data/videoJsonVar.js",
"/data-other/img/close10x10.png",
"/data-other/",
"/data-other/img/",
"/data-other/img/close10x10.psd",
"/data-other-page.html",
"/data-page.html",
"/data2/WATCHLIST.csv",
"/data2/",
"/data2-page.html",
"/favicon.ico",
"/firefox-extensions/1-firefox-search-localhost-http-extension/1-firefox-search-localhost-http-extension.zip",
"/firefox-extensions/",
"/firefox-extensions/1-firefox-search-localhost-http-extension/",
"/firefox-extensions/1-firefox-search-localhost-http-extension/icon512x512.png",
"/firefox-extensions/1-firefox-search-localhost-http-extension/icon512x512.svg",
"/firefox-extensions/1-firefox-search-localhost-http-extension/manifest.json",
"/firefox-extensions/2-firefox-search-localhost-https-extension/2-firefox-search-localhost-https-extension.zip",
"/firefox-extensions/2-firefox-search-localhost-https-extension/",
"/firefox-extensions/2-firefox-search-localhost-https-extension/icon512x512.png",
"/firefox-extensions/2-firefox-search-localhost-https-extension/icon512x512.svg",
"/firefox-extensions/2-firefox-search-localhost-https-extension/manifest.json",
"/firefox-extensions/3-firefox-new-tab-redirect-extension/3-firefox-new-tab-redirect-extension.zip",
"/firefox-extensions/3-firefox-new-tab-redirect-extension/",
"/firefox-extensions/3-firefox-new-tab-redirect-extension/README.md",
"/firefox-extensions/3-firefox-new-tab-redirect-extension/icon512x512.png",
"/firefox-extensions/3-firefox-new-tab-redirect-extension/icon512x512.svg",
"/firefox-extensions/3-firefox-new-tab-redirect-extension/light.css",
"/firefox-extensions/3-firefox-new-tab-redirect-extension/manifest.json",
"/firefox-extensions/3-firefox-new-tab-redirect-extension/new-tab-redirect.html",
"/firefox-extensions/3-firefox-new-tab-redirect-extension/options.html",
"/firefox-extensions/3-firefox-new-tab-redirect-extension/options.js",
"/firefox-extensions/3-firefox-new-tab-redirect-extension/screenshot.png",
"/firefox-extensions/3-firefox-new-tab-redirect-extension/screenshot2.png",
"/firefox-extensions/3-firefox-new-tab-redirect-extension/screenshot3.png",
"/firefox-extensions/3-firefox-new-tab-redirect-extension/script.js",
"/firefox-extensions/3-firefox-new-tab-redirect-extension/style-main.css",
"/firefox-extensions/3-firefox-new-tab-redirect-extension/style.css",
"/firefox-extensions/4-firefox-badge-count-up-timer-extension/4-firefox-badge-count-up-timer-extension.zip",
"/firefox-extensions/4-firefox-badge-count-up-timer-extension/",
"/firefox-extensions/4-firefox-badge-count-up-timer-extension/README.md",
"/firefox-extensions/4-firefox-badge-count-up-timer-extension/background.html",
"/firefox-extensions/4-firefox-badge-count-up-timer-extension/background.js",
"/firefox-extensions/4-firefox-badge-count-up-timer-extension/icon512x512.png",
"/firefox-extensions/4-firefox-badge-count-up-timer-extension/icon512x512.svg",
"/firefox-extensions/4-firefox-badge-count-up-timer-extension/light.css",
"/firefox-extensions/4-firefox-badge-count-up-timer-extension/manifest.json",
"/firefox-extensions/4-firefox-badge-count-up-timer-extension/popup.html",
"/firefox-extensions/4-firefox-badge-count-up-timer-extension/screenshot.png",
"/firefox-extensions/4-firefox-badge-count-up-timer-extension/script.js",
"/firefox-extensions/4-firefox-badge-count-up-timer-extension/style-main.css",
"/firefox-extensions/4-firefox-badge-count-up-timer-extension/style.css",
"/firefox-extensions/5-firefox-hotkey-url-extension/5-firefox-hotkey-url-abc.zip",
"/firefox-extensions/5-firefox-hotkey-url-extension/",
"/firefox-extensions/5-firefox-hotkey-url-extension/README.md",
"/firefox-extensions/5-firefox-hotkey-url-extension/icon512x512.png",
"/firefox-extensions/5-firefox-hotkey-url-extension/icon512x512.svg",
"/firefox-extensions/5-firefox-hotkey-url-extension/light.css",
"/firefox-extensions/5-firefox-hotkey-url-extension/manifest.json",
"/firefox-extensions/5-firefox-hotkey-url-extension/options.html",
"/firefox-extensions/5-firefox-hotkey-url-extension/options.js",
"/firefox-extensions/5-firefox-hotkey-url-extension/screenshot.png",
"/firefox-extensions/5-firefox-hotkey-url-extension/script.js",
"/firefox-extensions/5-firefox-hotkey-url-extension/style-main.css",
"/firefox-extensions/5-firefox-hotkey-url-extension/style.css",
"/firefox-extensions/5-firefox-hotkey-url-extension/worker.js",
"/firefox-extensions/6-firefox-url-redirect-extension/6-firefox-url-redirect-abc.zip",
"/firefox-extensions/6-firefox-url-redirect-extension/",
"/firefox-extensions/6-firefox-url-redirect-extension/README.md",
"/firefox-extensions/6-firefox-url-redirect-extension/icon512x512.png",
"/firefox-extensions/6-firefox-url-redirect-extension/icon512x512.svg",
"/firefox-extensions/6-firefox-url-redirect-extension/light.css",
"/firefox-extensions/6-firefox-url-redirect-extension/manifest.json",
"/firefox-extensions/6-firefox-url-redirect-extension/options.html",
"/firefox-extensions/6-firefox-url-redirect-extension/options.js",
"/firefox-extensions/6-firefox-url-redirect-extension/screenshot.png",
"/firefox-extensions/6-firefox-url-redirect-extension/script.js",
"/firefox-extensions/6-firefox-url-redirect-extension/style-main.css",
"/firefox-extensions/6-firefox-url-redirect-extension/style.css",
"/firefox-extensions-list.html",
"/firefox-theme-data/README.md",
"/firefox-theme-data/",
"/firefox-theme-data/dark-flat-theme-abc.zip",
"/firefox-theme-data/dark-flat-theme.png",
"/firefox-theme-data/light-flat-theme-abc.zip",
"/firefox-theme-data/light-flat-theme.png",
"/firefox-theme.html",
"/geany-color-data/README.md",
"/geany-color-data/",
"/geany-color-data/abc-dark.conf",
"/geany-color-data/abc-dark.png",
"/geany-color-data/abc-light.conf",
"/geany-color-data/abc-light.png",
"/geany-color-data/dark.css",
"/geany-color-data/default.conf",
"/geany-color-data/light.css",
"/geany-color.html",
"/googlebae648489b2c26df.html",
"/images-data/2023/0-start-end-krita-png.png",
"/images-data/",
"/images-data/2023/",
"/images-data/2023/1-building-krita-png.png",
"/images-data/2023/10-barbie-time-inkscape-svg.svg",
"/images-data/2023/11-web-design-trend-svg-inkscape-svg.svg",
"/images-data/2023/12-ava-woman-laptop-inkscape-svg.svg",
"/images-data/2023/14-circle-olive-wallpaper-desktop-jpg.jpg",
"/images-data/2023/15-circle-light-wallpaper-desktop-jpg.jpg",
"/images-data/2023/16-circle-dark-wallpaper-desktop-jpg.jpg",
"/images-data/2023/17-dark-triangle-wallpaper-desktop-jpg.jpg",
"/images-data/2023/18-light-triangle-wallpaper-desktop-jpg.jpg",
"/images-data/2023/19-landscape-light-blue-wallpaper-desktop-inkscape-jpg.jpg",
"/images-data/2023/2-test-krita-png.png",
"/images-data/2023/20-landscape-dark-blue-wallpaper-desktop-inkscape-jpg.jpg",
"/images-data/2023/21-landscape-dark-blue-wallpaper-mobile-inkscape-jpg.jpg",
"/images-data/2023/22-landscape-light-blue-wallpaper-mobile-inkscape-jpg.jpg",
"/images-data/2023/23-binary-text-mobile-wallpaper-dark-inkscape-png.png",
"/images-data/2023/24-binary-text-mobile-wallpaper-light-inkscape-png.png",
"/images-data/2023/25-binary-text-desktop-wallpaper-light-inkscape-png.png",
"/images-data/2023/26-binary-text-desktop-wallpaper-dark-inkscape-png.png",
"/images-data/2023/26-music-note-icon-inkscape-svg.svg",
"/images-data/2023/27-editor-code-light-dark-mode-gif.gif",
"/images-data/2023/28-drawing-art-krita.png",
"/images-data/2023/29-transparent-background-inkscape.png",
"/images-data/2023/3-landscape-inkscape-svg.svg",
"/images-data/2023/30-ava-woman-laptop-inkscape-svg.svg",
"/images-data/2023/31-mail-art-inkscape.svg",
"/images-data/2023/32--hello-world-binary-text-dark-wallpaper--inkscape-png.png",
"/images-data/2023/33-hello-world-binary-text-light-wallpaper-binary-inkscape-png.png",
"/images-data/2023/34-logo-diamond-inkscape-png.png",
"/images-data/2023/4-star-inkscape-svg.svg",
"/images-data/2023/5-logo-x-inkscape-svg.svg",
"/images-data/2023/6-logo-t-inkscape-svg.svg",
"/images-data/2023/7-logo-x-inkscape-svg.svg",
"/images-data/2023/8-logo-x-inkscape-svg.svg",
"/images-data/2023/9-logo-x-inkscape-svg.svg",
"/images-data/2024/35-one-black-pixel-png-inkscape.png",
"/images-data/2024/",
"/images-data/2024/36-one-white-pixel-png-inkscape.png",
"/images-data/2024/37-one-transparent-pixel-png-inkscape.png",
"/images-data/2024/38-bg-white-png-krita.png",
"/images-data/2024/39-bg-black-png-krita.png",
"/images-data/2024/40-logo-circle-oval-svg-inkscape.svg",
"/images-data/2024/41-logo-circle-oval-png-inkscape.png",
"/images-data/index.html",
"/images.html",
"/img/404.png",
"/img/",
"/img/404.svg",
"/img/bg-dark.svg",
"/img/bg-light.svg",
"/img/favicon16x16.png",
"/img/github-banner-settings.png",
"/img/github-banner-settings.svg",
"/img/header-banner.png",
"/img/header-banner.svg",
"/img/logo (copy 1).svg",
"/img/logo.jpeg",
"/img/logo.png",
"/img/logo.svg",
"/img/maskable_logo.png",
"/img/other/art.png",
"/img/other/",
"/img/repository-open-graph-template.png",
"/img/screenshot.png",
"/img/screenshot2.png",
"/img/screenshot3.png",
"/img/tpl/ava.png",
"/img/tpl/",
"/img/tpl/ava.svg",
"/img/tpl/bg-dark.png",
"/img/tpl/bg-light.png",
"/img/tpl/favicon.ico",
"/img/tpl/favicon.png",
"/img/tpl/flower.png",
"/img/tpl/flower.svg",
"/img/tpl/header-banner.svg",
"/img/tpl/logo.png",
"/img/tpl/logo.svg",
"/img/tpl/logo2.png",
"/img/tpl/logo2.svg",
"/img/tpl/tree.svg",
"/img/tpl/woman.png",
"/img/tpl/woman.svg",
"/img/transparent.png",
"/img/transparent.svg",
"/index.html",
"/install.html",
"/js/ad.js",
"/js/",
"/js/cookieAgreePopup.js",
"/js/fuPostTime.js",
"/js/main.js",
"/js/script.js",
"/js/settings-options.js",
"/js/theme-options.js",
"/links.html",
"/lists.html",
"/main-list.html",
"/manifest.webmanifest",
"/mini-projects/2-responsive-web-design/index.html",
"/mini-projects/",
"/mini-projects/2-responsive-web-design/",
"/mini-projects/2-responsive-web-design/script.js",
"/mini-projects/2-responsive-web-design/style.css",
"/mini-projects/24-textarea/index.html",
"/mini-projects/24-textarea/",
"/mini-projects/24-textarea/style.css",
"/mini-projects/28-button-blur-unblur/index.html",
"/mini-projects/28-button-blur-unblur/",
"/mini-projects/28-button-blur-unblur/style.css",
"/mini-projects/29-light-and-dark-design/index.html",
"/mini-projects/29-light-and-dark-design/",
"/mini-projects/29-light-and-dark-design/style.css",
"/mini-projects/31-sun-and-moon-css/index.html",
"/mini-projects/31-sun-and-moon-css/",
"/mini-projects/31-sun-and-moon-css/style.css",
"/mini-projects/32-bento/index.html",
"/mini-projects/32-bento/",
"/mini-projects/32-bento/style.css",
"/mini-projects/33-heading/index.html",
"/mini-projects/33-heading/",
"/mini-projects/33-heading/style.css",
"/mini-projects/5-animated-borders-button-link/index.html",
"/mini-projects/5-animated-borders-button-link/",
"/mini-projects/5-animated-borders-button-link/style.css",
"/mini-projects/6-animation-test/index.html",
"/mini-projects/6-animation-test/",
"/mini-projects/6-animation-test/style.css",
"/mini-projects/7-background-with-linear-gradient-css/index.html",
"/mini-projects/7-background-with-linear-gradient-css/",
"/mini-projects/7-background-with-linear-gradient-css/style.css",
"/mini-projects/7-circle/index.html",
"/mini-projects/7-circle/",
"/mini-projects/7-circle/style.css",
"/mini-projects/a-tpl-project-mini/index.html",
"/mini-projects/a-tpl-project-mini/",
"/mini-projects/a-tpl-project-mini/style.css",
"/mini-projects/index.html",
"/mini-projects-list.html",
"/other-projects/index.html",
"/other-projects/",
"/other-projects/php-fuWebsiteToPWA/index.php",
"/other-projects/php-fuWebsiteToPWA/",
"/other-projects/php-fuWebsiteToPWA/php-fuWebsiteToPWA.php",
"/other-projects/php-fuWebsiteToPWA/php-fuWebsiteToPWA2HidenExt.php",
"/other-projects/python-hello-world/main.py",
"/other-projects/python-hello-world/",
"/other-projects-list.html",
"/pages.html",
"/photos-data/2023/10-branch.jpg",
"/photos-data/",
"/photos-data/2023/",
"/photos-data/2023/11-frog.jpg",
"/photos-data/2023/15-flower.jpg",
"/photos-data/2023/16-flower.jpg",
"/photos-data/2023/17-flower.jpg",
"/photos-data/2023/2-flower.jpg",
"/photos-data/2023/3-drop-and-branch.jpg",
"/photos-data/2023/4-drop-and-branch.jpg",
"/photos-data/2023/5-drop-and-branch.jpg",
"/photos-data/2023/6-flower.jpg",
"/photos-data/2023/7-drop-branch.jpg",
"/photos-data/2023/9-branch.jpg",
"/photos-data/index.html",
"/photos.html",
"/pinterest-bb1de.html",
"/projects/1-blog/index.html",
"/projects/",
"/projects/1-blog/",
"/projects/1-blog/script.js",
"/projects/1-blog/style.css",
"/projects/10-game-guess-number/index.html",
"/projects/10-game-guess-number/",
"/projects/10-game-guess-number/script.js",
"/projects/10-game-guess-number/style.css",
"/projects/11-game-memory-symbol/index.html",
"/projects/11-game-memory-symbol/",
"/projects/11-game-memory-symbol/manifest.webmanifest",
"/projects/11-game-memory-symbol/script.js",
"/projects/11-game-memory-symbol/style.css",
"/projects/11-game-memory-symbol/sw.js",
"/projects/12-game-snake/index.html",
"/projects/12-game-snake/",
"/projects/12-game-snake/script.js",
"/projects/12-game-snake/style.css",
"/projects/13-game-tic-tac-toe/index.html",
"/projects/13-game-tic-tac-toe/",
"/projects/13-game-tic-tac-toe/script.js",
"/projects/13-game-tic-tac-toe/style.css",
"/projects/14-typing-speed/index.html",
"/projects/14-typing-speed/",
"/projects/14-typing-speed/script.js",
"/projects/14-typing-speed/style.css",
"/projects/15-multi-highlight-word-hover/index.html",
"/projects/15-multi-highlight-word-hover/",
"/projects/15-multi-highlight-word-hover/script.js",
"/projects/15-multi-highlight-word-hover/style.css",
"/projects/17-insert-icon/index.html",
"/projects/17-insert-icon/",
"/projects/17-insert-icon/old-material-icon-script.js",
"/projects/17-insert-icon/script.js",
"/projects/17-insert-icon/style.css",
"/projects/18-video/index.html",
"/projects/18-video/",
"/projects/18-video/script.js",
"/projects/18-video/style.css",
"/projects/19-movie-list/index.html",
"/projects/19-movie-list/",
"/projects/19-movie-list/script.js",
"/projects/19-movie-list/style.css",
"/projects/2-browser-info-test-js/index.html",
"/projects/2-browser-info-test-js/",
"/projects/2-browser-info-test-js/script.js",
"/projects/2-browser-info-test-js/style.css",
"/projects/20-music/index.html",
"/projects/20-music/",
"/projects/20-music/script.js",
"/projects/20-music/style.css",
"/projects/21-pwa-test/index.html",
"/projects/21-pwa-test/",
"/projects/21-pwa-test/manifest.webmanifest",
"/projects/21-pwa-test/script.js",
"/projects/21-pwa-test/style.css",
"/projects/21-pwa-test/sw.js",
"/projects/22-radio/index.html",
"/projects/22-radio/",
"/projects/22-radio/script.js",
"/projects/22-radio/style.css",
"/projects/23-random-symbol-or-password-generator/index.html",
"/projects/23-random-symbol-or-password-generator/",
"/projects/23-random-symbol-or-password-generator/script.js",
"/projects/23-random-symbol-or-password-generator/style.css",
"/projects/24-random-text-generator/index.html",
"/projects/24-random-text-generator/",
"/projects/24-random-text-generator/script.js",
"/projects/24-random-text-generator/style.css",
"/projects/25-redirects/index.html",
"/projects/25-redirects/",
"/projects/25-redirects/script.js",
"/projects/25-redirects/style.css",
"/projects/27-test/README.md",
"/projects/27-test/",
"/projects/27-test/cursor-hl.png",
"/projects/27-test/cursor-hl.psd",
"/projects/27-test/index.html",
"/projects/27-test/manifest.webmanifest",
"/projects/27-test/screenshot.png",
"/projects/27-test/script.js",
"/projects/27-test/style.css",
"/projects/27-test/sw.js",
"/projects/28-time-binary-clock/index.html",
"/projects/28-time-binary-clock/",
"/projects/28-time-binary-clock/script.js",
"/projects/28-time-binary-clock/style.css",
"/projects/29-time-clock/index.html",
"/projects/29-time-clock/",
"/projects/29-time-clock/script.js",
"/projects/29-time-clock/style.css",
"/projects/3-calculator/index.html",
"/projects/3-calculator/",
"/projects/3-calculator/script.js",
"/projects/3-calculator/style.css",
"/projects/30-time-stopwatch/index.html",
"/projects/30-time-stopwatch/",
"/projects/30-time-stopwatch/script.js",
"/projects/30-time-stopwatch/style.css",
"/projects/31-todo-list-task/index.html",
"/projects/31-todo-list-task/",
"/projects/31-todo-list-task/script.js",
"/projects/31-todo-list-task/style.css",
"/projects/32-todo-list-idea/index.html",
"/projects/32-todo-list-idea/",
"/projects/32-todo-list-idea/script.js",
"/projects/32-todo-list-idea/style.css",
"/projects/35-transliterate/index.html",
"/projects/35-transliterate/",
"/projects/35-transliterate/script.js",
"/projects/35-transliterate/style.css",
"/projects/36-tv/index.html",
"/projects/36-tv/",
"/projects/36-tv/script.js",
"/projects/36-tv/style.css",
"/projects/37-weather/index.html",
"/projects/37-weather/",
"/projects/37-weather/script.js",
"/projects/37-weather/style.css",
"/projects/38-rain/index.html",
"/projects/38-rain/",
"/projects/38-rain/script.js",
"/projects/38-rain/style.css",
"/projects/39-count-symbol/index.html",
"/projects/39-count-symbol/",
"/projects/39-count-symbol/script.js",
"/projects/39-count-symbol/style.css",
"/projects/39-text-to-binary/index.html",
"/projects/39-text-to-binary/",
"/projects/39-text-to-binary/script.js",
"/projects/39-text-to-binary/style.css",
"/projects/4-color-picker/index.html",
"/projects/4-color-picker/",
"/projects/4-color-picker/script.js",
"/projects/4-color-picker/style.css",
"/projects/40-average-number/index.html",
"/projects/40-average-number/",
"/projects/40-average-number/script.js",
"/projects/40-average-number/style.css",
"/projects/41-start-page/index.html",
"/projects/41-start-page/",
"/projects/41-start-page/script.js",
"/projects/41-start-page/style.css",
"/projects/42-quiz/index.html",
"/projects/42-quiz/",
"/projects/42-quiz/script (copy 1).js",
"/projects/42-quiz/script.js",
"/projects/42-quiz/style.css",
"/projects/43-text-to-url/index.html",
"/projects/43-text-to-url/",
"/projects/43-text-to-url/script.js",
"/projects/43-text-to-url/style.css",
"/projects/46-google-trends/index.html",
"/projects/46-google-trends/",
"/projects/46-google-trends/script.js",
"/projects/46-google-trends/style.css",
"/projects/47-page-lag-test/index.html",
"/projects/47-page-lag-test/",
"/projects/47-page-lag-test/script.js",
"/projects/47-page-lag-test/style.css",
"/projects/48-effect-when-scroll-to-element/index.html",
"/projects/48-effect-when-scroll-to-element/",
"/projects/48-effect-when-scroll-to-element/script.js",
"/projects/48-effect-when-scroll-to-element/style.css",
"/projects/49-google-programmable-search/index.html",
"/projects/49-google-programmable-search/",
"/projects/49-google-programmable-search/script.js",
"/projects/49-google-programmable-search/style.css",
"/projects/5-demo-test-style/index.html",
"/projects/5-demo-test-style/",
"/projects/5-demo-test-style/script.js",
"/projects/5-demo-test-style/style.css",
"/projects/50-background-colors-list/index.html",
"/projects/50-background-colors-list/",
"/projects/50-background-colors-list/script.js",
"/projects/50-background-colors-list/style.css",
"/projects/51-random-color-generator/index.html",
"/projects/51-random-color-generator/",
"/projects/51-random-color-generator/script.js",
"/projects/51-random-color-generator/style.css",
"/projects/7-drawing/index.html",
"/projects/7-drawing/",
"/projects/7-drawing/script.js",
"/projects/7-drawing/style.css",
"/projects/8-dropdown-menu/index.html",
"/projects/8-dropdown-menu/",
"/projects/8-dropdown-menu/script.js",
"/projects/8-dropdown-menu/style.css",
"/projects/9-game-dice/index.html",
"/projects/9-game-dice/",
"/projects/9-game-dice/script.js",
"/projects/9-game-dice/style.css",
"/projects/a1-tpl-project/README.md",
"/projects/a1-tpl-project/",
"/projects/a1-tpl-project/index.html",
"/projects/a1-tpl-project/manifest.webmanifest",
"/projects/a1-tpl-project/screenshot.png",
"/projects/a1-tpl-project/script.js",
"/projects/a1-tpl-project/style.css",
"/projects/a1-tpl-project/sw.js",
"/projects/a2-tpl-project-mini/index.html",
"/projects/a2-tpl-project-mini/",
"/projects/a2-tpl-project-mini/script.js",
"/projects/a2-tpl-project-mini/style.css",
"/projects/index.html",
"/projects-list.html",
"/robots.txt",
"/rss.xml",
"/search.html",
"/settings.html",
"/sitemap.html",
"/sitemap.xml",
"/sw.js",
"/templates-data/1-simple-text-template/index.html",
"/templates-data/",
"/templates-data/1-simple-text-template/",
"/templates-data/1-simple-text-template/style.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/d-blue.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/d-green.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/d-orange.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/d-pink.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/d-plum.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/d-purple.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/d-red.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/d-sea.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/d-violet.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/d-yellow.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/dark.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/empty.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/hight-contrast-dark.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/hight-contrast-light.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/l-blue.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/l-green.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/l-olive.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/l-orange.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/l-pink.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/l-plum.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/l-purple.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/l-red.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/l-sea.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/l-seashell.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/l-violet.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/l-yellow.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/light.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/o-blue.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/o-green.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/o-lime.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/o-mint.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/o-olive.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/o-orange.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/o-pink.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/o-plum.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/o-purple.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/o-sea.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/o-silver.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/o-violet.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/o-yellow.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/od-blue.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/od-brown.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/od-forest.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/od-gray.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/od-green.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/od-olive.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/od-pink.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/od-plum.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/od-purple.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/od-red.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/od-sea.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/od-slate.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/od-violet.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/od-yellow.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/css/style.css",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/index.html",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/menu.html",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/menu2.html",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/page.html",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/script.js",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/theme-options.js",
"/templates-data/10-home-page-website-template-many-auto-colors-themes-flat-abc/theme.html",
"/templates-data/11-movie-website-template-auto-light-dark-flat-abc/index.html",
"/templates-data/11-movie-website-template-auto-light-dark-flat-abc/",
"/templates-data/11-movie-website-template-auto-light-dark-flat-abc/movie-id.html",
"/templates-data/11-movie-website-template-auto-light-dark-flat-abc/movie-poster.png",
"/templates-data/11-movie-website-template-auto-light-dark-flat-abc/movie-poster2.png",
"/templates-data/11-movie-website-template-auto-light-dark-flat-abc/name.html",
"/templates-data/11-movie-website-template-auto-light-dark-flat-abc/search.html",
"/templates-data/11-movie-website-template-auto-light-dark-flat-abc/style.css",
"/templates-data/12-profile-card-website-template-auto-light-dark-flat-mini-abc/index.html",
"/templates-data/12-profile-card-website-template-auto-light-dark-flat-mini-abc/",
"/templates-data/12-profile-card-website-template-auto-light-dark-flat-mini-abc/style.css",
"/templates-data/14-profile-card-website-template-auto-light-dark-flat-mini-abc/index.html",
"/templates-data/14-profile-card-website-template-auto-light-dark-flat-mini-abc/",
"/templates-data/14-profile-card-website-template-auto-light-dark-flat-mini-abc/style.css",
"/templates-data/15-one-page-website-template-auto-light-dark-flat-mini-abc/circle.svg",
"/templates-data/15-one-page-website-template-auto-light-dark-flat-mini-abc/",
"/templates-data/15-one-page-website-template-auto-light-dark-flat-mini-abc/coffee.svg",
"/templates-data/15-one-page-website-template-auto-light-dark-flat-mini-abc/index.html",
"/templates-data/15-one-page-website-template-auto-light-dark-flat-mini-abc/style.css",
"/templates-data/16-personal-one-page-website-template-mini-light-dark-flat-mini-abc/index.html",
"/templates-data/16-personal-one-page-website-template-mini-light-dark-flat-mini-abc/",
"/templates-data/16-personal-one-page-website-template-mini-light-dark-flat-mini-abc/style.css",
"/templates-data/17-flower-personal-one-page-website-template-auto-light-dark-flat-mini-abc/flower.svg",
"/templates-data/17-flower-personal-one-page-website-template-auto-light-dark-flat-mini-abc/",
"/templates-data/17-flower-personal-one-page-website-template-auto-light-dark-flat-mini-abc/index.html",
"/templates-data/17-flower-personal-one-page-website-template-auto-light-dark-flat-mini-abc/style.css",
"/templates-data/18-photo-gallery-one-page-website-template-flat-auto-light-dark-abc/index.html",
"/templates-data/18-photo-gallery-one-page-website-template-flat-auto-light-dark-abc/",
"/templates-data/18-photo-gallery-one-page-website-template-flat-auto-light-dark-abc/style.css",
"/templates-data/19-saas-landing-page-auto-light-dark-abc/index.html",
"/templates-data/19-saas-landing-page-auto-light-dark-abc/",
"/templates-data/19-saas-landing-page-auto-light-dark-abc/login.html",
"/templates-data/19-saas-landing-page-auto-light-dark-abc/product.png",
"/templates-data/19-saas-landing-page-auto-light-dark-abc/product2.png",
"/templates-data/19-saas-landing-page-auto-light-dark-abc/product3.png",
"/templates-data/19-saas-landing-page-auto-light-dark-abc/product4.png",
"/templates-data/19-saas-landing-page-auto-light-dark-abc/style.css",
"/templates-data/2-personal-website-template/index.html",
"/templates-data/2-personal-website-template/",
"/templates-data/2-personal-website-template/style.css",
"/templates-data/20-template-home-page-auto-light-dark-abc/image.png",
"/templates-data/20-template-home-page-auto-light-dark-abc/",
"/templates-data/20-template-home-page-auto-light-dark-abc/index.html",
"/templates-data/20-template-home-page-auto-light-dark-abc/page.html",
"/templates-data/20-template-home-page-auto-light-dark-abc/style.css",
"/templates-data/3-personal-website-template/index.html",
"/templates-data/3-personal-website-template/",
"/templates-data/3-personal-website-template/style.css",
"/templates-data/4-simple-website-template/index.html",
"/templates-data/4-simple-website-template/",
"/templates-data/4-simple-website-template/style.css",
"/templates-data/5-simple-website-template/index.html",
"/templates-data/5-simple-website-template/",
"/templates-data/5-simple-website-template/style.css",
"/templates-data/6-simple-website-template/index.html",
"/templates-data/6-simple-website-template/",
"/templates-data/6-simple-website-template/style.css",
"/templates-data/7-simple-website-template/index.html",
"/templates-data/7-simple-website-template/",
"/templates-data/7-simple-website-template/style.css",
"/templates-data/8-simple-website-template/index.html",
"/templates-data/8-simple-website-template/",
"/templates-data/8-simple-website-template/style.css",
"/templates-data/9-home-page-website-template-auto-light-dark-flat-abc/css/style.css",
"/templates-data/9-home-page-website-template-auto-light-dark-flat-abc/",
"/templates-data/9-home-page-website-template-auto-light-dark-flat-abc/css/",
"/templates-data/9-home-page-website-template-auto-light-dark-flat-abc/index.html",
"/templates-data/9-home-page-website-template-auto-light-dark-flat-abc/menu.html",
"/templates-data/9-home-page-website-template-auto-light-dark-flat-abc/menu2.html",
"/templates-data/9-home-page-website-template-auto-light-dark-flat-abc/page.html",
"/templates-data/a0-none/index.html",
"/templates-data/a0-none/",
"/templates-data/a0-none/style.css",
"/templates-data/index.html",
"/templates.html",
"/text.html",
"/theme.html",
"/video/video.mp4",
"/video/",
"/vscode-theme-data/README.md",
"/vscode-theme-data/",
"/vscode-theme-data/dark-theme-color.json",
"/vscode-theme-data/icon.png",
"/vscode-theme-data/light-theme-color.json",
"/vscode-theme-data/package.json",
"/vscode-theme-data/screenshot-dark.png",
"/vscode-theme-data/screenshot-light.png",
"/vscode-theme-data/theme-abc-1.3.57.vsix",
"/vscode-theme-data/theme-abc-1.5.3.vsix",
"/vscode-theme.html",
"/web-search.html",
"/",];
fileListArr.push("no_exit_file_name_for_test.hmtl");

//https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
fileListArr = [...new Set(fileListArr)]; 




fileListArr.forEach((file) => {
//https://stackoverflow.com/questions/68595209/js-fetch-check-if-file-present-without-downloading-content

//file = '/' + file;

//rm ext
var newFile = hideLinkExt(file);



// with ext
fetch(
file, { method: "HEAD" }
)
.then((res) => {
if (res.ok) {
// file is present at URL
console.log('try cache.add ' + file);
//https://web.dev/learn/pwa/caching/
caches.open("v.1.2.2024.02.09")
.then(cache => {
cache.add(file); // it stores only one resource
//  cache.addAll(["styles.css", "app.js"]); // it stores two resources
});
} else {
console.log('404 not found ' + file);
// file is not present at URL
}
});


// no ext
fetch(
newFile, { method: "HEAD" }
)
.then((res) => {
if (res.ok) {
// file is present at URL
console.log('try cache.add ' + newFile);
//https://web.dev/learn/pwa/caching/
caches.open("v.1.2.2024.02.09")
.then(cache => {
cache.add(newFile); // it stores only one resource
//  cache.addAll(["styles.css", "app.js"]); // it stores two resources
});
} else {
console.log('404 not found ' + newFile);
// file is not present at URL
}
});


});



});

}




// rm old cache
//https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/delete
this.addEventListener("activate", (event) => {
  const cachesToKeep = ["v.1.2.2024.02.09"];

  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cachesToKeep.includes(key)) {
            return caches.delete(key);
          }
        }),
      ),
    ),
  );
});




// read cache

/*//https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#basic_architecture
const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request, {ignoreSearch: true});
  if (responseFromCache) {
    return responseFromCache;
  }
return fetch(request);
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});*/

//https://web.dev/learn/pwa/serving
// cache first
self.addEventListener("fetch", event => {
   event.respondWith(
     caches.match(event.request, {ignoreSearch: true})
     .then(cachedResponse => {
       // It can update the cache to serve updated content on the next request
return cachedResponse || fetch(event.request);
     }
   )
  )
});



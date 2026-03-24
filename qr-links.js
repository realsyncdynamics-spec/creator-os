/* QR-Code & Link Generator for all 12 Apps */
(function(){
  // CSS for QR section
  var style = document.createElement('style');
  style.textContent = '.mqr{display:flex;align-items:center;gap:12px;margin:10px 0;padding:10px;border:1px solid var(--bd);background:rgba(255,255,255,.02);}.mqr img{width:90px;height:90px;border:1px solid var(--bd2);background:#fff;}.mqr-info{flex:1;}.mqr-url{font-family:"DM Mono",monospace;font-size:7.5px;color:var(--cyan);word-break:break-all;display:block;margin-bottom:4px;text-decoration:none;}.mqr-lbl{font-family:"DM Mono",monospace;font-size:6.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);margin-bottom:3px;display:block;}.mqr-copy{font-family:"DM Mono",monospace;font-size:7px;padding:3px 8px;border:1px solid var(--bd);background:transparent;color:var(--sub);cursor:pointer;transition:all .12s;}.mqr-copy:hover{border-color:var(--gold);color:var(--gold);}';
  document.head.appendChild(style);

  // Override openApp to inject QR code
  var _orig = window.openApp;
  window.openApp = function(i) {
    var result = _orig(i);
    var a = APPS[i];
    var qrBox = document.getElementById('moQrBox');
    if (!qrBox) {
      qrBox = document.createElement('div');
      qrBox.id = 'moQrBox';
      qrBox.className = 'mqr';
      var tagsDiv = document.getElementById('moTa');
      if (tagsDiv) tagsDiv.after(qrBox);
    }
    var qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=' + encodeURIComponent(a.url);
    qrBox.innerHTML = '<img src="' + qrUrl + '" alt="QR-Code ' + a.n + '">' +
      '<div class="mqr-info">' +
      '<span class="mqr-lbl">// APP-LINK & QR-CODE</span>' +
      '<a class="mqr-url" href="' + a.url + '" target="_blank">' + a.url + '</a>' +
      '<button class="mqr-copy" onclick="navigator.clipboard.writeText(this.previousElementSibling.href);this.textContent=\'Kopiert \u2713\';setTimeout(function(){this.textContent=\'Link kopieren\'}.bind(this),1500)">Link kopieren</button>' +
      '</div>';
    return result;
  };
})();

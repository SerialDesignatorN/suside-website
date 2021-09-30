var platform = "none";
var btn_download = document.getElementById('down');

if (navigator.userAgent.indexOf("Win") != -1) {
    platform = "win";
    console.log("detected windows");
    btn_download.innerHTML = '<i class="fas fa-download"></i> Download for Windows';
}
else if (navigator.userAgent.indexOf("Mac") != -1) {
    platform = "mac";
    console.log("detected macos");
    btn_download.innerHTML = '<i class="fas fa-download"></i> Mac is unsupported yet! Check back soon!';
}
else if (navigator.userAgent.indexOf("Linux") != -1) {
    platform = "linux";
    console.log("detected linux (any distro)");
    btn_download.innerHTML = '<i class="fas fa-download"></i> Download for Linux (AppImage)';
}
else if (navigator.userAgent.indexOf("Android") != -1) {
    platform = "android";
    console.log("detected android");
    btn_download.innerHTML = '<i class="fas fa-download"></i> Android is unsupported! Check back soon!';
}
else if (navigator.userAgent.indexOf("like Mac") != -1) {
    platform = "ios";
    console.log("detected ios");
    btn_download.innerHTML = '<i class="fas fa-download"></i> iOS is unsupported! Check back soon!';
}

btn_download.onclick = function() {
    if (platform == "win") {
        window.location.href = "https://github.com/zeankundev/suside/releases/download/2.3.2/Suside.Editor_Installer_2.3.2_win.exe"
    }
    else if (platform == "linux") {
        window.location.href = "https://github.com/zeankundev/suside/releases/download/2.3.2/Suside.Editor_Installer_2.3.2_linux_x86_64.AppImage"
    }
    else if (platform == "mac") {
        window.location.href = "https://bit.ly/2VHhZ4I"
    }
    else if (platform == "android") {
        window.location.href = "https://bit.ly/2VHhZ4I"
    }
    else if (platform == "ios") {
        window.location.href = "https://bit.ly/2VHhZ4I"
    }
}

function useFullscreen(isFullScreen) {
    isFullScreen.value = !isFullScreen.value
    if (isFullScreen.value) {
        let el = document.documentElement;
        let doc = el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
        doc.call(document.documentElement);
        // document.documentElement.webkitRequestFullScreen()
    } else {
        // document.webkitCancelFullScreen();
        let el = document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msCancelFullscreen;
        el.call(document);
    }
}

export default useFullscreen
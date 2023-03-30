var contentEditor;

$(function() {
    contentEditor = editormd("md-content", {
        width   : "100%",
        height  : 640,
        syncScrolling : "single",
        path    : "../static/lib/editormd/lib/"
    });
});
$(document).ready(function(){
    $("html").click(function(){
        toggle_color_scheme();
    });
});

function toggle_color_scheme () {
    if ($("#triangles_w").is(":visible")) {
        console.log("dd");
        $("#triangles_w").hide();
    } else {
        $("#triangles_w").show();
    };
}
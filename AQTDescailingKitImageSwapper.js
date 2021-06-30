$(document).ready(function() {

    $(".smallPic1").click(function() {
        $(".bigPic").show();
        $(".imgVid").hide();
        $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t4828/src/14c83ad68b194bdfa092fa9b0c19ca11_1.jpg");

    });

    $(".smallPic2").click(function() {
        $(".bigPic").show();
        $(".imgVid").hide();
        $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t4828/src/61a5f88f47e143b599e4a2abce626715_1.jpg");

    });

    $(".smallPic3").click(function() {
        $(".bigPic").show();
        $(".imgVid").hide();
        $(".bigPic img").attr("src","https://mojonow.blob.core.windows.net/cmr/t4828/src/126e2e3dc4144dd7a6cc1693797608a9_1.jpg");

    });

    $(".smallPic4").click(function() {
        $(".bigPic").hide();
        $(".imgVid").show();
    });
            
});
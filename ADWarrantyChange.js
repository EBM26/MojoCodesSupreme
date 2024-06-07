$(document).ready(function() {

    $(".widget-control__field").change(function(){

        if ( $(this).val() === '123612'){
         $('.bigIMG img').attr("src","https://mojonow.blob.core.windows.net/cmr/t17585/src/180b3206b51941ee98b5956fcaa98e8e_1.png");
        }

        if ( $(this).val() === '123614'){
         $("#priceChange").html("$59.95");
         $('.bigIMG img').attr("src","https://mojonow.blob.core.windows.net/cmr/t17585/src/f125d5a9c4d04f809b69df37af75a791_1.png");
        }

       if ( $(this).val() === '123616'){
         $("#priceChange").html("$59.95");
         $('.bigIMG img').attr("src","https://mojonow.blob.core.windows.net/cmr/t17585/src/76f6694ac08142129953855c375152d0_1.png");
        }

        if ( $(this).val() === '123618'){
         $("#priceChange").html("$59.95");
         $('.bigIMG img').attr("src","https://mojonow.blob.core.windows.net/cmr/t17585/src/ee63aef3268447d697ac336882bd9912_1.png");
        }

        if ( $(this).val() === '123620'){
         $("#priceChange").html("$64.95");
         $('.bigIMG img').attr("src","https://mojonow.blob.core.windows.net/cmr/t17585/src/c226b9ff244245988994831079c7dfd5_1.png");
        }

        if ( $(this).val() === '123622'){
         $("#priceChange").html("$64.95");
         $('.bigIMG img').attr("src","https://mojonow.blob.core.windows.net/cmr/t17585/src/02e88e5b2ebe4211984d1b1006ed7d98_1.png");
        }

    });


 });





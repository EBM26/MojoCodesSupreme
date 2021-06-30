

$(document).ready(function() {

    $(".leadContaminat").click(function() {
        $(".contaminant").removeClass("activeContaminant");
        $(this).addClass("activeContaminant");
        $(".bigContaminant").html('LEAD');
        $(".contaminantDetails").html('Lead ends up contaminating drinking water when it leaches from pipes and plumbing. Any amount of lead exposure is unsafe for children and may cause permanent development and behavioral issues.');
    });

    $(".chlorineContaminat").click(function() {
        $(".contaminant").removeClass("activeContaminant");
        $(this).addClass("activeContaminant");
        $(".bigContaminant").html('CHLORINE');
        $(".contaminantDetails").html('Necessary to disinfect our water of any waterborne diseases, but a potent chemical that alters the smell & taste of our water and is harmful in high doses.');
    });

    $(".nitrateContaminat").click(function() {
        $(".contaminant").removeClass("activeContaminant");
        $(this).addClass("activeContaminant");
        $(".bigContaminant").html('NITRATE');
        $(".contaminantDetails").html('Agricultural run-off can cause this fertilizer chemical to end up in our drinking water. Levels of nitrate that exceed federal limits can cause an increased risk of cancer and even oxygen deprivation in babies.');
    });

    $(".pfasContaminat").click(function() {
        $(".contaminant").removeClass("activeContaminant");
        $(this).addClass("activeContaminant");
        $(".bigContaminant").html('PFAs');
        $(".contaminantDetails").html('The most common PFAS found in drinking water are PFOS and PFOA. Called ‘forever chemicals’ because they take so long to biodegrade, PFAS can cause serious health effects including cancer, hormone disruption, & liver and immune system damage.');
    });

    $(".fluorideContaminat").click(function() {
        $(".contaminant").removeClass("activeContaminant");
        $(this).addClass("activeContaminant");
        $(".bigContaminant").html('FLUORIDE');
        $(".contaminantDetails").html('While fluoride is effective for topical use for teeth, consuming fluoride at unsafe levels can cause skeletal fluorosis, making bones more brittle.');
    });

    $(".arsenicContaminat").click(function() {
        $(".contaminant").removeClass("activeContaminant");
        $(this).addClass("activeContaminant");
        $(".bigContaminant").html('ARSENIC');
        $(".contaminantDetails").html('A “known human carcinogen” according to the EPA and World Health Organization that increases the risk of bladder, lung and skin cancer at unsafe levels. Arsenic is found in drinking water across all 50 states.');
    });

});
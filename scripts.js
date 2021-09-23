// Data Privacy Modal
$(document).ready(function(){
    $("#dataPrivacy").modal("show");
})

// NBI Online Registration form TOS
$(function () {
    $("#reg_terms").click(function () {
        if ($(this).is(":checked")) {
            $("#reg_register").fadeIn();
        } else {
            $("#reg_register").fadeOut();
        }
    });
});

// NBI Old ID Recovery
$('select').change(function() {
    if (this.value == 'Email') {
        $('#recover_email').fadeIn();
        $('#recover_mobile').hide();
    } else if (this.value == 'Mobile'){
        $('#recover_email').hide();
        $('#recover_mobile').fadeIn();
    }
  });

// FTJ reminder
$(function () {
    $("#ftj_reminder").click(function () {
        $("#firstTimeJobseeker").fadeIn();
    });
});

// First Time Jobseeker TOS
$(function () {
    $("#ftj_terms").click(function () {
        if ($(this).is(":checked")) {
            $("#ftj_register").fadeIn();
        } else {
            $("#ftj_register").fadeOut();
        }
    });
});

function submit_ajax_form(id) {
    var postUrl = $("#" + id).attr('action');
    var formClass = '#' + id;
    $('#' + id).ajaxSubmit({
        url: postUrl,
        dataType: 'json',
        beforeSend: function () {
            $('#wait-div').show();
        },
        success: function (response) {
            $(formClass).find('.ajax_report').removeClass('alert-success').removeClass('alert-danger').fadeIn(200);
            $('#wait-div').hide();
            if (response.success)
                $(formClass).find('.ajax_report').addClass('alert-success').children('.ajax_message').html(response.success_message);
            else
                $(formClass).find('.ajax_report').addClass('alert-danger').children('.ajax_message').html(response.error_message);
            if (response.url)
            {
                setTimeout(function () {
                    window.location.href = response.url;
                }, 700);
            }
            if (response.resetForm)
                $(formClass).resetForm();
            if (response.selfReload)
            {
                //location.reload();
                setTimeout(function () {
                    location.reload();
                }, 700);
            }
            if (response.scrollToElement)
                scrollToElement(formClass, 1000);
            if (response.ajaxCallBackFunction)
                ajaxCallBackFunction(response);
            setTimeout(function () {
                $(formClass).find('.ajax_report').fadeOut(500);
            }, 10000);
        },
        error: function () {
            $('#wait-div').hide();
            alert('server error');
        }


    });
}

function scrollToElement(element, speed)
{
    $('html, body').animate({scrollTop: $(element).position().top - 70}, speed);
}

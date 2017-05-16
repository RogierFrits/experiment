$( document ).ready(function() {
    for (var i = 1; i < 32; i++) {
        $('#daypicker select')
            .append($("<option></option>")
                .attr("value",i)
                .text(i));
    }

    $('#startbutton').click(function() {
        var day = $('#daypicker select').val();
        if (day !== '-') {
            if (Number(day) % 2 === 0) {
                window.location.href = '/experiment/tutorials/code.html';
            } else {
                window.location.href = '/experiment/tutorials/docker.html';
            }
        } else {
            $('#daypicker').addClass('error');
        }
    });
});

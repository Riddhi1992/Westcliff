// $(document).ready(function() {
//     $(document).bind("click", function(e) {
//         $(e.target).closest("#activity tr .second").toggleClass("highlighted")
//     });
// });

$(document).ready(function () {
    $("td").click(function() {
        var content = $(this).text();
        var getHeading = $(this).closest('table').find('th').eq($(this).index()).text();

        if (content != "Not Available") {
            $(this).toggleClass("highlighted");

            if ($(this).hasClass("highlighted")) {
                $('#displaySelected').css("visibility", "visible");
                $('#displaySelected').css("margin-top", "2em");
                $('#result').append("<p>" + content + " at " + getHeading +"</p>");
                
            } else {
                $('#result p:contains(' + content + ')').remove();

                if ($('#result').has('p').length == false) {
                    $('#displaySelected').css("visibility", "hidden");
                    $('#displaySelected').css("margin-top", "0");
                }
            }
        }
    });
});


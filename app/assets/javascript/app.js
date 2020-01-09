$(document).ready(function(){
    $('#submit').on('click', function(event){
        event.preventDefault();
        var name = $('#name').val().trim();
        var photo = $('#photo').val().trim();
        var q1 = $('#q1').val();
        var q2 = $('#q2').val();
        var q3 = $('#q3').val();
        var q4 = $('#q4').val();
        var q5 = $('#q5').val();
        var q6 = $('#q6').val();
        var q7 = $('#q7').val();
        var q8 = $('#q8').val();
        var q9 = $('#q9').val();
        var q10 = $('#q10').val();
        $.post("/api/friends",
        {
            name: name,
            photo: photo,
            scores: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
        },
        function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
            $("#myModal").modal();
            $("#match").append("<p>" + data.name + "</p>");
            $("#match").append("<img class='matchimage' src='" + data.photo + "' alt='Photo'>");
            $("#name, #photo, #q1, #q2, #q3, #q4, #q5, #q6, #q7, #q8, #q9, #q10").val("");
        });
    });

    $(document.body).on("click", ".closemodal", function(event){
        event.preventDefault();
        $("#match").empty();
    });
});
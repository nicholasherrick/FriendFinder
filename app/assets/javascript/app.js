$(document).ready(function(){
    $('#submit').on('click', function(event){
        event.preventDefault();

        var name = $('#name').val().trim();
        var photo = $('#photo').val().trim();
        var q1 = $('#validationCustom01').val();
        var q2 = $('#validationCustom02').val();
        var q3 = $('#validationCustom03').val();
        var q4 = $('#validationCustom04').val();
        var q5 = $('#validationCustom05').val();
        var q6 = $('#validationCustom06').val();
        var q7 = $('#validationCustom07').val();
        var q8 = $('#validationCustom08').val();
        var q9 = $('#validationCustom09').val();
        var q10 = $('#validationCustom10').val();

        if(name && photo && q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10){
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
                $(".custom-select").val("");
            });
        }else{
            event.preventDefault();
            event.stopPropagation();

            $("#myModal").modal();
            $("#match").append("<p>Please answer all</p>");
        }
    });

    $(document.body).on("click", ".closemodal", function(event){
        event.preventDefault();
        $("#match").empty();
    });
});
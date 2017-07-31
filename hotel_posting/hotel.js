

        $(document).ready(function(){
        $("#checkInDate").datepicker();
        $("#checkOutDate").datepicker();
        $('#submit').click(function(){
        alert('test');
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var checkIn = $("#checkInDate").val();
    var checkOut = $("#checkOutDate").val();
    var numberOfGuest =  $("#numberOfGuest").val();
    var sent = '{"Firstname":"' + firstName + '","Lastname":"' + lastName + '","Email":"' + email +'", "Phone":"' + phone +'","Checkindate":"' + checkIn +'", "Checkoutdate":"' + checkOut +'","Numberofguest":"'+numberOfGuest +'"}'
    console.log(sent);
    

     $.ajax({
        url:"https://sheetsu.com/apis/v1.0/2d7bbae68bd5",
        type:"POST",
        data:sent,
        dataType:"json",
        contentType:"application/json; charset=utf-8",
        success: function(){
            alert('form sent')
        }
        })
        });
    });
   
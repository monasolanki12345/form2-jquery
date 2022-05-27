
$(document).ready(function () {



        var firstname = true;
        var lastname = true;
    var adrsarror = true;
    var cityname = true;
    var statename = true;
    var zipcode = true;
    var phonename = true;
    var emailname = true;
    var dropname = true;
    var radiobuttonname = true;
    var checkboxname = true;
    var suggestioname = true;
    var feddbackname = true;


    $("#t1").blur(function () {
        checkfname();
    });

    function checkfname() {
        var exp = /^[A-Za-z]+$/;
        var fn = $("#t1").val();

        if (fn == "") {
            $("#msg").html("this field is required");
            firstname = false;
            return false;

        }
        else {
            $("#msg").html(" ");

        }


        if (exp.test(fn) == false) {
            $("#msg").html("you can not enter numbers in fname");

            firstname = false;
            return false;


        }
        else {
            $("#msg").html(" ");

        }


    }


    $("#t2").blur(function () {
        checklname();
    });

    function checklname() {
        var exp1 = /^[A-Za-z]+$/;
        var ln = $("#t2").val();

        if (ln == "") {
            $("#msg1").html("this field is required");
            lastname = false;
            return false;
        }
        else {
            $("#msg1").html(" ");
            return true;
        }

        if (exp1.test(ln) == false) {
            $("#msg1").html("you can not enter numbers in last Name");

            lastname = false;
            return false;
        }
        else {
            $("#msg1").html(" ");
            return true;
        }

    }


    $("#t3").blur(function () {
        checkaddress();
    });
    function checkaddress() {

        var adrs = $("#t3").val();

        if (adrs == "") {
            $("#msg3").html("this field is required");
            adrsarror = false;
            return false;
        }
        else {
            $("#msg3").html(" ");
            return true;
        }

    }


    $("#t4").blur(function () {
        checkcityname();
    });

    function checkcityname() {
        var exp3 = /^[A-Za-z]+$/;
        var city = $("#t4").val();

        if (city == "") {
            $("#msg4").html("this field is required");
            cityname = false;
            return false;
        }
        else {
            $("#msg4").html(" ");
            return true;
        }

        if (exp3.test(city) == false) {
            $("#msg4").html("you can not enter numbers in City Name");

            cityname = false;
            return false;
        }
        else {
            $("#msg4").html(" ");
            return true;
        }

    }


    $("#t5").blur(function () {
        checkstatename();
    });

    function checkstatename() {
        var exp5 = /^[A-Za-z]+$/;
        var state = $("#t5").val();

        if (state == "") {
            $("#msg5").html("this field is required");
            statename = false;
            return false;
        }
        else {
            $("#msg5").html(" ");
            return true;
        }

        if (exp5.test(state) == false) {
            $("#msg5").html("you can not enter numbers in State Name");

            statename = false;
            return false;
        }
        else {
            $("#msg5").html(" ");
            return true;
        }

    }



    $("#zipid").blur(function () {
        checkzipcode();
    });

    function checkzipcode() {
        var expzip = /^\d{4}$|^\d{6}$/;
        var zip = $("#zipid").val();
        if (zip == "") {
            $("#zipmsg").html("this field is required");
            zipcode = false;
            return false;
        }
        else {
            if (expzip.test(zip) == false) {
                $("#zipmsg").html("incorrect zip code");
                zipcode = false;
                return false;
            }
            else {
                $("#zipmsg").html(" ");
                return true;
            }
        }

    }

    $("#t7").blur(function () {
        checkphonenumber();
    });


    function checkphonenumber() {
        var expphone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var g = $("#t7").val();

        if (g == "") {
            debugger
            $("#msg7").html("** Phone Number is required");
            phonename = false;
            return false;
        }
        else {
            if (expphone.test(g) == false) {
                $("#msg7").html("**Invalid phone number");
                phonename = false;
                return false;
            }
            else {
                $("#msg7").html(" ");
                return true;
            }
        }



    }

    $("#t6").blur(function () {
        checkemailid();
    });

    function checkemailid() {

        var expe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var f = $("#t6").val();
        if (f == "") {

            $("#msg6").html("** Email Id is required");
            emailname = false;
            return false;
        }
        else {
            if (expe.test(f) == false) {
                $("#msg6").html("*Invalid email  id");
                emailname = false;
                return false;
            }
            else {
                $("#msg6").html(" ");
                return true;
            }
        }



    }

    $("#dropid").blur(function () {
        checkdropdownlist();
    });

    function checkdropdownlist() {
        var dropv = $("#dropid").val();


        if (dropv == "") {
            $("#dropmsg").html("** this field is required");
            dropname = false;
            return false;
        }
        else {
            $("#dropmsg").html(" ");
            return true;
        }

    }

    $("#feedbackid").change(function () {
        feedback();
    });


    function feedback() {

        var fb = $("#feedbackid").val();
        if (fb.length < 5) {
            $("#feedbackmsg").html("** length of msg is too short");
            feddbackname = false;
            return false;
        }
        else {

            $("#feedbackmsg").html(" ");
            return true;
        }

    }

    $("#sid").change(function () {
        suggestionvalidation();
    });

    function suggestionvalidation() {

        var s = $("#sid").val();
        if (s.length < 5) {
            $("#smsg").html("** length of msg is too short");
            suggestioname = false;
            return false;
        }
        else {

            $("#smsg").html(" ");
            return true;
        }

    }





    $(".gender").blur(function () {


        checkradiobutton();
    });

    function checkradiobutton() {

        if ($('input[name=r]:checked').length == 0) {
            $("#radiomsg").html("atleast select one");
            radiobuttonname = false;
            return false;
        }
        else {
            $("#radiomsg").html(" ");
            return true;
        }
    }



    
    $(".checkbox").blur(function () {


        checkcheckbox();
    });

    function checkcheckbox() {

        if ($('input[name=check1]:checked').length == 0) {
            $("#check").html("this field is required");
            checkboxname = false;
            return false;
        }
        else {
            $("#check").html(" ");
            return true;
        }
    }


    $("#btn").click(function () {



        checkfname();
        checklname();
        checkaddress();
        checkcityname();
        checkstatename();
        checkzipcode();
        checkphonenumber();
        checkemailid();
        checkdropdownlist();
        feedback();
        suggestionvalidation();
        
        checkradiobutton();
        checkcheckbox();

        
        
        

        if (firstname == true && firstname == true && adrsarror == true && cityname == true && statename == true && zipcode==true && phonename==true &&emailname==true && dropname==true &&feddbackname==true &&suggestioname==true &&radiobuttonname==true &&checkboxname==true) {
            return true;
        }
        else {
            return false;
        }

    });


  




});














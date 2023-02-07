/* Populate the note for the Down Payment Percentage */

$(document).ready(function(){
    $("#PaymentsLeft").click(function(){
    if ($("#PaymentsLeft").val() == "9") {
        $("#SpanPercenta").text("The suggested Payment Percentage is 25%");
    } else if ($("#PaymentsLeft").val() == "8") {
        $("#SpanPercenta").text("The suggested Payment Percentage is 30%");
    } else if ($("#PaymentsLeft").val() == "7") {
        $("#SpanPercenta").text("The suggested Payment Percentage is 30%");
    } else if ($("#PaymentsLeft").val() == "6") {
        $("#SpanPercenta").text("The suggested Payment Percentage is 40%");
    } else if ($("#PaymentsLeft").val() == "5") {
        $("#SpanPercenta").text("The suggested Payment Percentage is 40%");
    } else if ($("#PaymentsLeft").val() == "4") {
        $("#SpanPercenta").text("The suggested Payment Percentage is 50%");
    } else if ($("#PaymentsLeft").val() == "3") {
        $("#SpanPercenta").text("The suggested Payment Percentage is 50%");
    } else if ($("#PaymentsLeft").val() == "2") {
        $("#SpanPercenta").text("The suggested Payment Percentage is 80%");
    } else if ($("#PaymentsLeft").val() == "1") {
        $("#SpanPercenta").text("The customer needs to pay in Full");
    } else  {
        $("#SpanPercenta").text(" ");
    }
     
    });
});



$(document).ready(function(){
    $("#btn1").click(function(){

        /* Down Payment Percentage */
        var DpPercenta = $("#percentage").val(); 
        var NumOfPayments = $("#PaymentsLeft").val();

        /* Premium and Fee*/
        var Premium = $("#PolicyPremium").val();
        var Down_policy = Math.round((Premium * DpPercenta)/100);
        var Finan_policy = Number(Premium - Down_policy)
        var Monty_Policy = Math.round(((Number(Finan_policy) * 0.13) + Finan_policy) / NumOfPayments)
        var Fee = 15

       
        /* Supplements */
        var SuppPremium1 = $("#SupplementPremium1").val();
        var SuppPremium2 = $("#SupplementPremium2").val();

        var Yes1 = $('input[name="yes_no"]:checked').val();
        var Yes2 = $('input[name="yes_no1"]:checked').val();
        
        var Down_supp1 = Math.round(Yes1 == 1 ? (SuppPremium1 * DpPercenta)/100 : SuppPremium1 );
        var Down_supp2 = Math.round(Yes2 == 1 ? (SuppPremium2 * DpPercenta)/100 : SuppPremium2);

        var Total_Dp_supplements = Number(Down_supp1) + Number(Down_supp2)
        var Total_Pif_supplements = Number(SuppPremium1) +  Number(SuppPremium2) 
 
        var Finan_Supp1 = Number(SuppPremium1 - Down_supp1)
        var Finan_Supp2 = Number(SuppPremium2 - Down_supp2)

        var Monty_Supp1 = SuppPremium1 > '1' ? Math.round(((Number(Finan_Supp1) * 0.13) + Finan_Supp1) / NumOfPayments) : "0";
        var Monty_Supp2 = SuppPremium2 > '1' ? Math.round(((Number(Finan_Supp2) * 0.13) + Finan_Supp2) / NumOfPayments) : "0";
        var Total_Monthly_supp = Number(Monty_Supp1) + Number(Monty_Supp2)
     

        var Full_Down_payment = Math.round(Number(Down_policy) + Number(Total_Dp_supplements) + Fee)
        var Total_monthly_payments = (Total_Monthly_supp + Monty_Policy)
        const Full_total = Number(Total_Pif_supplements) + Number(Premium) + Number(Fee);
    

        console.log(Full_Down_payment)
        console.log(Down_policy)
    /* PASS THE VALUES TO THE HTML */

        document.getElementById("DownPayment").innerHTML = Full_Down_payment;
        document.getElementById("MonthlyPayments").innerHTML = Total_monthly_payments;
        document.getElementById("Pif").innerHTML = Full_total;
    
        document.getElementById("af_policy").innerHTML = Finan_policy;
        document.getElementById("af_supp1").innerHTML = Finan_Supp1;
        document.getElementById("af_supp2").innerHTML = Finan_Supp2;

   });
  });



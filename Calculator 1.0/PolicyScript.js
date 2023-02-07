
// /* D E F I N E  M Y  V A R I A B L E S  T O  FILL IN THE HTML */
// const btn1 = document.getElementById('btn1');
// const Pif = document.getElementById('Pif');
// const DownPayment = document.getElementById('DownPayment');
// const MonthlyPayments = document.getElementById('MonthlyPayments')


//  /* T E R M S  V A R I A B L E */
//  const Terms = document.getElementById("Terms").value;
//  let number_of_payments = Terms == "12m" ? "10" : "4"
//  console.log(number_of_payments)

// function price1() {
//     /* F E E   S E C T I O N */
//     let tida = document.getElementById('PolicyPremium').value; //This is the Premium
//     // let tida = 550 // this value i will extracted from PolicyPremium
//     let percenta = (tida * 10)/100; //10 percent of premium
//     let percenta1 = percenta >= 75 ? "75": percenta //if more than 75 then 75 
//     let percenta2 = percenta1 <= 20 ? "20" : percenta1 //if less than 20 then 20
//     let percenta3 = percenta2.toString().substring(0,2); //to string to extract the 2 digits
//     let fee = Number(percenta3) // to number is the real fee
//     console.log(fee);

//     // /* T E R M S  V A R I A B L E */
//     // const Terms = document.getElementById("Terms").value;
//     // let number_of_payments = Terms == "12m" ? "10" : "4"
//     // console.log(number_of_payments)

//     /* P A I D  I N  F U L L   S E C T I O N */
//     let paid_in_full = fee + Number(tida);
//     console.log(paid_in_full)

//     /* D O W N  P A Y M E N T  S E C T I O N */
//     /*This section is for create the Down Payment*/
//     // let DpPercenta = 13;
//     let DpPercenta = document.getElementById('percentage').value;
//     let Dp_percenta;
//     if (Terms == "12m") {
//         Dp_percenta >= 1;
//     } else if (Terms == "6m") {
//         Dp_percenta >= 2;
//     } else {
//         // Dp_percenta = DpPercenta;
//         Dp_percenta = 3;
//     }
//     console.log(Dp_percenta.value)
   


//     let Premium_down = Math.round((tida * DpPercenta)/ 100);
//     console.log(Premium_down);
//     let Down_plusFee = Premium_down + fee;
//     console.log(Down_plusFee)

//     /* M O N T H L Y  P A Y M E N T S   S E C T I O N  */
//     // let number_of_payments = 10;
//     let Finance_policy = tida - Premium_down;
//     console.log(Finance_policy)
//     let finance_charge_policy =  Math.round((((Finance_policy * 13)/100)+Finance_policy))
//     let monthly_policy = finance_charge_policy/number_of_payments
//     console.log(monthly_policy);

//     /* W R I T E   T H E   V A L U E S   I N   T H E   H T M L  */
//     Pif.innerHTML = paid_in_full;
//     DownPayment.innerHTML = Down_plusFee;
//     MonthlyPayments.innerHTML = monthly_policy;


//     /* M M S   S E C T I O N */
//     const motorValue1 = document.querySelector('input[name="yes_no"]:checked').value;
//     // const motorValue2 = document.querySelector('input[name="yes_no1"]:checked');
//     // const motorValue3 = document.querySelector('input[name="yes_no2"]:checked');
//     // const motorValue4 = document.querySelector('input[name="yes_no3"]:checked');
//     // const motorValue5 = document.querySelector('input[name="yes_no4"]:checked');
//     console.log(motorValue1)
//     // console.log(motorValue2)
//     // console.log(motorValue3)
//     // console.log(motorValue4)
//     // console.log(motorValue5)

//     const motorPremium1= document.getElementById('SupplementPremium1');
//     // const motorPremium2= document.getElementById('SupplementPremium2');
//     // const motorPremium3 = document.getElementById('SupplementPremium3');
//     // const motorPremium4 = document.getElementById('SupplementPremium4');
//     // const motorPremium5 = document.getElementById('SupplementPremium5');
//     // console.log(motorPremium1)
//     // console.log(motorPremium2)
//     // console.log(motorPremium3)
//     // console.log(motorPremium4)
//     // console.log(motorPremium5)

//     let Supp1;
//     if (motorValue1 == "1") {
//         Supp1 = Math.round((motorPremium1.value * DpPercenta)/100)
//         console.log(motorPremium1.value * 13)
//         console.log(DpPercenta)
//     } else if (motorValue1 == "0") {
//         Supp1 = motorPremium1.value
//         console.log(motorPremium1.value)
//     }
//     else if (motorValue1 == null) {
//         Supp1 = "0"
//     } ;
//     console.log(Supp1)

 
// }

// btn1.addEventListener('click',price1);


// function SelectTerms() {
//     const ts = document.getElementById('Terms');
//     const Terms = ts[ts.selectedIndex].value;
//     console.log(Terms);
// }



/* U S I N G  J Q U E R Y */
/* Pre determine down payment percentage */
$(function(){
    $("#Terms").click(function(){
    if ($("#Terms").val() == "6m") {
       $("#percentage").val("23");
    } else  {
       $("#percentage").val("13");
    } 
  });
})



$(document).ready(function(){
    $("#btn1").click(function(){
    /* Variables of POLICY */
    // var Statusp_v = $('#Statusp').eq(0).val();
    var Terms_v = $("#Terms").val();
    var Company_v = $("#Company").val();
    var Coverage_v = $("#Coverage").val();
    var Numbercars_v = $("#Numbercars").val();

    /*  FEE VARIABLE */
    var basePremium = $("#PolicyPremium").val();
    var Fee1 = (basePremium * 0.10)
    var Fee2;
    if (Fee1 >= '75') {
        Fee2 = "75"
    } else if (Fee1 <= "20") {
        Fee2 = "20"
    } else {
        Fee2 = Fee1.toString().substring(0,2)
    }
    var Fee = Number(Fee2)
 
    /* Number of Payments */
    var NumOfPayments = Terms_v == "12m" ? "10" : "4"
    /* Down Payment Percentage */
    var DpPercenta = $("#percentage").val(); 

/* POLICY SECTION ******************************************************************/    
    var Premium = $("#PolicyPremium").val();
    var Down_policy = Math.round((Premium * DpPercenta)/100);
    var Finan_policy = Number(Premium - Down_policy)
    var Monty_Policy = Math.round(((Number(Finan_policy) * 0.13) + Finan_policy) / NumOfPayments)

    var viva_temp_fee = basePremium > 550 ? "30" : "15";
    var extra_fee;
    if (Company_v == "Unique") {
         extra_fee = Coverage_v == "Liability" ? "20" : "25";
    }  else if (Company_v == "UniqueCom") {
         extra_fee = "10";
    }
    else if (Company_v == "VivaSeguros") {
         extra_fee = Coverage_v == "Full Coverage" ? ((Number(Numbercars_v) * 5)+ Number(viva_temp_fee)) : Number(viva_temp_fee)
    } else {
         extra_fee = 0;
    }
    

/********************************************************************************** */
     /* Logic of the Total of Supplements */
/***********************************************************************/  
    
    var SuppPremium1 = $("#SupplementPremium1").val();
    var SuppPremium2 = $("#SupplementPremium2").val();
    var SuppPremium3 = $("#SupplementPremium3").val();
    var SuppPremium4 = $("#SupplementPremium4").val();
    var SuppPremium5 = $("#SupplementPremium5").val();

    var Yes1 = $('input[name="yes_no"]:checked').val();
    var Yes2 = $('input[name="yes_no1"]:checked').val();
    var Yes3 = $('input[name="yes_no2"]:checked').val();
    var Yes4 = $('input[name="yes_no3"]:checked').val();
    var Yes5 = $('input[name="yes_no4"]:checked').val();


    var Down_supp1 = Math.round(Yes1 == 1 ? (SuppPremium1 * DpPercenta)/100 : SuppPremium1 );
    var Down_supp2 = Math.round(Yes2 == 1 ? (SuppPremium2 * DpPercenta)/100 : SuppPremium2);
    var Down_supp3 = Math.round(Yes3 == 1 ? (SuppPremium3 * DpPercenta)/100 : SuppPremium3);
    var Down_supp4 = Math.round(Yes4 == 1 ? (SuppPremium4 * DpPercenta)/100 : SuppPremium4);
    var Down_supp5 = Math.round(Yes5 == 1 ? (SuppPremium5 * DpPercenta)/100 : SuppPremium5); 


   var Total_Dp_supplements = Number(Down_supp1) + Number(Down_supp2) + Number(Down_supp3) + Number(Down_supp4) + Number(Down_supp5)
   var Total_Pif_supplements = Number(SuppPremium1) +  Number(SuppPremium2) + Number(SuppPremium3) + Number(SuppPremium4) + Number(SuppPremium5) 

   var Finan_Supp1 = Number(SuppPremium1 - Down_supp1)
   var Finan_Supp2 = Number(SuppPremium2 - Down_supp2)
   var Finan_Supp3 = Number(SuppPremium3 - Down_supp3)
   var Finan_Supp4 = Number(SuppPremium4 - Down_supp4)
   var Finan_Supp5 = Number(SuppPremium5 - Down_supp5)

   var Monty_Supp1 = SuppPremium1 > '1' ? Math.round(((Number(Finan_Supp1) * 0.13) + Finan_Supp1) / NumOfPayments) : "0";
   var Monty_Supp2 = SuppPremium2 > '1' ? Math.round(((Number(Finan_Supp2) * 0.13) + Finan_Supp2) / NumOfPayments) : "0";
   var Monty_Supp3 = SuppPremium3 > '1' ? Math.round(((Number(Finan_Supp3) * 0.13) + Finan_Supp3) / NumOfPayments) : "0";
   var Monty_Supp4 = SuppPremium4 > '1' ? Math.round(((Number(Finan_Supp4) * 0.13) + Finan_Supp4) / NumOfPayments) : "0";
   var Monty_Supp5 = SuppPremium5 > '1' ? Math.round(((Number(Finan_Supp5) * 0.13) + Finan_Supp5) / NumOfPayments) : "0";
 
   var Total_Monthly_supp = Number(Monty_Supp1) + Number(Monty_Supp2) + Number(Monty_Supp3) + Number(Monty_Supp4) + Number(Monty_Supp5)
 
  /********************************************************************* */  

 /*  Calculator */
    var Full_Down_payment = Math.round(Number(Down_policy) + Number(Total_Dp_supplements) + Fee + Number(extra_fee))
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
    document.getElementById("af_supp3").innerHTML = Finan_Supp3;
    document.getElementById("af_supp4").innerHTML = Finan_Supp4;
    document.getElementById("af_supp5").innerHTML = Finan_Supp5;
    document.getElementById("company_fee").innerHTML = extra_fee;


    });
  });













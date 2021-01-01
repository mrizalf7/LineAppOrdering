function add(n, type) {
  
    total = $("#" + type + n).html();
    totalma = $("#totma").html();
    totalmi = $("#totmi").html();
    total++;
    $("#" + type + n).html(total);
    if(total == 1 && n==1 && type=="makanan") {
        $(".minusbutton1").css("visibility", "visible");
    }
    if(total == 1 && n==2 && type=="makanan") {
        $(".minusbutton2").css("visibility", "visible");
    }
    if(total == 1 && n==1 && type=="minuman") {
        $(".minusbutton3").css("visibility", "visible");
    }
    if(total == 1 && n==2 && type=="minuman") {
        $(".minusbutton4").css("visibility", "visible");
    }

    if(type == "makanan") {
        totalma++;
        $("#totma").html(totalma);
    } else {
        totalmi++;
        $("#totmi").html(totalmi);
    }

    totalHarga = (totalma*10000) + (totalmi*10000);
    $("#total").html(totalHarga);
 
}

function substract(n, type) {
    
    total = $("#" + type + n).html();
    totalma = $("#totma").html();
    totalmi = $("#totmi").html();
    total--;
    $("#" + type + n).html(total);
    
    if(total == 0 && n==1 && type=="makanan") {
        $(".minusbutton1").css("visibility", "hidden");
        total = $("#makanan1").html("");
    }
    if(total == 0 && n==2 && type=="makanan") {
        $(".minusbutton2").css("visibility", "hidden");
        total = $("#makanan2").html("");
    }
    if(total == 0 && n==1 && type=="minuman") {
        $(".minusbutton3").css("visibility", "hidden");
        total = $("#minuman1").html("");
    }
    if(total == 0 && n==2 && type=="minuman") {
        $(".minusbutton4").css("visibility", "hidden");
        total = $("#minuman2").html("");
    }

    if(type == "makanan") {
        totalma--;
        $("#totma").html(totalma);
    } else {
        totalmi--;
        $("#totmi").html(totalmi);
    }
    totalHarga = (totalma*10000) + (totalmi*10000);
    $("#total").html(totalHarga);
}

 
$(document).ready(function() {
    $(".minusbutton").css("visibility", "hidden");
});


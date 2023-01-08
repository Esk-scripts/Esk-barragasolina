$(".barragasolina").fadeOut();
$(".fuel-progress").fadeOut();
$(".fuel-container").fadeOut();
$("#gaso-icon").fadeOut();
$(".porcentaje").fadeOut();

$(function() {

    window.addEventListener('message', function(event) {
        const v = event.data;
        if (v.type === 'carhud:update') {
            if (v.isInVehicle) {
                $(".barragasolina").fadeIn();
                $("#gaso-icon").fadeIn();
                $(".fuel-container").fadeIn();
                $(".fuel-progress").fadeIn();
                $(".porcentaje").fadeIn();
                $(".fuel-progress").css("width", Math.round(v.fuel) + "%");
                $(".porcentaje").html(Math.round(v.fuel) + "/100");
                $(".porcentaje").html(Math.round(v.fuel) + "/100");

            } else {
                $(".fuel-progress").fadeOut();
                $(".fuel-container").fadeOut();
                $("#gaso-icon").fadeOut();
                $(".porcentaje").fadeOut();
            }
        }
    });
});
var electricityUserData = {
    readings: 95,
    units: "kWt",
    mode: "double",
};
var waterUserData = {
    readings: 3,
    units: "m3",
};
var elRate = 0.45;
var wRate = 2;
var monthPayments = [0, 0]; // [electricity, water]
var calculatePayments = function (elData, wData, elRate, wRate, monthPayments) {
    if (elData.mode === "double" && elData.readings < 50) {
        return monthPayments[0] = elData.readings * elRate * 0.7;
    }
    else {
        monthPayments[0] = elData.readings * elRate;
    }
    monthPayments[1] = wData.readings * wRate;
};
calculatePayments(electricityUserData, waterUserData, elRate, wRate, monthPayments);
var sendInvoice = function (monthPayments, elData, wData) {
    var text = " Hello!\n    This month you used ".concat(elData.readings, " ").concat(elData.units, " of electricity\n    It will cost: ").concat(monthPayments[0], "\u20AC\n    \n    This month you used ").concat(wData.readings, " ").concat(wData.units, " of water\n    It will cost: ").concat(monthPayments[1], "\u20AC\n\t");
    return text;
};
sendInvoice(monthPayments, electricityUserData, waterUserData);

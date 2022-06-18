$(document).ready(function () {
    $('#btn-save').click(function () {
        var isvalid = true;
        var inpStart = $('#start').val().trim();
        var inpEnd = $('#end').val().trim();

        var input1 = /^[0-9]{1,}$/gim;
        var input2 = /^[0-9]{1,}$/gim;
        if (inpStart == '') {
            $('#error-start').text('Không được để trống');
        } else if (!input1.test(inpStart)) {
            $('#error-start').text('Giá trị nhập vào chưa đúng định dạng');
        }
        else {
            $('#error-start').text('');
        }
        if (inpEnd == '') {
            $('#error-end').text('Không được để trống');
        } else if (!input2.test(inpEnd)) {
            $('#error-end').text('Giá trị nhập vào chưa đúng định dạng');
        }
        else {
            $('#error-end').text('');
        }
        if (inpStart > inpEnd || inpStart == inpEnd) {
            $('#error-end').text('Số cuối kỳ phải lớn hơn đầu kỳ');
        }
        var sum = 0;
        if (isvalid) {
            sum = inpEnd - inpStart;
            $('#output-letter').val(sum);
        }
        var tax = $('#tax').val().trim();
        var total = 0;
        if (sum > 0 && sum < 50) {
            total = (sum * 1480)*tax;
            $('#output-amount').val(total);
        }
        if(sum > 50 && sum < 100){
            total = ((sum-50)*1500+(50*1480))*tax;
            $('#output-amount').val(total);
        }
        if(sum > 100){
            total = (50*1500+50*1480+(sum-100)*1800)*tax;
            $('#output-amount').val(total);
        }
    })
    $('#btn-clear').click(function () {
        $('#start').val('');
        $('#end').val('');
    });

})

// ko load page
$('#btn-save').click(function (e) {
    e.preventDefault();
})

$('#btn-clear').click(function (e) {
    e.preventDefault();
});



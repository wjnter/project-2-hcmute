let statusBulb_1 = false;
let statusBulb_2 = false;
let statusFan = false;
let mode = true; //mode false => chế độ chỉnh tay manual
let getTimeOn = "";
let getTimeOff = "";


// Chức năng Đèn 1
function toggleStatusBulb_1() {
  statusBulb_1 = !statusBulb_1;
  if (statusBulb_1) {
    document.getElementById('bulb-1-status').innerHTML = 'on';
    document.getElementById('bulb-1').style.backgroundColor = 'yellow';

  } else {
    document.getElementById('bulb-1-status').innerHTML = 'off';
    document.getElementById('bulb-1').style.backgroundColor = 'grey';
  }
  console.log('Đèn 1 đang mở:', statusBulb_1);
}

// Chức năng Đèn 2
function toggleStatusBulb_2() {
  statusBulb_2 = !statusBulb_2; 
  if (statusBulb_2) {
    document.getElementById('bulb-2-status').innerHTML = 'on';
    document.getElementById('bulb-2').style.backgroundColor = 'yellow';
  } else {
    document.getElementById('bulb-2-status').innerHTML = 'off';
    document.getElementById('bulb-2').style.backgroundColor = 'grey';
  }
  console.log('Đèn 2 đang mở: ', statusBulb_2);
}

// Chức năng Quạt
function toggleStatusFan() {
  statusFan = !statusFan;
  if (statusFan) {
    document.getElementById('fan-status').innerHTML = 'on';
  } else {
    document.getElementById('fan-status').innerHTML = 'off';
  }
  console.log('Đèn 2 đang mở: ', statusBulb_2);
}

// Chức năng Quạt
function toggleMode() {
  mode = !mode;
  if (mode) {
    document.getElementById('mode-status').innerHTML = 'automa';
    document.getElementById('mode-text').innerHTML = 'automa';
    document.getElementById('mode').style.backgroundColor = 'yellow';
  } else {
    document.getElementById('mode-status').innerHTML = 'manual';
    document.getElementById('mode-text').innerHTML = 'manual';
    document.getElementById('mode').style.backgroundColor = 'grey';
  }
  console.log('Chế độ Tự động: ', mode);
}
//Lưu giờ gian
function saveChanges() {
  getTimeOn = $('#time-on-input').val();
  getTimeOff = $('#time-off-input').val();
  document.getElementById('time-on').innerHTML = getTimeOn;
  document.getElementById('time-off').innerHTML = getTimeOff;
  // $('time-on').html(getTimeOn);
  // $('time-off').html(getTimeOff);

}

// var setTimeBtn = document.getElementById('settime-btn');

// function showAlert() {
//   if (mode) {
//     alert("Thiết lập thời gian chỉ hoạt động ở chế độ Tự động");
//   }
// }

$('#settime-btn').click(function() {

  if (mode) {
    $('#basicModal').modal('show');
  } else {
    alert("Thiết lập thời gian chỉ hoạt động ở chế độ Tự động");
  }
});

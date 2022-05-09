//hàm xuất kết quả đậu hay trượt gắn ở button
function passOrFail() {
   var scoreA = document.getElementById("scoreA").value;
   var scoreB = document.getElementById("scoreB").value;
   var scoreC = document.getElementById("scoreC").value;

   var areaPoint = document.getElementById("area").value;
   var objectPoint = document.getElementById("object").value;

   var benchMarkInput = document.getElementById("diemChuanInput").value;


   //gọi hàm tính điểm ưu tiên khu vưc.
   var getAreaPoint = calcAreaPoint(areaPoint);
   //kiêm tra user chọn khu vực ưu tiên hay chưa.
   if (getAreaPoint === "stop") {
      alert("Vuin lòng chọn khu vực ưu tiên !!!");
      return;
   }


   //gọi hàm tính điêm ưu tiên đối tượng.
   var getObjectPoint = calcObjectPoint(objectPoint);
   //kiểm tra user chọn đối tượng ưu tiên hay chưa.
   if (getObjectPoint === "stop") {
      alert("Vuin lòng chọn đối tượng ưu tiên !!!");
      return;
   }


   //gọi hàm kiểm tra điểm chuẩn.
   var benchmark = getBenchMark(benchMarkInput);
   //Kiểm tra điểm chuẩn nếu ko hợp lệ (benchmark là false )=> ra thông báo và code ở dưới ko chạy tiếp
   if (!benchmark) {
      alert("Vui lòng nhập lại điểm chuẩn hợp lệ !!!");
      return;
   }


   //gọi hàm kiểm tra điểm mỗi môn
   var isSubjectPoint = checkSubjectPoint(scoreA, scoreB, scoreC);
   //kiểm tra user nhập điểm mỗi môn có hợp lệ không? Nếu bị điểm 0 thì xuất kết quả RỚT luôn ko cần tính toán nữa.
   if (isSubjectPoint === "stop") {
      alert("Vui lòng nhập điểm thi chính xác !!!");
      return;
   } else if (!isSubjectPoint) {
      res.style.color = "red";
      res.innerHTML = `Rớt rồi hahahaaa. Một môn bị điểm 0 rùi.`;
      return;
   }


   //gọi hàm tính tổng điểm ưu tiên.
   var getTotalExtralPoint = calcExtraPoints(getAreaPoint, getObjectPoint);


   //gọi hàm tính tổng điểm 3 môn.
   var getTotalSubjecsPoints = calcSubjectsPoints(+scoreA, +scoreB, +scoreC);


   //gọi hàm tính điểm tổng kết.
   var getTotal = calcTotal(getTotalExtralPoint, getTotalSubjecsPoints);


   //gọi hàm in kết quả ra giao diện
   showResult(getTotal, benchMarkInput);
}


//hàm im kết quả ra giao diện
function showResult(getTotal, benchMarkInput) {
   var res = document.getElementById("res");
   if (getTotal >= +benchMarkInput) {
      res.style.color = "blue";
      res.innerHTML = `Đậu rồi đó. Chúc mừng. Tổng điểm: ${getTotal}`;
   } else {
      res.style.color = "orange";
      res.innerHTML = `Rớt rồi ahahaahaaa. Được có ${getTotal} điểm.
            Năm sau thi lại nhéeeeeeee`;
   }
}

//hàm tính điểm ưu tiên khu vực
function calcAreaPoint(areaPoint) {
   switch (areaPoint) {
      case "A":
         return 2;
      case "B":
         return 1;
      case "C":
         return 0.5;
      case "X":
         return 0;
      case "":
         return "stop";
   }
}

//hàm tính điểm ưu tiên đối tượng
function calcObjectPoint(objectPoint) {
   switch (objectPoint) {
      case "A":
         return 2.5;
      case "B":
         return 1.5;
      case "C":
         return 1;
      case "X":
         return 0;
      case "":
         return "stop";
   }
}

//hàm kiểm tra điểm chuẩn
function getBenchMark(benchmark) {
   if (+benchmark < 0 || +benchmark > 30 ||benchmark === "") {
      return false;
   } else {
      return true;
   }
}

//hàm kiểm tra điểm thi từng môn
function checkSubjectPoint(scoreA, scoreB, scoreC) {
   if (scoreA === "" || scoreB === "" || scoreC === "") {
      return "stop";
   } else if (
      +scoreA < 0 ||
      +scoreA > 30 ||
      +scoreB < 0 ||
      +scoreB > 30 ||
      +scoreC < 0 ||
      +scoreC > 30
   ) {
      return "stop";
   } else if (+scoreA === 0 || +scoreB === 0 || +scoreC === 0) {
      return false;
   } else {
      return true;
   }
}

//hàm tính tổng điểm ưu tiên
function calcExtraPoints(getAreaPoint, getObjectPoint) {
   return getAreaPoint + getObjectPoint;
}

//hàm tính tổng 3 môn thi
function calcSubjectsPoints(scoreA, scoreB, scoreC) {
   if (scoreA < 0 || scoreA > 10) {
      alert("Vui lòng nhập lại điểm!!!");
   }
   if (scoreB < 0 || scoreB > 10) {
      alert("Vui lòng nhập lại điểm!!!");
   }
   if (scoreC < 0 || scoreC > 10) {
      alert("Vui lòng nhập lại điểm!!!");
   }

   var totalSubjectsPoints = scoreA + scoreB + scoreC;

   return totalSubjectsPoints;
}

//hàm tính điểm tổng kết
function calcTotal(getTotalExtralPoint, getTotalSubjecsPoints) {
   return getTotalExtralPoint + getTotalSubjecsPoints;
}



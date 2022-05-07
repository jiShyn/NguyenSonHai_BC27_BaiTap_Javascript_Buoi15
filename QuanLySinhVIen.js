//hàm xuất kết quả đậu hay trượt gắn ở button
function passOrFail() {
   var scoreA = +document.getElementById("scoreA").value;
   var scoreB = +document.getElementById("scoreB").value;
   var scoreC = +document.getElementById("scoreC").value;

   var areaPoint = +document.getElementById("area").value;
   var objectPoint = +document.getElementById("object").value;

   var res = document.getElementById("res");

   var benchMarkInput = +document.getElementById("diemChuanInput").value;

   //gọi 2 hàm tính điểm ưu tiên và điểm 3 môn để tính điểm tổng kết và gán vào biến totalAll.
   var totalAll =
      calcExtraPoints(areaPoint, objectPoint) +
      calcSubjectsPoints(scoreA, scoreB, scoreC);

   //gọi hàm kiểm tra điểm chuẩn getBenchMark và truyền tham số điểm chuẩn benchMarkInput đã DOM ở trên, sau đó gán vào biến benchmark.
   var benchmark = getBenchMark(benchMarkInput);

   //gọi hàm kiểm tra có môn nào điểm 0
   var fail = isFail();

   if (fail) {
      res.style.color = "red";
      res.innerHTML = `Rớt rồi hahahaaa. Một môn bị điểm 0 rùi.`;
   } else {
      if (totalAll >= benchmark) {
         res.style.color = "blue";
         res.innerHTML = `Đậu rồi đó. Chúc mừng. Tổng điểm: ${totalAll}`;
      } else {
         res.style.color = "red";
         res.innerHTML = `Rớt rồi ahahaahaaa. Được có ${totalAll} điểm.
            Năm sau thi lại nhéeeeeeee`;
      }
   }
}

//hàm kiểm tra điểm chuẩn
function getBenchMark(benchmark) {
   if (benchmark < 0 || benchmark > 30) {
      alert("Vui lòng nhập lại điểm chuẩn!!!");
   } else {
      return benchmark;
   }
}

//hàm tính điểm ưu tiên
function calcExtraPoints(areaPoint, objectPoint) {
   var totalExtraPoints = areaPoint + objectPoint;
   return totalExtraPoints;
}

//hàm tính tổng môn thi
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

//hàm kiểm tra điểm thi môn bất kì bằng 0
function isFail() {
   var scoreA = +document.getElementById("scoreA").value;
   var scoreB = +document.getElementById("scoreB").value;
   var scoreC = +document.getElementById("scoreC").value;

   if (scoreA === 0 || scoreB === 0 || scoreC === 0) {
      return true;
   } else {
      return false;
   }
}

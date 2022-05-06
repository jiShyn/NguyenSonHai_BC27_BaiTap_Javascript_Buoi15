//hàm xuất kết quả đậu hay trượt gắn ở button
function passOrFail() {
   var totalAll = calcExtraPoints() + calcSubjectsPoints();
   //  console.log(totalAll);
   var benchmark = getBenchMark();
   //  console.log(benchmark);
   var fail = isFail();
   //  console.log(fail);
   var res = document.getElementById("res");

   if (fail) {
      res.style.color = "red";
      res.innerHTML = `Rớt rồi hahahaaa. Một môn bị điểm 0 rùi.`;
   } else if (totalAll >= benchmark) {
      res.style.color = "blue";
      res.innerHTML = `Đậu rồi đó. Chúc mừng. Tổng điểm: ${totalAll}`;
   } else {
      res.style.color = "red";
      res.innerHTML = `Rớt rồi ahahaahaaa. Được có ${totalAll} điểm.
			Năm sau thi lại nhéeeeeeee`;
   }
}

//hàm kiểm tra điểm chuẩn
function getBenchMark() {
   var benchmark = +document.getElementById("diemChuanInput").value;
   if (benchmark < 0 || benchmark > 30) {
      alert("Vui lòng nhập lại điểm chuẩn!!!");
   } else {
      return benchmark;
   }
}

//hàm tính điểm ưu tiên
function calcExtraPoints() {
   var area = +document.getElementById("area").value;
   var object = +document.getElementById("object").value;
   // console.log(area, object)

   var totalExtraPoints = area + object;
   return totalExtraPoints;
   // console.log(totalExtraPoints)
}

//hàm tính tổng môn thi
function calcSubjectsPoints() {
   var scoreA = +document.getElementById("scoreA").value;
   var scoreB = +document.getElementById("scoreB").value;
   var scoreC = +document.getElementById("scoreC").value;
   // console.log(scoreA, scoreB, scoreC)

   if (scoreA < 0 || scoreA > 10) {
      alert("Vui lòng nhập lại điểm!!!");
   } else if (scoreB < 0 || scoreB > 10) {
      alert("Vui lòng nhập lại điểm!!!");
   } else if (scoreC < 0 || scoreC > 10) {
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
   }
}

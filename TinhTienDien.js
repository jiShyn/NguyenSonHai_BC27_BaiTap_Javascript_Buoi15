//hàm gắn nút button
function calcBill() {
   var fullName = document.getElementById("fullName").value;
   var kw = +document.getElementById("kw").value;

   var res = document.getElementById("res");

	 //gọi hàm tính toán calcKw() và truyền vào các tham số tương ứng và tạo biến totalBill để hứng giá trị
   var totalBill = calcKw(kw, 50, 50, 100, 150, 500, 650, 850, 1100, 1300);

   //  if (kw >= 0) {
   //     if (kw <= 50) {
   //        totalBill += kw * 500;
   //     } else if (kw <= 100) {
   //        totalBill += 50 * 500 + (kw - 50) * 650;
   //     } else if (kw <= 200) {
   //        totalBill += 50 * 500 + 50 * 650 + (kw - 100) * 850;
   //     } else if (kw <= 350) {
   //        totalBill += 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
   //     } else if (kw > 350) {
   //        totalBill +=
   //           50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
   //     }
   //  } else {
   //     alert("Vui lòng nhập số kw điện!!!");
   //  }

   res.innerHTML = `Khách hàng ${fullName} cần thanh toán số tiền là: ${totalBill.toLocaleString()} VNĐ.`;
}

//hàm tính kw điện
function calcKw(
   kw,
   kw_1st,
   kw_2nd,
   kw_3rd,
   kw_4th,
   cost_1st,
   cost_2nd,
   cost_3rd,
   cost_4th,
   cost_5th
) {
   var totalBill = 0;
   if (kw >= 0) {
      if (kw <= kw_1st) {
         totalBill += kw * cost_1st;
      } else if (kw <= kw_1st + kw_2nd) {
         totalBill += kw_1st * cost_1st + (kw - kw_1st) * cost_2nd;
      } else if (kw <= kw_1st + kw_2nd + kw_3rd) {
         totalBill +=
            kw_1st * cost_1st +
            kw_2nd * cost_2nd +
            (kw - kw_1st - kw_2nd) * cost_3rd;
      } else if (kw <= kw_1st + kw_2nd + kw_3rd + kw_4th) {
         totalBill +=
            kw_1st * cost_1st +
            kw_2nd * cost_2nd +
            kw_3rd * cost_3rd +
            (kw - kw_1st - kw_2nd - kw_3rd) * cost_4th;
      } else if (kw > kw_1st + kw_2nd + kw_3rd + kw_4th) {
         totalBill +=
            kw_1st * cost_1st +
            kw_2nd * cost_2nd +
            kw_3rd * cost_3rd +
            kw_4th * cost_4th +
            (kw - kw_1st - kw_2nd - kw_3rd - kw_4th) * cost_5th;
      }
      return totalBill;
   } else {
      alert("Vui lòng nhập số kw điện!!!");
      return totalBill;
   }
}


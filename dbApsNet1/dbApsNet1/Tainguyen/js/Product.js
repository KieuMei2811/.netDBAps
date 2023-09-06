document.getElementById("update_product").style.display = "none";
var array = localStorage.getItem("list_product")
  ? JSON.parse(localStorage.getItem("list_product"))
  : [];
function Save() {
  (img = document.getElementById("anh_sp").value),
    (tile = document.getElementById("You_Name").value),
    (new_price = document.getElementById("Price").value),
    (old_price = document.getElementById("Old_price").value),
    (province = document.getElementById("input_province").value);
  var Mang = {
    img: img,
    tile: tile,
    new_price: new_price,
    old_price: old_price,
    province: province,
  };
  if (
    img != "" &&
    tile != "" &&
    new_price != "" &&
    old_price != "" &&
    province != ""
  ) {
    array.push(Mang);
    localStorage.setItem("list_product", JSON.stringify(array));
  }
  Show_style_table();
  Show();
  document.querySelector(".container_form_input").style.display = "none";
}

function Show() {
  var Mang_Buy_now = localStorage.getItem("list_product_shopping")
    ? JSON.parse(localStorage.getItem("list_product_shopping"))
    : [];
  var array = localStorage.getItem("list_product")
    ? JSON.parse(localStorage.getItem("list_product"))
    : [];
  var card = ``;

  array.map((value, index) => {
    card += `<div class="boder_da_nang">
       <img id="luc_img" src="${value.img}" height="198" width="224" >
        <h3 class="luc_title">${value.tile}</h3>
        <p class="luc_price">${value.new_price + " VND"}</p>
        <del class="luc_price_old">${value.old_price + " VND"}</del>
        <p class="luc_city">${value.province}</p>
       <button onclick="Detel(${index})" id="chi_tiet">Chi tiết</button> <button onclick="Shoping(${index})" id="cart" title="thêm vào giỏ hàng"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
    `;
    document.querySelector(".luc_container_photo").innerHTML = card;
  });
  document.querySelector(".increment_number").innerHTML = Mang_Buy_now.length;
}
// var chi_tiet=``
// function Detel(index) {
//   // console.log(index)
//   array = localStorage.getItem("list_product")? JSON.parse(localStorage.getItem("list_product")): [];
//   Buy_now_img =document.getElementById("luc_img").src=array[index].img
//     (Buy_now_title =document.querySelector(".luc_title").innerText=array[index].tile),
//     (Buy_now_price =document.querySelector(".luc_price").innerText= array[index].new_price),
//     (Buy_now_province =document.querySelector(".luc_city").innerText= array[index].province);

//  chi_tiet+= `
//          <div>
//               <img src="${Buy_now_img}" alt="">
//               <h3>${Buy_now_title}</h3>
//               <p>${Buy_now_price}</p>
//               <p>${Buy_now_province}</p>
//           </div>
//         `
//       document.getElementById("trang_chi_tiet").innerHTML=chi_tiet
// }

function Reset() {
  img = document.getElementById("anh_sp").value = "";
  tile = document.getElementById("You_Name").value = "";
  new_price = document.getElementById("Price").value = "";
  old_price = document.getElementById("Old_price").value = "";
  province = document.getElementById("input_province").value = "";
}

function Show_style_table() {
  var array = localStorage.getItem("list_product")
    ? JSON.parse(localStorage.getItem("list_product"))
    : [];
  var table = `
    <tr class="color_boder">
    <th class="id_product">ID</th>
    <th class="name_product">Name Product</th>
    <th class="price_product">Price</th>
    <th class="price_product_old">Old_Price</th>
    <th class="img_price">Image</th>
    <th class="action_product">Action</th>
  </tr>
  `;
  array.map((value, index) => {
    table += `
      <tr class="color_table_admin">
        <td>${index + 1}</td>
        <td>${value.tile}</td>
        <td>${value.new_price}</td>
        <td>${value.old_price}</td>
        <td><img src="${
          value.img
        }" alt=""height="50" width="50"  text-align: center;></td>
        <td><i onclick="Editter(${index})" class="fa-solid fa-pen pen_edit"></i> <i onclick="Deleter(${index})" class="fa-solid fa-trash-can trash_can"></i></td>
    </tr>
    `;
    document.querySelector(".Show_products_item").innerHTML = table;
  });
}

function Editter(index) {
  var array = localStorage.getItem("list_product")
    ? JSON.parse(localStorage.getItem("list_product"))
    : [];
  var index_list_pro = (document.getElementById("index_product").value = index);
  document.getElementById("anh_sp").value = array[index_list_pro].img;
  document.getElementById("You_Name").value = array[index_list_pro].tile;
  document.getElementById("Price").value = array[index_list_pro].new_price;
  document.getElementById("Old_price").value = array[index_list_pro].old_price;
  document.getElementById("input_province").value =
    array[index_list_pro].province;
  document.getElementById("update_product").style.display = "block";
  document.getElementById("save_product").style.display = "none";
  document.querySelector(".container_form_input").style.display = "block";
}

function CapNhat() {
  var array = localStorage.getItem("list_product")
    ? JSON.parse(localStorage.getItem("list_product"))
    : [];
  var index_list_pro = document.getElementById("index_product").value;
  array[index_list_pro] = {
    img: document.getElementById("anh_sp").value,
    tile: document.getElementById("You_Name").value,
    new_price: document.getElementById("Price").value,
    old_prince: document.getElementById("Old_price").value,
    province: document.getElementById("input_province").value,
  };
  localStorage.setItem("list_product", JSON.stringify(array));
  Show_style_table();
  document.getElementById("update_product").style.display = "none";
  document.getElementById("save_product").style.display = "block";
  document.querySelector(".container_form_input").style.display = "none";
}
function Deleter(index) {
  var array = localStorage.getItem("list_product")
    ? JSON.parse(localStorage.getItem("list_product"))
    : [];
  array.splice(index, 1);
  localStorage.setItem("list_product", JSON.stringify(array));
  Show_style_table();
}

document.querySelector(".container_form_input").style.display = "none";

function Add_product() {
  document.querySelector(".container_form_input").style.display = "block";
}

function Shoping(index) {
  var Mang_Buy_now = localStorage.getItem("list_product_shopping")
    ? JSON.parse(localStorage.getItem("list_product_shopping"))
    : [];
  array = localStorage.getItem("list_product")
    ? JSON.parse(localStorage.getItem("list_product"))
    : [];
  (Buy_now_img = array[index].img),
    (Buy_now_title = array[index].tile),
    (Buy_now_price = array[index].new_price),
    (Buy_now_province = array[index].province);
  var mang_buy_now = {
    Mua_img: Buy_now_img,
    Mua_title: Buy_now_title,
    Mua_gia: Buy_now_price,
    Mua_tinh: Buy_now_province,
  };
  Mang_Buy_now.unshift(mang_buy_now);
  localStorage.setItem("list_product_shopping", JSON.stringify(Mang_Buy_now));
  alert("Thêm vào giỏ hàng thành công");
  // document.querySelector(".increment_number").innerHTML=Mang_Buy_now.length
  Gio_hang();
}

function Gio_hang() {
  var Mang_Buy_now = localStorage.getItem("list_product_shopping")
    ? JSON.parse(localStorage.getItem("list_product_shopping"))
    : [];
  var tablet = `
  <tr>
  <th>STT</th>
  <th>Tên sản phẩm</th>
  <th>Ảnh sản phẩm</th>
  <th>Giá</th>
  <th>Số lượng</th>
  <th>Hành động</th>
  <th>Chọn</th>
 </tr>
  `;
  Mang_Buy_now.map((value, index) => {
    tablet += `
    <tr class="color_table_admin">
        <td>${index + 1}</td>
        <td>${value.Mua_title}</td>
        <td><img src="${
          value.Mua_img
        }" alt="" height="50" width="50"></img></td>
        <td id="gia_pro">${value.Mua_gia}</td>
        <td><input type="number" value="1" id="soluong"></td>
        <td><i onclick="Xoa_ngay(${index})" class="fa-solid fa-trash-can thung_rac"></i></td>
        <td><button class="thanh_toan" onclick="Buy_now(${index})"> OK </button></td>
    </tr>`;
    document.querySelector("#list_product_buy_now").innerHTML = tablet;
  });
}

function Xoa_ngay(index) {
  var Mang_Buy_now = localStorage.getItem("list_product_shopping")
    ? JSON.parse(localStorage.getItem("list_product_shopping"))
    : [];
  Mang_Buy_now.splice(index, 1);
  localStorage.setItem("list_product_shopping", JSON.stringify(Mang_Buy_now));
  Gio_hang();
}

function Buy_now(index) {
  var Mang_Buy_now = localStorage.getItem("list_product_shopping")
    ? JSON.parse(localStorage.getItem("list_product_shopping"))
    : [];
  var tieu_de = Mang_Buy_now[index].Mua_title;
  var gia = Mang_Buy_now[index].Mua_gia;
  var soluong = document.getElementById("soluong").value;
  var tong = parseInt(gia) * parseInt(soluong);
  var mua = `
      <div class="check_out">
      <p>Tên sản phẩm: ${tieu_de}</p>
      <p>Giá sản phẩm: ${gia}</p> 
      <p>Số lượn: ${soluong}</p>
      <p>Tổng: ${tong} </p>
      </div>
      <ul class="display_flex">
        <li><button class="check_out_1" onclick="Toi_Xe_Mua(${index})">Mua Ngay </button> </li>
        <li><button class="back_home" onclick="Go_back()">  <a href="./index.html">Quay Về</a> </button></li>
        <li><button class="buy_again" onclick="Mua_Tiep()">Mua Tiếp </button></li>
      </ul>
      
  `;

  document.getElementById("Tong").innerHTML = mua;
  document.querySelector(".buy_again").style.display = "none";
  document.querySelector(".back_home").style.display = "none";
}
function Toi_Xe_Mua(index) {
  confirm("Bạn đã mua thành công");
  document.querySelector(".buy_again").style.display = "block";
  document.querySelector(".check_out_1").style.display = "none";
  document.querySelector(".back_home").style.display = "block";
  var Mang_Buy_now = localStorage.getItem("list_product_shopping")
    ? JSON.parse(localStorage.getItem("list_product_shopping"))
    : [];
  Mang_Buy_now.splice(index, 1);
  localStorage.setItem("list_product_shopping", JSON.stringify(Mang_Buy_now));
  Gio_hang();
}

function Mua_Tiep() {
  document.querySelector(".check_out").style.display = "none";
  document.querySelector(".check_out_1").style.display = "none";
  Buy_now();
  Toi_Xe_Mua();
}

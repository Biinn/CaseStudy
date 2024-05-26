var data=[]

var existingData = [
    {
        Id: 1,
        Name: "Nguyễn Văn Xuân",
        Age: "10-09-2005",
        Gender: "Nam",
        Class: "21CNTT3",
        Image: "image1.jpg"
    },
    {
        Id: 2,
        Name: "Trần Thị Tuyết Nhung",
        Age: "12-02-2001",
        Gender: "Nữ",
        Class: "21COD02",
        Image: "image2.jpg"
    },
    {
        Id: 3,
        Name: "Lê Thị Mỹ Lan",
        Age: "05-03-2000",
        Gender: "Nữ",
        Class: "22CNTE2",
        Image: "image3.jpg"
    }
];

// Thêm dữ liệu vào mảng data
for (let i = 0; i < existingData.length; i++) {
    data.push(existingData[i]);
}

// Hiển thị dữ liệu
show();


function add(){
    var item_id = document.getElementById("id").value.trim();
    var item_name = document.getElementById("name").value.trim();
    var item_age = document.getElementById("age").value.trim();
    var item_gender = document.getElementById("gender").value.trim();
    var item_class = document.getElementById("class").value.trim();
    var item_image = document.getElementById("preview").src; 

    if(item_id === "" || item_name === "" || item_age === "" || item_gender === "" || item_class === "" || item_image === ""){
        document.getElementById("alertMessage").style.display = "block"; // Hiển thị thông báo
        return; // Dừng hàm nếu có ô input để trống
    }

    var item = {
        Id :item_id,
        Name :item_name,
        Age :item_age,
        Gender :item_gender,
        Class :item_class,
        Image :item_image
    }

    let index = data.findIndex((c)=>c.Id==item.Id)

        if(index>=0){
            data.splice(index,1,item)
        }else{
                data.push(item)
        }
        show()
        clear()
}

function show(){
    table = `<tr>
    <th>ID</th>
    <th>Họ và tên</th>
    <th>Ngày sinh</th>
    <th>Giới tính</th>
    <th>Lớp</th>
    <th>Ảnh</th>
    <th>Tùy chọn</th>
    </tr>`
    for(let i = 0; i < data.length; i++){
        table += `<tr>
        <td>${data[i].Id}</td>
        <td>${data[i].Name}</td>
        <td>${data[i].Age}</td>
        <td>${data[i].Gender}</td>
        <td>${data[i].Class}</td>
        <td><img src="${data[i].Image}" alt="Ảnh sinh viên" style="max-width: 100px; max-height: 100px;"></td>
            <th>
                <button class="btn btn-danger" onclick="deleteItem(${data[i].Id})">Xóa</button>
                <button class="btn btn-success" onclick="editItem(${data[i].Id})">Sửa</button>
            </th>

            </tr>`
            }
            document.getElementById("show").innerHTML = table
}

function clear(){
    document.getElementById("id").value="";
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("gender").value="";
    document.getElementById("class").value="";
    document.getElementById("image").value="";
}

function deleteItem(x){
    for(let i=0;i<data.length;i++){
        if(data[i].Id==x){
            var result = confirm("Bạn có muốn xóa thông tin của " + data[i].Name + " không?");
            if(result){
                data.splice(i,1)
                show()
                break;
            }
        }
    }
}

function editItem(x){
    for(let i=0;i<data.length;i++){
        if(data[i].Id==x){
            document.getElementById("id").value = data[i].Id;
            document.getElementById("name").value = data[i].Name;
            document.getElementById("age").value = data[i].Age;
            document.getElementById("gender").value = data[i].Gender;
            document.getElementById("class").value = data[i].Class;
            document.getElementById("image").value = data[i].Image;
        }
    }
}
function previewImage(event) {
    var input = event.target;
    var preview = document.getElementById('preview');
    
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
        preview.src = e.target.result;
        preview.style.display = 'block';
        };
        
        reader.readAsDataURL(input.files[0]);
    } else {
        preview.src = '#';
        preview.style.display = 'none';
    }
}
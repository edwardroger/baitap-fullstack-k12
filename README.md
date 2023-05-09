* Đối với repository mới tạo
1. ```git init```: tạo ra file .git ở trong thư mục
2. ```git commit -m "first commit"``` : commit lần đầu (-m: message | "first 
commit" là thông báo tuỳ biến)
3. ```git remote add origin https://github.com/edwardroger/k12-fullstack.git``` 
(Kết nối với repository trên github.com)

* Đối với máy mới vừa cài git, chúng ta cần phải config tài khoản git:
3.1 ```git config --global user.name "id_github"```
3.2 ```git config --global user.email "email đăng ký github"```
3.3 ```git config --global --list``` (dùng để hiển thị các config)
***********

Các lệnh thao tác cơ bản để đẩy code lên github.com
1. ```git add .``` hoặc git add * hoặc git add index.html (với index.html là 
file xác định)
2. ```git commit -m "message"``` (Dùng để commit các file đã add)
3. ```git push origin + tên nhánh đang đứng```. (ví dụ: nhánh đang đứng là 
master thì câu lệnh sẽ là git push origin master)
 
* Download folder code trên repository github:
- ```git clone https://github.com/ten_user_name/ten_repository```
* Kéo code mới nhất về máy:
- ```git pull origin ten_nhanh```

* Cách đặt tên file:
- Không sử dụng khoảng trắng
- Không viết có dấu
Ví dụ tên file chuẩn: index.html | index_1.html | index-1.html | fileIndex.html 
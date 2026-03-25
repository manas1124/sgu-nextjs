# 🚀 SGU-NEXTJS: E-Commerce Modern Web App

**SGU-NEXTJS** (FASCO) là một hệ thống thương mại điện tử giao diện hiện đại được xây dựng trên nền tảng **Next.js 16 (App Router)**. Dự án tập trung vào việc tối ưu hóa hiệu năng hiển thị, trải nghiệm người dùng (UI/UX) và tận dụng các cơ chế fetching dữ liệu tiên tiến. 

Đây là đồ án thực hành cho học phần **Các Công nghệ Lập trình Hiện đại** tại trường Đại học Sài Gòn.

---

## 🛠 Công nghệ sử dụng (Tech Stack)
* **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Rendering linh hoạt: SSR, ISR, CSR).
* **Library:** [React 19](https://react.dev/) (React Compiler).
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first approach).
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Type-safe).
* **Optimization:** Next/Image.
* **Data Fetching:** Sử dụng hệ thống RESTful API giả lập qua MockAPI.io.

---

## 📁 Cấu trúc thư mục (Project Structure)

Dự án tuân thủ kiến trúc **Feature-based**, chia nhỏ các module để đảm bảo tính dễ bảo trì và mở rộng. Trong thư mục `src`:

* `app/`: Quản lý định tuyến (Routing). Ứng dụng mô hình Route Groups để chia tách các luồng giao diện:
  * `(auth)`: Các trang liên quan đến đăng nhập, đăng ký, khôi phục mật khẩu.
  * `(shop)`: Các trang mua sắm chính (Trang chủ, cửa hàng, chi tiết sản phẩm, giỏ hàng, thanh toán).
* `components/`: Lưu trữ các UI Components tái sử dụng, được phân loại theo từng tính năng (auth, cart, checkout, common, layout, product, shop).
* `constants/`: Lưu trữ các hằng số và cấu hình tĩnh.
* `context/`: Quản lý trạng thái toàn cục (Global State) với React Context API (quản lý Giỏ hàng).
* `services/`: Chứa các hàm giao tiếp mạng, gọi dữ liệu từ API bên ngoài.
* `types/`: Định nghĩa kiểu dữ liệu chặt chẽ cho TypeScript.
* `hooks/`: Các Custom Hooks xử lý logic tại Client (ví dụ: đếm ngược thời gian).

---

## ✨ Tính năng chính

### Mua sắm (E-commerce Flow)
* **Trang chủ & Cửa hàng:** Hiển thị danh sách sản phẩm, lọc và sắp xếp. Tối ưu tốc độ tải với cơ chế Incremental Static Regeneration (ISR).
* **Chi tiết sản phẩm:** Xem thông tin, chọn kích thước (Size), màu sắc (Color) và thêm vào giỏ.
* **Giỏ hàng (Cart):** Quản lý trạng thái giỏ hàng toàn cục (thêm/xóa/sửa số lượng) đồng bộ giữa Mini Cart và trang Cart chi tiết.
* **Thanh toán (Checkout):** Quy trình điền thông tin giao hàng, phương thức thanh toán và tổng kết đơn hàng.

### Xác thực người dùng (Authentication)
* Giao diện Đăng nhập (Sign In) và Đăng ký (Sign Up).
* Giao diện Quên mật khẩu (Forget Password) và Đặt lại mật khẩu (New Password).

---

## 🚀 Hướng dẫn cài đặt (Installation)

1. **Clone dự án:**
```bash
git clone [https://github.com/manas1124/sgu-nextjs.git](https://github.com/manas1124/sgu-nextjs.git)
cd sgu-nextjs


2. **Cài đặt các gói phụ thuộc:**
```bash
npm install
# hoặc
pnpm install
```


3. **Khởi chạy môi trường phát triển:**
```bash
npm run dev

```
Truy cập `http://localhost:3000` để xem kết quả.


4. **Build sản phẩm:**
```bash
npm run build

```
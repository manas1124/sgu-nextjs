# 🚀 SGU-NEXTJS: E-Commerce Modern Web App

**SGU-NEXTJS** là một hệ thống thương mại điện tử hoàn chỉnh được xây dựng trên nền tảng **Next.js 16 (App Router)**. Dự án tập trung vào việc tối ưu hóa hiệu năng hiển thị, trải nghiệm người dùng (UX/UX) và khả năng tìm kiếm (SEO).
Đây là đồ án thực hành cho học phần **Các Công nghệ Lập trình Hiện đại** tại trường Đại học Sài Gòn.

---

## 🛠 Công nghệ sử dụng (Tech Stack)
* 
**Framework:** [Next.js 16](https://nextjs.org/) (App Router, Server Actions, React Server Components).
* 
**Library:** [React 19](https://react.dev/) (React Compiler, Streaming).
* 
**Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first approach).
* 
**Language:** [TypeScript](https://www.typescriptlang.org/) (Type-safe).
* 
**Optimization:** Babel React Compiler, Next/Image, Next/Font.
* 
**Deployment:** Vercel.

---

## 📁 Cấu trúc thư mục (Project Structure)

Dự án tuân thủ kiến trúc **Feature-based** kết hợp với **Clean Architecture** để đảm bảo tính dễ bảo trì và mở rộng:
* 
`src/app/`: Quản lý định tuyến (Routing) và giao diện các trang.
* 
`src/actions/`: Xử lý logic phía Server (Server Actions).
* 
`src/assets/`: Nơi lưu trữ các tài nguyên tĩnh nội bộ của dự án.
* 
`src/components/`: Các UI Components tái sử dụng (Common & Layout).
* 
`src/constants/`: Lưu trữ toàn bộ các hằng số biến tĩnh của dự án.
* 
`src/context/`: Quản lý trạng thái toàn cục (Global State) của ứng dụng bằng React Context API.
* 
`src/services/`: Quản lý các hàm gọi API (Data Fetching).
* 
`src/types/`: Định nghĩa kiểu dữ liệu TypeScript.
* 
`src/lib/`: Cấu hình các thư viện bên thứ ba.
* 
`src/hooks/`: Các Custom Hooks dùng cho Client.



---

## ✨ Tính năng chính

### Phân hệ Người dùng
* 
**Trang chủ (SSR/ISR):** Hiển thị danh sách sản phẩm nổi bật với tốc độ tải trang cực nhanh.
* 
**Chi tiết sản phẩm:** Tối ưu hóa SEO với Metadata động và hình ảnh chất lượng cao.
* 
**Giỏ hàng:** Quản lý trạng thái giỏ hàng (thêm/xóa/cập nhật) mượt mà bằng Client Components.

### Phân hệ Quản trị (Admin)
*
**Dashboard:** Tổng quan về đơn hàng và doanh thu.
* 
**Quản lý sản phẩm (CRUD):** Thêm, sửa, xóa sản phẩm trực tiếp thông qua Server Actions.
* 
**Quản lý bài viết:** Xây dựng tin tức hỗ trợ chiến dịch Marketing/SEO.



---

## 🚀 Hướng dẫn cài đặt (Installation)

1. **Clone dự án:**
```bash
git clone https://github.com/manas1124/sgu-nextjs.git
cd sgu-nextjs
```


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
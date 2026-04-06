// src/actions/newsletter.ts
'use server';

// Hàm xử lý logic trên Server
export async function subscribeNewsletter(prevState: any, formData: FormData) {
  // Lấy dữ liệu email từ Form
  const email = formData.get('email');

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return { success: false, message: 'Vui lòng nhập email hợp lệ!' };
  }

  try {
    // Mô phỏng độ trễ gọi API của bên thứ 3 (như Mailchimp, SendGrid)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Thực tế: Tại đây bạn có thể an tâm gọi Database (Prisma) 
    // hoặc sử dụng Secret API Keys mà không sợ lộ ra Client.
    console.log(`Đã lưu email: ${email} vào Database`);

    return { success: true, message: 'Đăng ký nhận bản tin thành công!' };
  } catch (error) {
    return { success: false, message: 'Có lỗi xảy ra, vui lòng thử lại.' };
  }
}
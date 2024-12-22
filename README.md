# 01.Foreign-Language-Center-System-BE

This project is the backend API for the **Foreign Language Center System**, built using **Express.js** and **MongoDB**.

## Getting Started

To get started with the project, follow the steps below:

### Prerequisites

- **Node.js** (>= 14.x)
- **MongoDB** (local or remote)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:
   ```env
   MONGO_URI=mongodb://localhost:27017/foreign-language-center
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

The server will start running on `http://localhost:5000`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Các bước hướng dẫn trong file README:

- **Clone và cài đặt dependencies**: Hướng dẫn sao chép dự án và cài đặt các thư viện cần thiết.
- **Tạo file `.env`**: Mô tả cách cấu hình các biến môi trường cần thiết (kết nối MongoDB, cổng server).
- **Chạy server**: Hướng dẫn chạy server với lệnh `npm start`.

### Lưu ý:
- Bạn có thể thay `<repository-url>` bằng đường dẫn tới repository của bạn nếu cần.
- Thay đổi cấu hình trong file `.env` nếu cần thiết, đặc biệt là **`MONGO_URI`** nếu bạn sử dụng MongoDB trên cloud hoặc thay đổi cổng.

Hy vọng với hướng dẫn này, bạn sẽ dễ dàng chạy server của mình!
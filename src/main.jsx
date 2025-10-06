import ReactDOM from "react-dom/client";
import App from "./App";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#ff4d4f",   // رنگ اصلی
        colorBgBase: "#f5f5f5",    // رنگ پس‌زمینه کلی
        colorText: "#1a1a1a",      // رنگ متن‌ها
      },
    }}
  >
    <App />
  </ConfigProvider>
);

import React, { useEffect, useState } from "react";
import { Layout, Menu, theme, Drawer, Button } from "antd";
import { HomeOutlined, UserOutlined, ToolOutlined, PhoneOutlined, MenuOutlined } from "@ant-design/icons";

import Home from "./Home";
import Contact from "./Contact";
import Aboutme from "./Aboutme";
import Skills from "./Skills";

const { Header, Content, Footer } = Layout;

const LayoutDashboard = () => {
  const [activeKey, setActiveKey] = useState("1");
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const menuItems = [
    { key: "1", icon: <HomeOutlined />, label: "خانه" },
    { key: "2", icon: <UserOutlined />, label: "درباره من" },
    { key: "3", icon: <ToolOutlined />, label: "مهارت‌ها" },
    { key: "4", icon: <PhoneOutlined />, label: "تماس" },
  ];

  const renderContent = () => {
    switch (activeKey) {
      case "1":
        return <Home />;
      case "2":
        return <Aboutme />;
      case "3":
        return <Skills />;
      case "4":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout style={{ minHeight: '100svh', overflowX: 'hidden' }}>
      {/* هدر */}
      <Header style={{ display: "flex", alignItems: "center", justifyContent: isMobile ? "space-between" : "flex-start", overflowX: isMobile ? 'hidden' : 'auto', background: '#000000' }}>
        <div className="demo-logo" />
        {isMobile ? (
          <Button type="text" icon={<MenuOutlined style={{ fontSize: 20, color: '#cbd5e1' }} />} onClick={() => setDrawerOpen(true)} />
        ) : (
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[activeKey]}
            onClick={(e) => setActiveKey(e.key)}
            overflowedIndicator={null}
            style={{ flex: 1, minWidth: 0, background: 'transparent' }}
            items={menuItems}
          />
        )}
      </Header>

      {/* منوی موبایل */}
      <Drawer
        placement="top"
        height={256}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        bodyStyle={{ padding: 0, background: '#000000' }}
      >
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[activeKey]}
          onClick={(e) => { setActiveKey(e.key); setDrawerOpen(false); }}
          items={menuItems}
        />
      </Drawer>

      {/* محتوای اصلی */}
      <Content style={{ padding: 0, height: 'calc(100svh - 64px)', overflowX: 'hidden' }}>
        <div
          style={{
            background: "#000000",
            height: '100%',
            padding: 0,
            color:"#fff"
          }}
        >
          {renderContent()}
        </div>
      </Content>

      {/* فوتر */}
      {/* <Footer style={{ textAlign: "center" }}>
        ©{new Date().getFullYear()} Created by You
      </Footer> */}
    </Layout>
  );
};

export default LayoutDashboard;

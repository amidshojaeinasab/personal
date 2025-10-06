import { Layout } from "antd";


const { Header } = Layout;


const AppHeader = () => {
  return (
   <Header
  style={{
    background: "red",
    padding: "0 20px",
    display: "flex",          
    alignItems: "center",     
    borderBottom: "1px solid #e8e8e8",
    color:"#fff"
  }}
>
  <h2 style={{ margin: 0, whiteSpace: "nowrap" }}>shojaei nasab</h2>
</Header>

  );
};
export default AppHeader;

import { Layout } from "antd";

const { Sider } = Layout;


const Drawer = () => {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            className={"sidebar"}
            width={300}
        >
            Side bar
        </Sider>
    );
};

export default Drawer;

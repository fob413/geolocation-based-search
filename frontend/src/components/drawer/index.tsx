import { Layout, Input, Button, Flex, Typography } from "antd";
import { SearchOutlined } from '@ant-design/icons'

const { Sider } = Layout;
const { Title } = Typography;


const Drawer = () => {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            className={"sidebar"}
            width={300}
        >
            <Flex vertical gap="large">
                <Title className="white-text">Geo Location Search</Title>

                <Input placeholder="Search..." />

                <Flex wrap gap="small">
                    <Input placeholder="longitude" />
                    <Input placeholder="latitude" />
                </Flex>

                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
            </Flex>
        </Sider>
    );
};

export default Drawer;

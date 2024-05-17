import { Ref } from "react";
import { Layout, Input, Button, Flex, Typography, Form } from "antd";
import { SearchOutlined } from '@ant-design/icons'

const { Sider } = Layout;
const { Title } = Typography;

type Props = {
    onChange: (event) => void;
    onSubmit: (event) => void;
    formData: {
        search: null | string,
        longitude: null | string,
        latitude: null | string
    }
}



const Drawer = ({ onChange, formData, onSubmit }: Props ) => {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            className={"sidebar"}
            width={300}
        >
            <Flex vertical gap="large">
                <Title className="white-text">Geo Location Search</Title>

                <Input
                    id={"search"} placeholder="Search..."
                    onChange={onChange} value={formData.search}
                    onPressEnter={onSubmit}
                />

                <Flex wrap gap="small">
                    <Input
                        id={"longitude"} placeholder="Longitude"
                        onChange={onChange} value={formData.longitude}
                        type={"number"} min={-180} max={180}
                    />
                    <Input
                        id={"latitude"} placeholder="Latitude"
                        onChange={onChange} value={formData.latitude}
                        type={"number"} min={-90} max={90}
                        onPressEnter={onSubmit}
                    />
                </Flex>

                <Button type="primary" icon={<SearchOutlined />} onClick={onSubmit}>
                    Search
                </Button>
            </Flex>
        </Sider>
    );
};

export default Drawer;

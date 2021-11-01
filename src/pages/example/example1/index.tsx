import { PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
const Example1 = () => {

  return (
    <PageContainer
    extra={[
      <Button key="3">操作</Button>,
      <Button key="2">操作</Button>,
      <Button key="1" type="primary">
        主操作
      </Button>,
    ]}
    footer={[
      <Button key="rest">重置</Button>,
      <Button key="submit" type="primary">
        提交
      </Button>,
    ]}
  >
    
  </PageContainer>
  );
};

export default Example1

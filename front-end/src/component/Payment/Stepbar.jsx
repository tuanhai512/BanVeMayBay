import { Steps } from 'antd';


function Stepbar(){
  const { Step } = Steps;
  return(


    <Steps current={1}>
      <Step title="Đặt chỗ" description="This is a description." />
      <Step title="Thanh toán" subTitle="Left 00:00:08" description="This is a description." />
      <Step title="Xử lý" description="This is a description." />
      <Step title="Xuất vé điện tử" description="This is a description." />
    </Steps>)
}
export default Stepbar


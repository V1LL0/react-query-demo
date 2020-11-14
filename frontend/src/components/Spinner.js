import { Spin } from 'antd';

const Spinner = () => (
  <div
    style={{
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Spin />
  </div>
);

export default Spinner;

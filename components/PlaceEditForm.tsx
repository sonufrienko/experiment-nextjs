import { Form, Input, Button, Select, InputNumber } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const placeTypes = ['Groceries', 'Hotels', 'Gas stations', 'Parking Lots', 'Pharmacies'];

const PlaceEditForm = ({
  onFinish,
  buttonText,
  initialValues,
}: {
  onFinish: any;
  buttonText: string;
  initialValues: any;
}) => {
  return (
    <Form {...layout} name="basic" initialValues={initialValues} onFinish={onFinish}>
      <Form.Item label="Place name" name="name" rules={[{ required: true, message: 'This field is required!' }]}>
        <Input />
      </Form.Item>

      <Form.Item name="type" label="Type" rules={[{ required: true, message: 'This field is required!' }]}>
        <Select>
          {placeTypes.map((value) => (
            <Option key={value} value={value.toLocaleLowerCase().replace(' ', '-')}>
              {value}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Location, latitude"
        name={['location', 'latitude']}
        rules={[{ type: 'float', message: 'Please enter a float' }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Location, longitude"
        name={['location', 'longitude']}
        rules={[{ type: 'float', message: 'Please enter a float' }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          {buttonText}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PlaceEditForm;
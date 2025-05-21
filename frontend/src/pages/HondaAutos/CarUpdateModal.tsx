import React, { useEffect } from "react";
import { Form, Input, InputNumber } from "antd";
import { useHondaAutosAtom } from "../../hooks/atoms/useHondaAutosAtom";
import { CarUpdateStyledForm, CarUpdateStyledModal } from "./elements";
import type { TSFixMe } from "../../types";

export type CarUpdateFormValues = {
  id: number;
  name: string;
  description: string;
  price: number;
};
interface CarUpdateModalProps {
  open: boolean;
  editingCarId: number | null;
  onOk: (values: CarUpdateFormValues) => void;
  onCancel: () => void;
  confirmLoading?: boolean;
}

export const CarUpdateModal: React.FC<CarUpdateModalProps> = ({
  open,
  editingCarId,
  onOk,
  onCancel,
  confirmLoading = false,
}) => {
  const [form] = Form.useForm();
  const { hondaAutos } = useHondaAutosAtom();

  useEffect(() => {
    if (open && editingCarId) {
      const editingCar = hondaAutos.find((car) => car.id === editingCarId);
      if (editingCar) {
        form.setFieldsValue({ ...editingCar });
      }
    }
  }, [open, editingCarId, form]);

  const handleFinish = (values: Omit<CarUpdateFormValues, "id">) => {
    onOk({ ...values, id: editingCarId! });
    form.resetFields();
  };

  return (
    <CarUpdateStyledModal
      open={open}
      title="Update Car"
      onOk={form.submit}
      onCancel={onCancel}
      confirmLoading={confirmLoading}
      okText="Update"
      cancelText="Cancel"
      destroyOnClose
    >
      <CarUpdateStyledForm
        form={form}
        layout="vertical"
        onFinish={handleFinish as TSFixMe}
      >
        <Form.Item
          label="Car Name"
          name="name"
          rules={[{ required: true, message: "Please enter the car name" }]}
        >
          <Input placeholder="Enter car name" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter a description" }]}
        >
          <Input.TextArea rows={3} placeholder="Enter description" />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[
            { required: true, message: "Please enter the price" },
            { type: "number", min: 0, message: "Price must be positive" },
          ]}
        >
          <InputNumber
            style={{ width: "100%" }}
            min={0}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            placeholder="Enter price"
          />
        </Form.Item>
      </CarUpdateStyledForm>
    </CarUpdateStyledModal>
  );
};

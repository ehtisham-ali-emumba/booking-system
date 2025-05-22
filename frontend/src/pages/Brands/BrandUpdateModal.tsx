import React, { useEffect } from "react";
import { Form, Input } from "antd";
import { CarUpdateStyledForm, CarUpdateStyledModal } from "./elements";
import type { TSFixMe } from "../../types";
import { colors } from "../../constants";
import { useBrandsAtom } from "../../hooks/atoms/useBrandsAtom";

export type BrandUpdateFormValues = {
  id: number;
  name: string;
  description: string;
};
interface CarUpdateModalProps {
  open: boolean;
  editingBrandId: number | null;
  onOk: (values: BrandUpdateFormValues) => void;
  onCancel: () => void;
  confirmLoading?: boolean;
}

export const BrandUpdateModal: React.FC<CarUpdateModalProps> = ({
  open,
  editingBrandId,
  onOk,
  onCancel,
  confirmLoading = false,
}) => {
  const [form] = Form.useForm();
  const { brands } = useBrandsAtom();

  useEffect(() => {
    if (open && editingBrandId) {
      const editingBrand = brands.find((brand) => brand.id === editingBrandId);
      if (editingBrand) {
        form.setFieldsValue({ ...editingBrand });
      }
    }
  }, [open, editingBrandId, form]);

  const handleFinish = (values: Omit<BrandUpdateFormValues, "id">) => {
    onOk({ ...values, id: editingBrandId! });
    form.resetFields();
  };

  return (
    <CarUpdateStyledModal
      open={open}
      title="Update Brand"
      onOk={form.submit}
      onCancel={onCancel}
      confirmLoading={confirmLoading}
      okText="Update"
      cancelText="Cancel"
      destroyOnClose
      okButtonProps={{ style: { backgroundColor: colors.accentOrange } }}
    >
      <CarUpdateStyledForm
        form={form}
        layout="vertical"
        onFinish={handleFinish as TSFixMe}
      >
        <Form.Item
          label="Brand Name"
          name="name"
          rules={[{ required: true, message: "Please enter the brand name" }]}
        >
          <Input placeholder="Enter brand name" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter a description" }]}
        >
          <Input.TextArea rows={3} placeholder="Enter description" />
        </Form.Item>
      </CarUpdateStyledForm>
    </CarUpdateStyledModal>
  );
};

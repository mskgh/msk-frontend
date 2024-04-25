"use client";
import { Button, Form, Input, Modal, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRecycle, FaRegEdit } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { MdAutoDelete } from "react-icons/md";

export const BusinessTab = () => {
  const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);
  const [viewBusinessModal, setViewBusinessModal] = useState(false);
  const [deleteBusinessModal, setDeleteBusinessModal] = useState(false);
  const [form] = Form.useForm();
  const { Option } = Select;

  const showBusinessModal = () => {
    setIsBusinessModalOpen(true);
  };
  const handleBusinessCancel = () => {
    setIsBusinessModalOpen(false);
  };

  const showViewBusinessModal = () => {
    setViewBusinessModal(true);
  };
  const handleViewBusinessCancel = () => {
    setViewBusinessModal(false);
  };

  const showDeleteBusinessModal = () => {
    setDeleteBusinessModal(true);
  };
  const handleDeleteBusinessCancel = () => {
    setDeleteBusinessModal(false);
  };

  const handleDeleteBusiness = () => {
    console.log("Delete Business");
  };

  const onFinish = () => {
    const formData = { ...form.getFieldsValue(true) };
    console.log("All input values:", formData);
  };
  return (
    <div>
      {/* Update Business Modal */}
      <Modal
        title={
          <h2 className="font-bold text-center uppercase">Update Business</h2>
        }
        open={isBusinessModalOpen}
        onCancel={handleBusinessCancel}
        footer={null}
        style={{
          top: 20,
          maxHeight: "calc(100vh - 100px)",
        }}
      >
        <div className=" flex justify-center pb-3">
          <Form
            form={form}
            onFinish={onFinish}
            className="w-[90%] "
            layout="vertical"
          >
            <div className="flex flex-col items-center w-full   mt-4">
              <Form.Item
                hasFeedback
                name="businessName"
                label="Business Name"
                validateTrigger="onBlur"
                className="mb--0 w-full"
                rules={[{ required: true, max: 500 }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="organization"
                label="Organization"
                validateTrigger="onBlur"
                hasFeedback
                className="mb--0 w-full"
                rules={[
                  { required: true, message: "Please select organization" },
                ]}
              >
                <Select>
                  <Option value="msk">MSK </Option>
                  <Option value="Infolog">Infolog gh</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="location"
                label="Location"
                validateTrigger="onBlur"
                hasFeedback
                className="mb--0 w-full"
                rules={[{ required: true, message: "Please select location" }]}
              >
                <Select>
                  <Option value="male">East Airport</Option>
                  <Option value="female">East Legon</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="description"
                label="Description"
                validateTrigger="onBlur"
                hasFeedback
                className="mb--0 w-full"
                rules={[
                  {
                    required: true,
                    message: "Give a brief description for the organization",
                  },
                ]}
              >
                <TextArea
                  // value={value}
                  // onChange={(e) => setValue(e.target.value)}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Form.Item>
              <div className="flex w-full">
                <Button htmlType="submit" className="p-2 btnBg w-1/3">
                  Update
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </Modal>

      {/* View Business Modal */}
      <Modal
        title={
          <h2 className="font-bold text-center uppercase">
            Business Information
          </h2>
        }
        open={viewBusinessModal}
        onCancel={handleViewBusinessCancel}
        footer={null}
        // style={{
        //   overflowY: "auto",
        //   // height: "100%",
        //   maxHeight: "calc(100vh - 100px)",
        // }}
      >
        <div className=" flex flex-col gap-y-3 pb-3">
          <p>
            <span className="font-bold">Name:</span> Emano LMT
          </p>

          <p>
            <span className="font-bold">Organization:</span>{" "}
            <span>myStoreKeeper</span>
          </p>

          <p>
            <span className="font-bold">Location:</span> Accra,Ghana
          </p>
          <p>
            <span className="font-bold"> Description:</span> Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Facilis accusantium libero,
            magnam magni aperiam ipsa repudiandae harum quia rem assumenda
            possimus, soluta quos nam, dolorem doloremque similique sed
            inventore ad!
          </p>
        </div>
      </Modal>

      {/* Delete Business Modal */}
      <Modal
        title={
          <h2 className="font-bold text-center uppercase">Confirm Deletion</h2>
        }
        open={deleteBusinessModal}
        onCancel={handleDeleteBusinessCancel}
        footer={[
          <button
            key="delete"
            className="mr-4 px-3 py-1 border hover:bg-red-300 text-red-700 rounded"
            onClick={handleDeleteBusiness}
          >
            Delete
          </button>,
          <button
            key="cancel"
            className="px-3 py-1 border hover:bg-gray-200  rounded"
            onClick={handleDeleteBusinessCancel}
          >
            Cancel
          </button>,
        ]}
      >
        <div className=" flex flex-col gap-y-3 pb-3">
          <Form layout="vertical">
            <Form.Item
              name="reason"
              label="Tell us why you want to delete this business."
              validateTrigger="onBlur"
              hasFeedback
              className="mb--0 w-full"
              rules={[
                {
                  required: true,
                  message: "Give a reason for the deleting of the business",
                },
              ]}
            >
              <TextArea
                // value={value}
                // onChange={(e) => setValue(e.target.value)}
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>

      <div className="businessCard flex flex-col w-[15rem] p-4 bg-white border shadow rounded dark:text-white  dark:bg-[#32312f] ">
        <div className="mb-3">
          <h2 className="font-bold">Emano LMT</h2>
          <p>Ghana,Accra East Legon</p>
        </div>
        <div className="flex items-center justify-between">
          <p>15,Sep 2023</p>
          <p className="flex items-center gap-2">
            <button onClick={showViewBusinessModal}>
              <LuEye className="text-2xl" />
            </button>
            <button onClick={showBusinessModal}>
              <FaRegEdit className="text-lg" />
            </button>
            <button onClick={showDeleteBusinessModal}>
              <AiOutlineDelete className="text-lg" />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export const DeleteBusinessTab = () => {
  const [viewBusinessModal, setViewBusinessModal] = useState(false);
  const [deleteBusinessModal, setDeleteBusinessModal] = useState(false);

  const showViewBusinessModal = () => {
    setViewBusinessModal(true);
  };
  const showDeleteBusinessModal = () => {
    setDeleteBusinessModal(true);
  };
  const handleDeleteBusinessCancel = () => {
    setDeleteBusinessModal(false);
  };

  const handleDeleteBusiness = () => {
    console.log("Delete Business");
  };
  const handleViewBusinessCancel = () => {
    setViewBusinessModal(false);
  };
  return (
    <div>
      {/* View Business Modal */}
      <Modal
        title={
          <h2 className="font-bold text-center uppercase">
            Business Information
          </h2>
        }
        open={viewBusinessModal}
        onCancel={handleViewBusinessCancel}
        footer={null}
      >
        <div className=" flex flex-col gap-y-3 pb-3">
          <p>
            <span className="font-bold">Name:</span> Emano LMT
          </p>

          <p>
            <span className="font-bold">Organization:</span>{" "}
            <span>myStoreKeeper</span>
          </p>

          <p>
            <span className="font-bold">Location:</span> Accra,Ghana
          </p>
          <p>
            <span className="font-bold"> Description:</span> Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Facilis accusantium libero,
            magnam magni aperiam ipsa repudiandae harum quia rem assumenda
            possimus, soluta quos nam, dolorem doloremque similique sed
            inventore ad!
          </p>
        </div>
      </Modal>

      {/* Delete Business Modal */}
      <Modal
        title={
          <h2 className="font-bold text-center uppercase">Approve Deletion</h2>
        }
        open={deleteBusinessModal}
        onCancel={handleDeleteBusinessCancel}
        footer={[
          <button
            key="delete"
            className="mr-4 px-3 py-1 border hover:bg-red-300 text-red-700 rounded"
            onClick={handleDeleteBusiness}
          >
            Approve
          </button>,
          <button
            key="cancel"
            className="px-3 py-1 border hover:bg-gray-200  rounded"
            onClick={handleDeleteBusinessCancel}
          >
            Cancel
          </button>,
        ]}
      >
        <div className=" flex flex-col gap-y-3 pb-3">
          <div>
            <h2 className="font-bold">The reason why it was deleted</h2>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dicta,
              vitae repudiandae velit libero aperiam veniam corrupti
              necessitatibus quaerat maxime impedit commodi. Aliquam quis
              asperiores quibusdam quod distinctio temporibus aspernatur.
            </p>
          </div>
          <Form layout="vertical">
            <Form.Item
              name="reason"
              label={
                <label className="font-bold">
                  Tell us why you want to approve this deletion.
                </label>
              }
              validateTrigger="onBlur"
              hasFeedback
              className="mb--0 w-full"
              rules={[
                {
                  required: true,
                  message: "Give a reason for the deleting of the business",
                },
              ]}
            >
              <TextArea
                // value={value}
                // onChange={(e) => setValue(e.target.value)}
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <div className="businessCard flex flex-col w-[15rem] p-4 bg-white border shadow rounded   dark:text-white  dark:bg-[#32312f] ">
        <div className="mb-3">
          <h2 className="font-bold">Danso LMT</h2>
          <p>Ghana,Sunyani-Fiapre</p>
        </div>
        <div className="flex items-center justify-between">
          <p>15,Sep 2023</p>
          <p className="flex items-center gap-2">
            <button onClick={showViewBusinessModal}>
              <LuEye className="text-2xl" />
            </button>

            <button onClick={showDeleteBusinessModal}>
              <MdAutoDelete className="text-2xl" />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export const DeletedBusinessTab = () => {
  const [viewBusinessModal, setViewBusinessModal] = useState(false);
  const [deleteBusinessModal, setDeleteBusinessModal] = useState(false);

  const showViewBusinessModal = () => {
    setViewBusinessModal(true);
  };
  const showDeleteBusinessModal = () => {
    setDeleteBusinessModal(true);
  };
  const handleDeleteBusinessCancel = () => {
    setDeleteBusinessModal(false);
  };

  const handleDeleteBusiness = () => {
    console.log("Delete Business");
  };
  const handleViewBusinessCancel = () => {
    setViewBusinessModal(false);
  };
  return (
    <div>
      {/* View Business Modal */}
      <Modal
        title={
          <h2 className="font-bold text-center uppercase">
            Business Information
          </h2>
        }
        open={viewBusinessModal}
        onCancel={handleViewBusinessCancel}
        footer={null}
      >
        <div className=" flex flex-col gap-y-3 pb-3">
          <p>
            <span className="font-bold">Name:</span> Emano LMT
          </p>

          <p>
            <span className="font-bold">Organization:</span>{" "}
            <span>myStoreKeeper</span>
          </p>

          <p>
            <span className="font-bold">Location:</span> Accra,Ghana
          </p>
          <p>
            <span className="font-bold"> Description:</span> Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Facilis accusantium libero,
            magnam magni aperiam ipsa repudiandae harum quia rem assumenda
            possimus, soluta quos nam, dolorem doloremque similique sed
            inventore ad!
          </p>
        </div>
      </Modal>

      {/* Delete Business Modal */}
      <Modal
        title={
          <h2 className="font-bold text-center uppercase">Restore Deletion</h2>
        }
        open={deleteBusinessModal}
        onCancel={handleDeleteBusinessCancel}
        footer={[
          <button
            key="delete"
            className="mr-4 px-3 py-1 border hover:bg-red-300 text-red-700 rounded"
            onClick={handleDeleteBusiness}
          >
            Restore
          </button>,
          <button
            key="cancel"
            className="px-3 py-1 border hover:bg-gray-200  rounded"
            onClick={handleDeleteBusinessCancel}
          >
            Cancel
          </button>,
        ]}
      >
        <div className=" flex flex-col gap-y-3 pb-3">
          <div>
            <h2 className="font-bold">The reason why it was deleted</h2>
            <p className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dicta,
              vitae repudiandae velit
            </p>
          </div>
          <Form layout="vertical">
            <Form.Item
              name="reason"
              label={
                <label className="font-bold">
                  Reason to restore this deleted business?
                </label>
              }
              validateTrigger="onBlur"
              hasFeedback
              className="mb--0 w-full"
              rules={[
                {
                  required: true,
                  message: "Give reason for restoring this business",
                },
              ]}
            >
              <TextArea
                // value={value}
                // onChange={(e) => setValue(e.target.value)}
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <div className="businessCard flex flex-col w-[15rem] p-4 bg-white border shadow rounded   dark:text-white  dark:bg-[#32312f] ">
        <div className="mb-3">
          <h2 className="font-bold">Danso LMT</h2>
          <p>Ghana,Sunyani-Fiapre</p>
        </div>
        <div className="flex items-center justify-between">
          <p>15,Sep 2023</p>
          <p className="flex items-center gap-2">
            <button onClick={showViewBusinessModal}>
              <LuEye className="text-2xl" />
            </button>

            <button onClick={showDeleteBusinessModal}>
              <FaRecycle className="text-2xl" />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export const OrganizationalSetting = () => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const onFinish = () => {
    const formData = { ...form.getFieldsValue(true) };
    console.log("All input values:", formData);
  };
  return (
    <div className=" flex justify-center pb-3 ">
      <Form
        form={form}
        onFinish={onFinish}
        className="w-[90%] md:w-[50%]  dark:text-white "
        layout="vertical"
      >
        <div className="flex flex-col items-center w-full   mt-4">
          <Form.Item
            hasFeedback
            name="organizationName"
            label={<label className="dark:text-white">Organization Name</label>}
            validateTrigger="onBlur"
            className="mb--0 w-full "
            rules={[{ required: true, max: 500 }]}
          >
            <Input />
          </Form.Item>
          <div className="flex gap-4 w-full">
            <Form.Item
              hasFeedback
              name="displayName"
              label={<label className="dark:text-white">Display Name</label>}
              validateTrigger="onBlur"
              className="mb--0 w-full"
              rules={[{ required: true, max: 500 }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="domainName"
              label={<label className="dark:text-white">Domain Name</label>}
              validateTrigger="onBlur"
              className="mb--0 w-full"
              rules={[{ required: true, max: 500 }]}
            >
              <Input />
            </Form.Item>
          </div>
          <Form.Item
            name="location"
            label={<label className="dark:text-white">Location</label>}
            validateTrigger="onBlur"
            hasFeedback
            className="mb--0 w-full"
            rules={[{ required: true, message: "Please select location" }]}
          >
            <Select>
              <Option value="male">East Airport</Option>
              <Option value="female">East Legon</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="description"
            label={<label className="dark:text-white">Description</label>}
            validateTrigger="onBlur"
            hasFeedback
            className="mb--0 w-full"
            rules={[
              {
                required: true,
                message: "Give a brief description for the organization",
              },
            ]}
          >
            <TextArea
              // value={value}
              // onChange={(e) => setValue(e.target.value)}
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Form.Item>
          <div className="flex justify-between w-full">
            <Button className="p-2 btnBgRed w-1/3 dark:btnBgDark">
              Delete
            </Button>
            <Button htmlType="submit" className="p-2 btnBg w-1/3">
              Save
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

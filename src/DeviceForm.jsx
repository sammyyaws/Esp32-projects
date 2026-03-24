import { Formik, Form, Field } from "formik";

export default function DeviceForm({ addDevice }) {
  return (
    <Formik
      initialValues={{ deviceName: "", time: "", pin: "" }}
      onSubmit={(values, { resetForm }) => {
        addDevice(values); // call function passed as prop
        resetForm();
      }}
    >
      {() => (
        <Form className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-lg w-80 md:w-96">
          <Field
            name="deviceName"
            placeholder="Device Name"
            className="border border-gray-300 rounded-md p-2 w-full"
          />

          <Field
            type="time"
            name="time"
            className="border border-gray-300 rounded-md p-2 w-full"
          />

          <Field
            as="select"
            name="pin"
            className="border border-gray-300 rounded-md p-2 w-full"
          >
            <option value="">Select Pin</option>
            <option value="1">Pin 1</option>
            <option value="2">Pin 2</option>
            <option value="3">Pin 3</option>
            <option value="3">Pin 4</option>
          </Field>

          <button
            type="submit"
            className="bg-emerald-500 text-white py-2 rounded w-full hover:bg-emerald-600"
          >
            Save Device
          </button>
        </Form>
      )}
    </Formik>
  );
}
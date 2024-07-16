import { useState } from "react";
import Button from "../components/button";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";

// Define Yup schema for validation
const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  age: yup
    .number()
    .positive("Age must be a positive number")
    .required("Age is required"),
  about: yup.string().required("About field is required"),
});

type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
  about: string;
};

type ValuePiece = Date | null;

type DateValue = ValuePiece | [ValuePiece, ValuePiece];

const Glovo = () => {
  const [date, setDate] = useState<DateValue>(new Date());
  const [time, setTime] = useState<string | null>("10:00");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h4>
        On this section I made forms which show my work with React librarys and
        forms in general
      </h4>
      <form
        className="glovo"
        onSubmit={(values) => {
          values.preventDefault();
          const formElements = values.target as HTMLFormElement;
          const formData = new FormData(formElements);
          const formValues: { [key: string]: string } = {};
          formData.forEach((value, key) => {
            formValues[key] = value as string;
          });
          //sendToServer(formData)
          console.log(formData);
        }}
      >
        <h3>Make an order</h3>
        <div className="field field--food">
          <label className="field__label" htmlFor="food">
            Pick a meal{" "}
          </label>
          <select className="input" name="food" id="food">
            <option value="pizza">Pizza</option>
            <option value="hamburger">Hamburger</option>
            <option value="tacos">Tacos</option>
            <option value="palacinke">Pancakes</option>
            <option value="torta_od_cokolade">Chocolate cake</option>
          </select>
        </div>
        <div className="field field--food">
          <label className="field__label" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="input"
            name="quantity"
            id="quantity"
            type="number"
          />
        </div>
        <h3>Delivery informations</h3>
        <div className="field field--food">
          <label className="field__label" htmlFor="fullName">
            Name and surname
          </label>
          <input className="input" name="fullName" id="fullName" type="text" />
        </div>
        <div className="field field--food">
          <label className="field__label" htmlFor="address">
            Adress
          </label>
          <input className="input" name="address" id="address" type="text" />
        </div>
        <Button color="blue">Order</Button>
      </form>

      <h1>React date picker</h1>
      <form className="glovo">
        <div className="field">
          <label className="field__label" htmlFor="date">
            Date
          </label>
          <DatePicker name="date" onChange={setDate} value={date} />
        </div>
        <div className="field">
          <label className="field__label" htmlFor="time">
            Time
          </label>
          <TimePicker onChange={setTime} value={time} />
        </div>
      </form>
    </>
  );
};
export default Glovo;

import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";

type RequestFormValues = {
  inputSample: string;
  textAreaSample: string;
  dateSample: string;
};

const RequestForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();

  const onSubmit: SubmitHandler<RequestFormValues> = (data) => console.log(data);
  const onError = (errors: any) => {
    console.log("error", errors);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input type="text" {...register("inputSample", {required: "this field is required"})} />
        {errors.inputSample && <div className="error">{errors.inputSample.message}</div>}
        <input
          type="date"
          {...register("dateSample", {
            min: {
              value: new Date().toLocaleDateString(),
              message: `Min date is ${new Date().toLocaleDateString()}`
            }
          })}
        />
        {errors.dateSample && <div className="error">{errors.dateSample.message}</div>}
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default RequestForm;

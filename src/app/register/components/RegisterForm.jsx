"use client";

import registerUser from "@/app/actions/auth/registerUser";

const RegisterForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.productName.value;
    const email = form.email.value;
    const password = form.password.value;
    let payload = { name, email, password };
    console.log(payload);
    let res = await registerUser(payload);
    console.log(res);
  };
  return (
    <div>
      <form className="space-y-5 ml-10 mt-10" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">User Name:</label>
          <input className="border" type="text" name="productName" id="" />
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input className="border" type="email" name="email" id="" />
        </div>
        <div>
          <label htmlFor="">password:</label>
          <input className="border" type="password" name="password" id="" />
        </div>
        <button className="bg-gray-500 p-4" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

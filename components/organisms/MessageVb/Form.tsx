import type { NextPage } from "next";
import { FormEvent, useState } from "react";

const Form: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let form = {
      name,
      email,
      message,
    };

    const rawResponse = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const content = await rawResponse.json();

    // print to screen
    alert(content.data.tableRange);

    // Reset the form fields
    setMessage("");
    setName("");
    setEmail("");
  };
  return (
    <>
      <form className="py-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label gray-vb meltow-100">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            className="form-control meltow-100"
            placeholder="Nama Kamu"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label gray-vb meltow-100">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            className="form-control meltow-100"
            placeholder="Email Kamu"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label gray-vb meltow-100">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            className="form-control meltow-100"
            placeholder="Jangan Spam Yakk!"
            required
          />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button
            type="submit"
            className="shadow py-2 px-5 bg-orange-vb border-0 mb-4 mb-lg-0 rounded-5 meltow-200 blue-vb"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
export default Form;

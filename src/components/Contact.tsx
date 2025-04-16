import { ChangeEvent, FormEvent, useState } from "react";
import SocMedCard from "./SocMedCard";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(data);
  };
  return (
    <div className="flex justify-center">
      <div className="flex w-1/2 flex-col gap-4">
        <SocMedCard icon={""} text={"+63 9274518883"} />
        <SocMedCard icon={""} text={"ivancsgarcia"} />
        <SocMedCard icon={""} text={"ivancsgarcia"} />
      </div>
      <div className="h-full w-[1px] bg-black"></div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto rounded-lg border p-8 shadow-md"
      >
        <h1 className="mb-8 text-center text-4xl font-bold">Contact Me</h1>
        <p className="mb-4 text-center">icsgarcia.student@ua.edu.ph</p>
        <p className="mb-4 text-center text-sm italic">
          Feel free to contact me with any inquiries or questions!
        </p>
        <div className="mb-4">
          <label htmlFor="fullName" className="block">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={data.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, name: e.target.value })
            }
            className="w-full border p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, email: e.target.value })
            }
            className="w-full border p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={data.subject}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, subject: e.target.value })
            }
            className="w-full border p-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={data.message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setData({ ...data, message: e.target.value })
            }
            className="w-full border p-2"
          ></textarea>
        </div>

        <button className="rounded border px-4 py-2">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

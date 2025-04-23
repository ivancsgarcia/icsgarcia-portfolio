import { ChangeEvent, FormEvent, useState } from "react";
import SocMedCard from "./SocMedCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faSquareXTwitter,
    faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

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
        <div id="contact" className="min-h-screen px-4 py-8 lg:py-[100px]">
            <div className="mb-8 text-center">
                <h1 className="text-xl font-bold">Contact Me</h1>
                <p className="">
                    Feel free to contact me with any inquiries or questions!
                </p>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="grid grid-cols-2 gap-4 p-8 lg:w-1/2 lg:grid-cols-1">
                    <SocMedCard
                        icon={<FontAwesomeIcon icon={faPhone} />}
                        text={"+63 9274518883"}
                    />
                    <SocMedCard
                        icon={<FontAwesomeIcon icon={faEnvelope} />}
                        text={"ivancsgarcia"}
                    />
                    <SocMedCard
                        icon={<FontAwesomeIcon icon={faLinkedin} />}
                        text={"ivancsgarcia"}
                    />
                    <SocMedCard
                        icon={<FontAwesomeIcon icon={faSquareXTwitter} />}
                        text={"ivancsgarcia"}
                    />
                    <SocMedCard
                        icon={<FontAwesomeIcon icon={faLinkedin} />}
                        text={"ivancsgarcia"}
                    />
                    <SocMedCard
                        icon={<FontAwesomeIcon icon={faSquareGithub} />}
                        text={"ivancsgarcia"}
                    />
                </div>
                <div className="mx-auto h-[1px] w-1/2 bg-[#1a1a1a] lg:h-screen lg:w-[1px] dark:bg-[#fafafa]"></div>
                <div className="p-8 lg:flex lg:w-1/2 lg:items-center">
                    <form
                        onSubmit={handleSubmit}
                        className="flex w-full flex-col border p-8 shadow-md"
                    >
                        <h2 className="mb-8 text-center text-xl">
                            Send me a message!
                        </h2>

                        <div className="mb-4">
                            <label htmlFor="fullName" className="mb-1 block">
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
                            <label htmlFor="email" className="mb-1 block">
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
                            <label htmlFor="subject" className="mb-1 block">
                                Subject
                            </label>
                            <input
                                id="subject"
                                type="text"
                                value={data.subject}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setData({
                                        ...data,
                                        subject: e.target.value,
                                    })
                                }
                                className="w-full border p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="mb-1 block">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                value={data.message}
                                onChange={(
                                    e: ChangeEvent<HTMLTextAreaElement>,
                                ) =>
                                    setData({
                                        ...data,
                                        message: e.target.value,
                                    })
                                }
                                className="w-full border p-2"
                            ></textarea>
                        </div>

                        <button className="cursor-pointer rounded border px-4 py-2 hover:bg-gray-200 dark:hover:bg-black">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

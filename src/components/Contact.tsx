import { ChangeEvent, FormEvent, useState } from "react";
import SocMedCard from "./SocMedCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faSquareXTwitter,
    faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "motion/react";

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
        <section
            id="contact"
            className="bg-[var(--light-bg)] px-4 py-16 dark:bg-[var(--dark-bg)]"
        >
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-2 inline-block border-b-4 border-[var(--primary-blue)] pb-1 text-3xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)]">
                        Contact Me
                    </h2>
                    <p className="mt-4 text-center text-[var(--light-text)]/70 dark:text-[var(--dark-text)]/70">
                        Feel free to reach out for collaborations or just a
                        friendly chat
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="rounded-xl bg-[var(--light-accent)] p-6 shadow-md dark:bg-[var(--dark-secondary)]"
                    >
                        <h3 className="mb-6 text-xl font-semibold text-[var(--light-text)] dark:text-[var(--dark-text)]">
                            Get in Touch
                        </h3>

                        <div className="space-y-4">
                            <SocMedCard
                                icon={<FontAwesomeIcon icon={faPhone} />}
                                text="+63 9274518883"
                                link="tel:+639274518883"
                            />
                            <SocMedCard
                                icon={<FontAwesomeIcon icon={faEnvelope} />}
                                text="icsgarcia2002@gmail.com"
                                link="mailto:icsgarcia2002@gmail.com"
                            />
                            <SocMedCard
                                icon={<FontAwesomeIcon icon={faLinkedin} />}
                                text="Connect on LinkedIn"
                                link="https://linkedin.com/in/ivancsgarcia"
                            />
                            <SocMedCard
                                icon={
                                    <FontAwesomeIcon icon={faSquareXTwitter} />
                                }
                                text="Follow on X"
                                link="https://twitter.com/ivancsgarcia"
                            />
                            <SocMedCard
                                icon={<FontAwesomeIcon icon={faSquareGithub} />}
                                text="Check my GitHub"
                                link="https://github.com/ivancsgarcia"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="rounded-xl bg-white p-6 shadow-md dark:bg-[var(--dark-secondary)]"
                    >
                        <h3 className="mb-6 text-xl font-semibold text-[var(--light-text)] dark:text-[var(--dark-text)]">
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="mb-1 block text-sm font-medium text-[var(--light-text)] dark:text-[var(--dark-text)]"
                                >
                                    Full Name
                                </label>
                                <input
                                    id="fullName"
                                    type="text"
                                    value={data.name}
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>,
                                    ) =>
                                        setData({
                                            ...data,
                                            name: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-lg border border-[var(--light-border)] bg-white p-3 text-[var(--light-text)] shadow-sm focus:border-[var(--primary-blue)] focus:outline-none dark:border-[var(--dark-border)] dark:bg-[var(--dark-accent)] dark:text-[var(--dark-text)]"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-1 block text-sm font-medium text-[var(--light-text)] dark:text-[var(--dark-text)]"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>,
                                    ) =>
                                        setData({
                                            ...data,
                                            email: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-lg border border-[var(--light-border)] bg-white p-3 text-[var(--light-text)] shadow-sm focus:border-[var(--primary-blue)] focus:outline-none dark:border-[var(--dark-border)] dark:bg-[var(--dark-accent)] dark:text-[var(--dark-text)]"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-1 block text-sm font-medium text-[var(--light-text)] dark:text-[var(--dark-text)]"
                                >
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    type="text"
                                    value={data.subject}
                                    onChange={(
                                        e: ChangeEvent<HTMLInputElement>,
                                    ) =>
                                        setData({
                                            ...data,
                                            subject: e.target.value,
                                        })
                                    }
                                    className="w-full rounded-lg border border-[var(--light-border)] bg-white p-3 text-[var(--light-text)] shadow-sm focus:border-[var(--primary-blue)] focus:outline-none dark:border-[var(--dark-border)] dark:bg-[var(--dark-accent)] dark:text-[var(--dark-text)]"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-1 block text-sm font-medium text-[var(--light-text)] dark:text-[var(--dark-text)]"
                                >
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
                                    className="w-full rounded-lg border border-[var(--light-border)] bg-white p-3 text-[var(--light-text)] shadow-sm focus:border-[var(--primary-blue)] focus:outline-none dark:border-[var(--dark-border)] dark:bg-[var(--dark-accent)] dark:text-[var(--dark-text)]"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="flex w-full items-center justify-center rounded-lg bg-[var(--primary-blue)] px-4 py-3 font-medium text-white transition-colors duration-300 hover:bg-[var(--primary-blue-hover)] focus:ring-2 focus:ring-[var(--primary-blue)] focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-[var(--dark-bg)]"
                            >
                                <FontAwesomeIcon
                                    icon={faPaperPlane}
                                    className="mr-2"
                                />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Form() {
    const [ref, InView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        access_key: process.env.REACT_APP_ACCESS_KEY,
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault();

        const data = JSON.stringify(formData);

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                setSuccess(true);
                setFormData({
                    ...formData,
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                setTimeout(() => {
                    setSuccess(false);
                }, 3000)
            })
            .catch((err) => console.log(err));
    };
}
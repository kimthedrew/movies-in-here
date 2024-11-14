'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [message, setMessage] = useState("");
    const router = useRouter();
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const  handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setMessage("passwords do not match");
            return;
        }

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage("Signup successful!");
                console.log("redirecting to home page..."); 
                console.log("Sign up successful, redirecting...")
                

                setTimeout(() => router.push ('/'), 1000);
                //another page
                setTimeout(() => router.push('/'), 1000);                //another page
            } else {
                setMessage("Signup failed. Try again.");
            }
        }
        catch(error) {
            console.error("Error during signup:", error);
            setMessage("An error occured. Please try again.");
        }
    };

    return (
        <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto' }}>
            <h1>
                Sign Up </h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full p-3 bg-neutral-700 rounded-lg border border-neutral-600 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 bg-neutral-700 rounded-lg border border-neutral-600 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        />
                        <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="password"
                        className="w-full p-3 bg-neutral-700 rounded-lg border border-neutral-600 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        />
                        <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="confirm password"
                        className="w-full p-3 bg-neutral-700 rounded-lg border border-neutral-600 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        />
                        <button type="submit" 
                        className="w-full p-3 bg-neutral-700 rounded-lg border border-neutral-600 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-blue-500" 
                        style={{ padding: '0.5rem' }}>Sign Up</button>
            </form>
        </div>
    )
}
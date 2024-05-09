'use client';

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
// import { AuthContext } from '../context/AuthContext'; // Import AuthContext

const LoginPage = () => {
    const [activeTab, setActiveTab] = useState('login'); // State to manage active tab
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // For registration
    const [name, setName] = useState(''); // For registration
    const [error, setError] = useState(String);
    // const router = useRouter();
    // const { login, register } = useContext(AuthContext); // Use login and register functions from AuthContext

    const handleTabSwitch = (tab: React.SetStateAction<string>) => {
        setActiveTab(tab);
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (activeTab === 'login') {
            try {
                // const response = await login(email, password); // Call login function
                // if (response.error) {
                //     setError(response.error);
                //     return;
                // }

                // router.push('/'); // Redirect to home page on successful login
            } catch (err) {
                console.error(err); // Log errors for debugging
                setError('An error occurred. Please try again later.');
            }
        } else {
            try {
                // const response = await register(name, email, password, confirmPassword); // Call register function
                // if (response.error) {
                //     setError(response.error);
                //     return;
                // }

                // router.push('/'); // Redirect to home page on successful registration
            } catch (err) {
                console.error(err); // Log errors for debugging
                setError('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <main className="bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6 py-24 md:flex md:items-center justify-center">
                <div className="w-full md:w-1/2">
                    <h2 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                        DOCXTRA Authentication
                    </h2>

                    <ul className="flex flex-row mb-6">
                        <li
                            className={`mr-4 cursor-pointer ${activeTab === 'login' ? 'text-purple-500 font-bold' : 'text-gray-500'
                                }`}
                            onClick={() => handleTabSwitch('login')}
                        >
                            Login
                        </li>
                        <li
                            className={`cursor-pointer ${activeTab === 'register' ? 'text-purple-500 font-bold' : 'text-gray-500'
                                }`}
                            onClick={() => handleTabSwitch('register')}
                        >
                            Register
                        </li>
                    </ul>

                    {activeTab === 'login' && (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-4 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-3 py-4 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            <button
                                type="submit"
                                className="btn-try-now items-center text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                                Login
                            </button>
                        </form>
                    )}

                    {activeTab === 'register' && (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-4 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-4 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-3 py-4 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="w-full px-3 py-4 rounded-md border border-gray-300 dark:border-gray-700 bg"
                                ></input>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="w-full px-3 py-4 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            <button
                                type="submit"
                                className="btn-try-now items-center text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                                Register
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </main>
    );
};

export default LoginPage;



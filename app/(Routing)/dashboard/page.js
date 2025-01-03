"use client"
import { useState, useEffect, use } from "react";
import { LogOut, User, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Loader from '@/Components/Loader';


const UserProfile = () => {
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/auth/login";
    };

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const USER_PROFILE = process.env.NEXT_PUBLIC_USER_PROFILE;
        const fetchUserProfile = async () => {
            const token = localStorage.getItem("authToken");
            if (!token) {
                router.push("/auth/login");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(USER_PROFILE, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                const data = await response.json();

                if (data.status === "success") {
                    setUserData(data.data);
                }
            } catch (error) {
            }
            setLoading(false);
        };

        fetchUserProfile();
    }, []);

    if (loading) return <Loader />;

    return (
        <>
            <title>My Account - The Cricket Nerd</title>
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
                <div className="max-w-3xl mx-auto pt-16">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-blue-600">Profile</h1>
                        <p className="text-gray-500 mt-2">Manage your account information</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                                <div className="p-1 rounded-lg">
                                    <User className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Full Name</div>
                                    <div className="text-lg font-semibold text-gray-900">{userData['Full Name']}</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                                <div className="p-1 rounded-lg">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Email Address</div>
                                    <div className="text-lg font-semibold text-gray-900">{userData['Email']}</div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200" />
                        <div className="flex justify-end">
                            <Button
                                onClick={handleLogout}
                                variant="outline"
                                className="flex items-center space-x-2 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                            >
                                <LogOut className="w-4 h-4" />
                                <span>Logout</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;

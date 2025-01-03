'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/Components/ui/button"
import { Label } from "@/Components/ui/label"
import { UserPlus, Mail, Lock, Eye, EyeOff, Loader2 } from 'lucide-react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginMetaInfo from '@/Components/MetaInfo/(auth)/LoginMetaInfo'
import axios from 'axios'

export default function RegistrationForm() {
    const API_LOGIN = process.env.NEXT_PUBLIC_LOGIN;
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showVerifyPassword, setShowVerifyPassword] = useState(false)
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const togglePasswordVisibility = () => setShowPassword((prev) => !prev)

    const onSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            let response = await axios.post(API_LOGIN, {
                DataSend: true,
                email: email,
                password: password
            });
            response = response.data;
            if (response.status === 'success') {
                window.location.href = "/dashboard";
                localStorage.setItem("authToken", response.token);
                toast.success('Login successful!');
            } else if (response.message === 'NotVerified') {
                localStorage.setItem('userEmail', email);
                router.push('/auth/verification');
            } else {
                toast.error('Invalid Credential!!');
            }
        } catch (error) {
            toast.error('Login failed! Please check your credentials.');
        } finally {
            setIsLoading(false)
        }
    }

    function Login() {

    }

    return (
        <>
            <LoginMetaInfo />
            <div className="flex items-center justify-center min-h-screen  from-primary/20 to-secondary/20">
                <Card className="w-[400px] shadow-lg">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-3xl font-bold text-center text-[#2e3192]">Login</CardTitle>
                        <CardDescription className="text-center text-base">
                            Join our quiz community and start your learning journey!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <form onSubmit={onSubmit} className="space-y-4">

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                        className="pl-10 py-2 w-full border rounded-md text-sm" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-sm font-medium">Create Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        className="pl-10 py-2 w-full border rounded-md text-sm"
                                        placeholder='*******' />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-3 h-5 w-5 text-gray-400"
                                    >
                                        {showPassword ? <EyeOff /> : <Eye />}
                                    </button>
                                </div>
                            </div>
                            <Button className="w-full mt-6 bg-[#2e3192] hover:bg-[#2e3192]" type="submit" disabled={isLoading} onClick={Login}>
                                {isLoading ? (
                                    <>
                                        Login...
                                    </>
                                ) : (
                                    'Sign In'
                                )}
                            </Button>
                        </form>
                        <Button
                            variant="link"
                            className="w-full"
                            onClick={() => router.push('/auth/register')}
                        >
                            Go to Registration
                        </Button>
                    </CardContent>

                </Card>
            </div>
            <ToastContainer />
        </>
    )
}

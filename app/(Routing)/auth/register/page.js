"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { UserPlus, Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterMetaInfo from "@/Components/MetaInfo/(auth)/RegisterMetaInfo";

export default function RegistrationForm() {
    const API_REGISTER = process.env.NEXT_PUBLIC_REGISTER;
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showVerifyPassword, setShowVerifyPassword] = useState(false);
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifypassword, setVerifyPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const router = useRouter();

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
    const toggleVerifyPasswordVisibility = () =>
        setShowVerifyPassword((prev) => !prev);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long");
            return;
        }
        if (password !== verifypassword) {
            setPasswordError("Passwords do not match");
            return;
        } else {
            setPasswordError("");
        }

        setIsLoading(true);

        try {
            const response = await axios.post(API_REGISTER, {
                fullname,
                email,
                password,
            });

            if (response.data?.status === "success") {
                localStorage.setItem('userEmail', email);
                toast.success("Account created successfully!");
                setTimeout(() => {
                    router.push("/auth/verification");
                }, 2000);
            } else {
                toast.error(response.data?.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <RegisterMetaInfo />
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow flex items-center justify-center py-10">
                    <Card className="w-[400px] shadow-lg">
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-3xl font-bold text-center text-[#2e3192]">
                                Create an account
                            </CardTitle>
                            <CardDescription className="text-center text-base">
                                Join our community and explore your knowledge!
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <form onSubmit={onSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="fullname" className="text-sm font-medium">
                                        Full Name
                                    </Label>
                                    <div className="relative">
                                        <UserPlus className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <input
                                            onChange={(e) => setFullName(e.target.value)}
                                            id="fullname"
                                            name="fullname"
                                            placeholder="Full Name"
                                            className="pl-10 py-2 w-full border rounded-md text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <input
                                            id="email"
                                            name="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            placeholder="m@example.com"
                                            className="pl-10 py-2 w-full border rounded-md text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-sm font-medium">
                                        Create Password
                                    </Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <input
                                            onChange={(e) => setPassword(e.target.value)}
                                            id="password"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            minLength="6"
                                            className="pl-10 py-2 w-full border rounded-md text-sm"
                                            placeholder='*******'
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute right-3 top-3 h-5 w-5 text-gray-400"
                                        >
                                            {showPassword ? <EyeOff /> : <Eye />}
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="verifypassword"
                                        className="text-sm font-medium"
                                    >
                                        Verify Password
                                    </Label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                        <input
                                            onChange={(e) => setVerifyPassword(e.target.value)}
                                            id="verifypassword"
                                            name="verifypassword"
                                            type={showVerifyPassword ? "text" : "password"}
                                            minLength="6"
                                            className="pl-10 py-2 w-full border rounded-md text-sm"
                                            placeholder='*******'
                                        />
                                        <button
                                            type="button"
                                            onClick={toggleVerifyPasswordVisibility}
                                            className="absolute right-3 top-3 h-5 w-5 text-gray-400"
                                        >
                                            {showVerifyPassword ? <EyeOff /> : <Eye />}
                                        </button>
                                    </div>
                                </div>
                                {passwordError && (
                                    <p className="text-red-600 text-sm">{passwordError}</p>
                                )}
                                <Button
                                    className="w-full mt-6 bg-[#2e3192] hover:bg-[#2e3192]"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Creating account...
                                        </>
                                    ) : (
                                        "Sign Up"
                                    )}
                                </Button>
                            </form>
                            <Button
                                variant="link"
                                className="w-full"
                                onClick={() => router.push("/auth/login")}
                            >
                                Back to Login
                            </Button>
                        </CardContent>
                        <CardFooter>
                            <p className="px-8 text-center text-sm text-muted-foreground">
                                By clicking Sign Up, you agree to our{" "}
                                <a
                                    href="/terms-and-conditions"
                                    className="underline underline-offset-4 hover:text-primary"
                                >
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a
                                    href="/privacy-policy"
                                    className="underline underline-offset-4 hover:text-primary"
                                >
                                    Privacy Policy
                                </a>.
                            </p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

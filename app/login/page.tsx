import Link from "next/link";
import { cn } from "@/app/lib/utils";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen w-full">
            {/* Left Side - Blue Background */}
            <div className="hidden w-1/2 bg-[#0044CC] p-12 lg:flex flex-col justify-between relative overflow-hidden">
                <div className="z-10">
                    <div className="flex items-center gap-2 text-white font-bold text-xl mb-12">
                        {/* Logo Placeholder */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        ONTHEGO AFRICA
                    </div>
                    <h1 className="text-white text-5xl font-bold leading-tight max-w-lg">
                        Manage your business on OTG the easy way
                    </h1>
                </div>

                {/* Chart Visual Placeholder */}
                <div className="relative z-10 mt-12">
                    <div className="bg-white rounded-xl p-6 shadow-xl max-w-md">
                        <div className="mb-4">
                            <h3 className="font-semibold text-gray-900">Revenue growth</h3>
                        </div>
                        {/* Mock Chart Lines */}
                        <div className="h-32 w-full relative">
                            <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
                                <path d="M0 80 C 50 80, 100 40, 150 60 S 250 20, 300 10" fill="none" stroke="#3B82F6" strokeWidth="2" />
                                <path d="M0 90 C 50 90, 100 60, 150 70 S 250 50, 300 40" fill="none" stroke="#93C5FD" strokeWidth="2" />
                            </svg>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 mt-4">
                            <span>Jan</span>
                            <span>Mar</span>
                            <span>May</span>
                            <span>Jul</span>
                            <span>Sep</span>
                        </div>
                    </div>

                    {/* Floating Card */}
                    <div className="absolute -right-12 bottom-12 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
                        <div className="flex flex-col items-center justify-center w-32 h-32 relative">
                            {/* Donut Chart Mock */}
                            <svg viewBox="0 0 36 36" className="w-24 h-24 transform -rotate-90">
                                <path className="text-blue-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                <path className="text-blue-600" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <span className="text-xs text-gray-500">Active users</span>
                                <span className="text-lg font-bold text-gray-900">1,000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex w-full lg:w-1/2 items-center justify-center bg-white p-8">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Welcome back</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Please enter your details.
                        </p>
                    </div>

                    <form className="mt-8 space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        placeholder="Enter your email"
                                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        placeholder="••••••••"
                                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                    Forgot password
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

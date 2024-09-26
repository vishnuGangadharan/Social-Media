import React, { useEffect, useState } from 'react';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { useLocation, useNavigate } from 'react-router-dom';
import { verifyOtp, resendOtp } from '@/api/user';
import { toast } from 'react-toastify';

const OTP = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone
    };

    const [otp, setOtp] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [timer, setTimer] = useState<number>(180); // Start with 180 seconds
    const [isResendEnabled, setIsResendEnabled] = useState<boolean>(false);

    useEffect(() => {
        const startTime = localStorage.getItem('otpStartTime');
        const currentTime = Math.floor(Date.now() / 1000);

        if (startTime) {
            const elapsedTime = currentTime - parseInt(startTime);
            const remainingTime = 180 - elapsedTime;
            if (remainingTime > 0) {
                setTimer(remainingTime);
                setIsResendEnabled(false);
            } else {
                setTimer(0);
                setIsResendEnabled(true);
            }
        } else {
            setTimer(180);
            localStorage.setItem('otpStartTime', currentTime.toString());
        }
    }, []);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => {
                    const newTimer = prevTimer - 1;
                    if (newTimer <= 0) {
                        clearInterval(interval);
                        setIsResendEnabled(true);
                        return 0;
                    }
                    return newTimer;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [timer]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (otp.length < 4) {
            setError('Please enter a valid OTP');
            return;
        }
        try {
            const response = await verifyOtp(parseInt(otp), userData.email);
            if (response) {
                toast.success(response.data.message);
                localStorage.removeItem('otpStartTime');
                localStorage.setItem('token', response.data.token);
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
            setError('Invalid OTP');
        }
    };

    const handleResendOtp = async () => {
        try {
            const response = await resendOtp(userData);
            if (response) {
                toast.success(response.data.message);
                const currentTime = Math.floor(Date.now() / 1000);
                localStorage.setItem('otpStartTime', currentTime.toString());
                setTimer(180); // Reset the timer
                setIsResendEnabled(false);

            }
        } catch (error) {
            console.log(error);
            setError('Failed to resend OTP');
        }
    };

    return (
        <div className="flex justify-center absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <div className='bg-white/10 backdrop-blur-lg text-center rounded-3xl shadow-xl md:p-10 p-4 border border-blue-500'>
                <h2 className="text-white text-2xl font-semibold mb-8 text-center">Enter OTP</h2>

                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col space-y-4 mb-2'>
                        <InputOTP maxLength={4} onChange={(otp) => setOtp(otp)}>
                            <InputOTPGroup className="flex justify-center space-x-2">
                                <InputOTPSlot
                                    index={0}
                                    className="w-12 h-12 bg-white/20 text-white text-xl text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                                <InputOTPSlot
                                    index={1}
                                    className="w-12 h-12 bg-white/20 text-white text-xl text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </InputOTPGroup>
                            <InputOTPSeparator className="my-3 text-white text-lg">-</InputOTPSeparator>
                            <InputOTPGroup className="flex justify-center space-x-2">
                                <InputOTPSlot
                                    index={2}
                                    className="w-12 h-12 bg-white/20 text-white text-xl text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                                <InputOTPSlot
                                    index={3}
                                    onChange={() => setError(null)}
                                    className="w-12 h-12  bg-white/20 text-white text-xl text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>

                    {error && <span className='text-red-500 mt-2 text-center'>{error}</span>}
                    <div className="text-white mt-4">Time remaining: {formatTime(timer)}</div>
                    {!isResendEnabled &&
                    <button
                        type="submit"
                        disabled={isResendEnabled}
                        className={`mt-4 w-full py-3 ${isResendEnabled ? 'bg-gray-500' : 'bg-gradient-to-tr from-blue-500 to-purple-600'} text-white font-semibold rounded-full shadow-lg transition-all`}
                    >
                        SUBMIT OTP
                    </button>
                    }
                </form>
                {isResendEnabled && 
                <button
                    onClick={handleResendOtp}
                    disabled={!isResendEnabled}
                    className={`mt-4 w-full py-3 ${!isResendEnabled ? 'bg-gray-500' : 'bg-gradient-to-tr from-blue-500 to-purple-600'} text-white font-semibold rounded-full shadow-lg transition-all`}
                >
                    RESEND OTP
                </button>
                }
            </div>
        </div>
    );
}

export default OTP;

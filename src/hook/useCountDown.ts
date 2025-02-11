/* eslint-disable react-hooks/rules-of-hooks */

"use client"

import { type Dispatch, type SetStateAction, useEffect } from "react"

export const countDownApp = (countDown: number, setCountDown: Dispatch<SetStateAction<number>>) => {
    useEffect(() => {
        if (countDown <= 0) {
            // Xóa localStorage khi countDown = 0
            localStorage.removeItem("count_down");
            return;
        }
        let count: any;
        count = setInterval(() => {
            setCountDown(prev => (prev > 0 ? prev - 1 : 0))
        }, 1000)
        return () => clearInterval(count)
    }, [countDown,setCountDown])

    const m = Math.floor(countDown / 60) < 10 ? `0${Math.floor(countDown / 60)}` : countDown / 60;
    const s = Math.floor(countDown % 60) < 10 ? `0${Math.floor(countDown % 60)}` : countDown % 60;

    localStorage.setItem("count_down",JSON.stringify(countDown))
    return `${m}:${s}`
}
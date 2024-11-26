import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="relative mx-auto mt-4 w-full max-w-7xl">
            <img 
                className='w-full h-auto' 
                src="https://plus.unsplash.com/premium_photo-1685136482295-4e6209bfdd02?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" 
            />
            <div className="absolute top-10 left-14 transform -translate-x-10 flex flex-col items-start space-y-4">
                <h1 className="text-black text-8xl z-10 font-semibold">Dorna Ganesh</h1>
                <h3 className="text-5xl font-medium">Front-end Developer</h3>
            </div>
        </div>
    );
}

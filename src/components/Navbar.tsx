import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">PLSQL.io</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end">
                <div className="text-sm">
                    <a onClick={() => router.push('/fileupload')} className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Upload File
                    </a>
                    <a onClick={() => router.push('/run-query')} className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Run Query
                    </a>
                    <a onClick={() => router.push('/login')} className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Sign In
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

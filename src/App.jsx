import {useState, useContext} from "react";
import {Link, Routes, Route} from "react-router-dom";

function App() {

    return (
        <div>
            <Header/>
            <div className="max-w-5xl mx-auto">
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                </Routes>
            </div>
        </div>
    )
}

function Header() {
    return (
        <div className="p-4 mb-20">
            <nav className="space-x-4 text-2xl flex justify-center items-center shadow">
                <Link className="px-8 py-5 block" to="/">Home</Link>
                <Link className="px-8 py-5 block" to="/about">About</Link>
                <Link className="px-8 py-5 block" to="/contact">Contact</Link>
            </nav>
        </div>
    )
}

function Home() {
    return (
        <div className="space-y-16 text-center">
            <h2 className="text-2xl">This is home.</h2>
            <div className="flex gap-4 flex-wrap items-start">
                <img src="http://placekitten.com/200/300" alt=""/>
                <img src="http://placekitten.com/400/400" alt=""/>
                <img src="http://placekitten.com/300/300" alt=""/>
            </div>
        </div>
    )
}

function About() {
    return (
        <div className="flex justify-center flex-col items-center">
            <img src="http://placekitten.com/200/200" alt="" className="rounded-full mb-20"/>
            <h2 className="text-2xl mb-10">About <a href="https://blog.sombex.com"
                                                    className="font-bold uppercase text-blue-400">todo</a></h2>
            <p>to be defined
            </p>
        </div>
    )
}

function Contact() {
    return (
        <div>
            <h2 className="text-2xl mb-10">Contact me</h2>
            <p className="text-lg">Email: <a href="mailto:info@cybermirages.com"
                                             className="underline text-blue-700 leading-relaxed">info@cybermirages.com</a>
            </p>
        </div>
    )
}


export default App

import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Header() {
    return (
            <header className="header">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                className="logo"
                alt="React Logo"
                />
                <h1>ReactFacts</h1>
            </header>
    );
}

function Page() {
    return (
        <main className="main-content">
            <h1 className="title">Reasons I Love React ❤️</h1>
            <ul className="reasons">
                <li>Component-based architecture makes code reusable and manageable.</li>
                <li>JSX makes UI intuitive and easy to write.</li>
                <li>Rich ecosystem and community support.</li>
                <li>Great for building dynamic, modern UIs.</li>
                <li>It powers many real-world, high-scale applications.</li>
            </ul>
        </main>
    );
}

function Footer() {
    return (
        <footer>
            <p>© 2025 ReactFacts. All rights reserved.</p>
        </footer>
    );
}

root.render(
    <div className="container">
        <Header />
        <Page />
        <Footer />
    </div>
);

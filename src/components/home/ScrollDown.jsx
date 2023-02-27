import React from "react";

export default function ScrollDown() {
    return (
        <div className="home_scroll">
            <a href="#about" className="home_scroll-button button--flex">
                <i class="uil uil-direction"></i>
                <span className="home_scroll-name">Scroll Down</span>
                <i class="uil uil-arrow-down home_scroll-arrow"></i>
            </a>
        </div>
    )
}
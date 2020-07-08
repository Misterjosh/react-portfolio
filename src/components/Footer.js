import React from 'react';
import "./styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="two-toned-footer-color">
                <p className="text-muted-footer text-center">
                    &copy; Copyright 2020 Joshua Brooks
                </p> 
            </div>
        </footer>
    )
}

// removed text-muted as a class to make the text color visible
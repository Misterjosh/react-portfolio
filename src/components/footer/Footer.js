import React from 'react';
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="two-toned-footer-color">
                <p className="text-muted-footer text-center">
                <i class="far fa-copyright"></i> Copyright 2020 Joshua Brooks
                </p> 
            </div>
        </footer>
    )
}

// removed text-muted as a class to make the text color visible
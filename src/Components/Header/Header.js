import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="container text-center text-white header-bg p-4 rounded-3 mb-4">
            <h1 className="fw-bold">Make a world class music video</h1>
            <h4>There is something magical about music in that it can capture us.</h4>
            <h2 className="fw-bold">Total Budgets: 50,00,000BDT</h2>
        </div>
    );
};

export default Header;
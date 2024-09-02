function Navbar() {
    // ... existing code ...

    const handleMicropaymentsClick = () => {
        window.location.href = '/';
    };

    return (
        <nav>
            {/* ... existing code ... */}
            <a href="#" onClick={handleMicropaymentsClick}>Micropayments Email Wallet</a>
            {/* ... existing code ... */}
        </nav>
    );
}
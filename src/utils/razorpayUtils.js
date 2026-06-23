/**
 * Utility to dynamically load the Razorpay checkout script.
 * Returns a promise that resolves when the script is loaded successfully,
 * or rejects if loading fails.
 */
export const loadRazorpayScript = () => {
    return new Promise((resolve, reject) => {
        // If already loaded, return immediately
        if (window.Razorpay) {
            resolve(true);
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.onload = () => resolve(true);
        script.onerror = () => reject(new Error('Failed to load Razorpay SDK. Please check your internet connection.'));
        document.body.appendChild(script);
    });
};

/**
 * Generates a unique payment reference ID.
 */
export const generateReferenceId = () => {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 7).toUpperCase();
    return `LASAK-PAY-${timestamp}-${random}`;
};

//Wait for the DOM to be fully loaded
window.addEventListener('DOMContentLoaded', function () {
    // Get the form element by its ID
    const form = document.getElementById("calc-form");
    if (form) {
        // Set up initial values for the form
        setupInitialValues();
        // Add a submit event listener to the form
        form.addEventListener("submit", function (e) {
            // Prevent the default form submission behavior
            e.preventDefault();
            //When the form is submitted, update the result
            update();
        });
    }
});

// Get current input values from the UI
function getCurrentUIValues() {
    return {
        amount: +(document.getElementById("loan-amount").value),
        years: +(document.getElementById("loan-years").value),
        rate: +(document.getElementById("loan-rate").value),
    }
}

// Set up initial default values for the form
function setupInitialValues() {
    // Default values for the loan amount, years, and rate
    const values = { amount: 10000, years: 10, rate: 4.5 };
    // Set default values in the input fields
    const amountUI = document.getElementById("loan-amount");
    amountUI.value = values.amount;
    const yearsUI = document.getElementById("loan-years");
    yearsUI.value = values.years;
    const rateUI = document.getElementById("loan-rate");
    rateUI.value = values.rate;
    // Calculate and display the initial monthly payment
    update();
}

// Calculate the monthly payment based on loan details
function calculateMonthlyPayment(values) {
    // Convert annual interest rate to monthly interest rate
    const monthlyRate = (values.rate / 100) / 12;
    // Calculate the total number of payments
    const n = Math.floor(values.years * 12);
    // Use the formula to calculate the monthly payment
    return (
        (monthlyRate * values.amount) /
        (1 - Math.pow((1 + monthlyRate), -n))
    ).toFixed(2);
}

// Update the result based on user input
function update() {
    // Get the current input values from the UI
    const currentUIValues = getCurrentUIValues();
    // Calculate the monthly payment
    updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Update the UI to show the calculated monthly payment
function updateMonthly(monthly) {
    // Get the HTML element for displaying the monthly payment
    const monthlyUI = document.getElementById("monthly-payment");
    // Display the result with a '$' symbol
    monthlyUI.innerText = "$" + monthly;
}






// Select all steps and convert to an array
const steps = Array.from(document.querySelectorAll(".circle"));

// Select buttons
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Select the indicator
const indicator = document.querySelector(".indicator");

let currentStep = 0;

// Function to update the active steps
function updateSteps() {
    steps.forEach((step, index) => {
        if (index <= currentStep) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });

    // Calculate the width of the indicator based on the current step
    const totalSteps = steps.length - 1;
    const progressPercentage = (currentStep / totalSteps) * 100;
    indicator.style.width = `calc(${progressPercentage}% - 25px)`; // Adjust to account for the circle width

    // Enable or disable buttons based on the current step
    prevButton.disabled = currentStep === 0;
    nextButton.disabled = currentStep === steps.length - 1;
}

// Event listeners for buttons
prevButton.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        updateSteps();
    }
});

nextButton.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateSteps();
    }
});

// Initial update to set the correct state
updateSteps();

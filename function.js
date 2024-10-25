let count = 0;

// Function to handle seat selection
function selectedSeat(seatId) {
  const seat = document.getElementById(seatId);

  // Check if the seat is already selected (green background)
  if (seat.classList.contains('bg-green-500')) {
    // Unselect the seat
    unSelectSeat();

    // Remove the selected (green) background
    removeButtonBackgroundColour(seatId);

    // Remove Seat information
    removeSeatInfo(seatId);
    count--;

    // Update total price
    totalPrice(count);

    // Update Grand total price
    grandTotalPrice(count);

    // Hide discount price if seats are less than 4
    if (count < 4) {
      hideDiscountPrice();
      disableCouponButton();
    }

  } else {
    if (count < 4) {
      // Select the seat
      selectSeat();

      // Add the selected (green) background
      buttonBackgroundColour(seatId);

      count++;

      // Append seat information
      appendSeatInfo(seatId);

      // Update total price
      totalPrice(count);

      // Update Grand total price
      grandTotalPrice(count);

      // Check for coupon if exactly 4 seats are selected
      if (count === 4) {
        copuponApplyButton();
        showDiscountedPrice(); // Show discount if 4 seats are selected
      }
    }
  }

  // Check if count > 0 and input fields are filled
  enableNextButton();

  // Update total seats count
  totalSeats(count);
}



// --------------------------------------------------------

// Show Discount Price
function showDiscountedPrice() {
  // Show discount price in display
  const discountPriceDiv = document.getElementById('discount_price_div');
  discountPriceDiv.classList.remove('hidden');

  // Get input from coupon 
  const inputCoupon = document.getElementById('input_coupon');
  const inputCouponText = inputCoupon.value;

  // Get Main Price
  const mainPriceText = document.getElementById('total_price');
  const mainPrice = parseFloat(mainPriceText.innerText); // Ensure it's a number

  // Calculate discount price 
  const discountPrice = calculateDiscountPrice(mainPrice, inputCouponText);

  // Display discounted Price
  const displayDiscountPrice = document.getElementById('discount_price');

  // Set discount price
  displayDiscountPrice.innerText = discountPrice;

  // Merge discount and Grand price
  const grandPrice = document.getElementById('grand_total_price');

  const total_Main_and_discount_price = mainPrice - discountPrice;
  grandPrice.innerText = total_Main_and_discount_price;
}


// next button work

function nextButton(){
  const firstSection=document.getElementById('first_section');
  firstSection.classList.add('hidden');


  const secondSection=document.getElementById('second_section');
  secondSection.classList.remove('hidden');


}


// continue button work

function continueButton(){
  const firstSection=document.getElementById('first_section');
  firstSection.classList.remove('hidden');


  const secondSection=document.getElementById('second_section');
  secondSection.classList.add('hidden');


}
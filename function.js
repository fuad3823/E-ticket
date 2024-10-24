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

    //  update Grand total price
    grandTotalPrice(count);

    // Disable the coupon button if less than 4 seats are selected
    if (count < 4) {
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

     //   update Grand total price
       grandTotalPrice(count);

      // Enable the coupon button when 4 seats are selected
      if (count === 4) {
        copuponApply();
      }
    }
  }

  // Update total seats count
  totalSeats(count);
}

// Function to enable the Coupon Apply button
function copuponApply() {
  const couponApplyElement = document.getElementById('copupon_apply');
  couponApplyElement.removeAttribute('disabled');
}

// Function to disable the Coupon Apply button
function disableCouponButton() {
  const couponApplyElement = document.getElementById('copupon_apply');
  couponApplyElement.setAttribute('disabled', true);
}


// Unselect seat if it is already selected
function unSelectSeat() {
  const seatLeftsElement = document.getElementById('seat_left');
  const seatleftText = seatLeftsElement.innerText;
  const seatLefts = parseInt(seatleftText);
  const seatLeft = seatLefts + 1;
  seatLeftsElement.innerText = seatLeft;
}

// Select seat if it is unselected
function selectSeat() {
  const seatLeftsElement = document.getElementById('seat_left');
  const seatleftText = seatLeftsElement.innerText;
  const seatLefts = parseInt(seatleftText);
  const seatLeft = seatLefts - 1;
  seatLeftsElement.innerText = seatLeft;
}

// Add Button Background Color (Select seat)
function buttonBackgroundColour(seatId) {
  const seat = document.getElementById(seatId);
  seat.classList.add('bg-green-500', 'text-white');
}

// Remove Button Background Color (Unselect seat)
function removeButtonBackgroundColour(seatId) {
  const seat = document.getElementById(seatId);
  seat.classList.remove('bg-green-500', 'text-white');
}

// Disable the specific seat button when 4 seats are selected (if needed)
function disableSeatButton(seat) {
  seat.disabled = true;
}

// Count and display total number of selected seats
function totalSeats(count) {
  const totalSeats = document.getElementById('seat_selected');
  totalSeats.innerText = count; // Update the count
}

// Append seat information dynamically into the container
function appendSeatInfo(seatId) {
  // Get div container
  const seatCointainer = document.getElementById('seat_info_cointainer');

  // Create a div 
  const newSeatInfoDiv = document.createElement('div');
  newSeatInfoDiv.classList.add('grid', 'grid-cols-3', 'justify-between', 'p-5', 'text-gray-400', 'font-semibold');
  newSeatInfoDiv.id = `new_div_id_${seatId}`;

  // Create inside div elements
  const seatNumber = document.createElement('h1');
  seatNumber.innerText = seatId;

  const seatClass = document.createElement('h1');
  seatClass.classList.add('text-center');
  seatClass.innerText = 'Economy';

  const seatPrice = document.createElement('h1');
  seatPrice.classList.add('text-right');
  seatPrice.innerText = '550';

  // Append elements into div
  newSeatInfoDiv.appendChild(seatNumber);
  newSeatInfoDiv.appendChild(seatClass);
  newSeatInfoDiv.appendChild(seatPrice);

  // Append new div into Div container
  seatCointainer.appendChild(newSeatInfoDiv);
}

// Remove (unselect) seat information
function removeSeatInfo(seatId) {
  const appendRemoveDiv = document.getElementById(`new_div_id_${seatId}`);
  if (appendRemoveDiv) {
    appendRemoveDiv.remove();
  }
}

// Calculate and display total price based on selected seats
function totalPrice(count) {
  let total_price = count * 550;
  const totalPriceElement = document.getElementById('total_price');
  totalPriceElement.innerText = total_price;
}

// Calculate and display grand total price based on selected seats
function grandTotalPrice(count) {
  let total_price = count * 550;
  const totalPriceElement = document.getElementById('grand_total_price');
  totalPriceElement.innerText = total_price;
}


// Function to enable the Coupon Apply button
function copuponApplyButton() {
  const couponApplyElement = document.getElementById('copupon_apply');
  couponApplyElement.removeAttribute('disabled');
}

// Function to disable the Coupon Apply button
function disableCouponButton() {
  const couponApplyElement = document.getElementById('copupon_apply');
  couponApplyElement.setAttribute('disabled', true);
}



// Calculate discount price
function calculateDiscountPrice(mainPrice, coupon) {
  let discountPrice = 0;
  if (coupon === 'NEW15') {
    discountPrice = mainPrice * (15 / 100);
  } else if (coupon === 'Couple 20') {
    discountPrice = mainPrice * (20 / 100);
  }
  return discountPrice;
}

// Function to hide discount price
function hideDiscountPrice() {
  const discountPriceDiv = document.getElementById('discount_price_div');
  discountPriceDiv.classList.add('hidden');

  // Reset grand total price to main price
  const mainPriceText = document.getElementById('total_price');
  const mainPrice = parseFloat(mainPriceText.innerText);
  const grandPrice = document.getElementById('grand_total_price');
  grandPrice.innerText = mainPrice; // Reset grand total price
}


// Function to enable or disable the Next button based on seat selection and input fields
function enableNextButton() {
  const nameText = document.getElementById('p_name').value;
  const phoneNumberText = document.getElementById('p_number').value;
  const nextButton = document.getElementById('next_button');

  // Enable Next button only if at least 1 seat is selected and both fields are filled
  if (count > 0 && nameText !== "" && phoneNumberText !== "") {
    nextButton.removeAttribute('disabled');
  } else {
    nextButton.setAttribute('disabled', true);
  }
}

// Event listeners for input fields to check conditions dynamically
document.getElementById('p_name').addEventListener('input', enableNextButton);
document.getElementById('p_number').addEventListener('input', enableNextButton);





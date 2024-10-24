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
  
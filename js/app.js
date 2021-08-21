// Update memory Cost Function
function updateMemoryCost(ismemory) {
  const m8gb = 0;
  const m16gb = 180;
  const memoryInputCost = document.getElementById('extra-memory-cost');
  const memoryCost = parseInt(memoryInputCost.innerText);
  if (ismemory == false) {
    memoryInputCost.innerText = m8gb;

  } else {
    memoryInputCost.innerText = m16gb;

  }
}

//Extra Memory Cost
document.getElementById('8bg-memory').addEventListener('click', function () {
  updateMemoryCost(false);
  updateTotal()
});
document.getElementById('16gb-memory').addEventListener('click', function () {
  updateMemoryCost(true);
  updateTotal()
});


//Update Storage Cost Function
function updateStorageCost(isStorage) {
  const ssd256 = 0;
  const ssd512 = 100;
  const ssd1TB = 180;
  const ssdInputCost = document.getElementById('extra-storage-cost');
  const ssdCost = parseInt(ssdInputCost.innerText);
  if (isStorage == 'ssd-256') {
    ssdInputCost.innerText = ssd256;
  } else if (isStorage == 'ssd-512') {
    ssdInputCost.innerText = ssd512;
  } else if (isStorage == 'ssd-1tb') {
    ssdInputCost.innerText = ssd1TB;
  }
};

//Extra Storage Cost

document.getElementById('ssd-256').addEventListener('click', function () {
  updateStorageCost('ssd-256')
  updateTotal()
})
document.getElementById('ssd-512').addEventListener('click', function () {
  updateStorageCost('ssd-512')
  updateTotal()
})
document.getElementById('ssd-1tb').addEventListener('click', function () {
  updateStorageCost('ssd-1tb')
  updateTotal()
})

//Update Delivery charge Function
function updateDeliveryCost(isDelivery) {
  const freeDelevery = 0;
  const extraDeliveryCost = 20;
  const deliveryInputCost = document.getElementById('extra-delivery-cost');
  const deliveryCost = parseInt(deliveryInputCost.innerText);
  if (isDelivery == true) {
    deliveryInputCost.innerText = freeDelevery;
  } else {
    deliveryInputCost.innerText = extraDeliveryCost;
  }
}

//Delivery charge
document.getElementById('free-delivery').addEventListener('click', function () {
  updateDeliveryCost(true)
  updateTotal()
})
document.getElementById('delivery-cost').addEventListener('click', function () {
  updateDeliveryCost(false)
  updateTotal()
})

// Update Total price
const memory = document.getElementById('extra-memory-cost');
const ssd = document.getElementById('extra-storage-cost');
const shipping = document.getElementById('extra-delivery-cost');
const bestPrice = document.getElementById('best-price');
const fixedTotalPrice = document.getElementById('total-price');

// Update Total price Function
function updateTotal() {
  const totalPrice = parseInt(memory.innerText) + parseInt(ssd.innerText) + parseInt(shipping.innerText) + parseInt(bestPrice.innerText);
  fixedTotalPrice.innerText = totalPrice;
  document.getElementById('final-total').innerText = totalPrice;
}

// Add Pomo code

document.getElementById('basic-addon2').addEventListener('click', function () {
  const finalTotal = document.getElementById('total-price').innerText;
  const pomoInput = document.getElementById('pomo-input').value;
  if (pomoInput == 'stevekaku') {
    const applyPomo = finalTotal * .20;
    const afterPomoApply = finalTotal - applyPomo;
    document.getElementById('final-total').innerText = afterPomoApply;
  }
})

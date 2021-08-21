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
});
document.getElementById('16gb-memory').addEventListener('click', function () {
  updateMemoryCost(true);
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
})
document.getElementById('ssd-512').addEventListener('click', function () {
  updateStorageCost('ssd-512')
})
document.getElementById('ssd-1tb').addEventListener('click', function () {
  updateStorageCost('ssd-1tb')
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
})
document.getElementById('delivery-cost').addEventListener('click', function () {
  updateDeliveryCost(false)
})


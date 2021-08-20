//Extra Memory Cost

document.getElementById('8bg-memory').addEventListener('click', function () {
  const m8gb = 0;
  const memoryInputCost = document.getElementById('extra-memory-cost');
  const memoryCost = parseInt(memoryInputCost.innerText);
  memoryInputCost.innerText = m8gb;
  console.log(memoryCost);
})

document.getElementById('16gb-memory').addEventListener('click', function () {
  const m16gb = 180;
  const memoryInputCost = document.getElementById('extra-memory-cost');
  const memoryCost = parseInt(memoryInputCost.innerText);
  memoryInputCost.innerText = m16gb;
  console.log(memoryCost);
})

//Extra Storage Cost

document.getElementById('ssd-256').addEventListener('click', function () {
  const ssd256 = 0;
  const ssdInputCost = document.getElementById('extra-storage-cost');
  const ssdCost = parseInt(ssdInputCost.innerText);
  ssdInputCost.innerText = ssd256;
  console.log(ssdCost);
})
document.getElementById('ssd-512').addEventListener('click', function () {
  const ssd512 = 100;
  const ssdInputCost = document.getElementById('extra-storage-cost');
  const ssdCost = parseInt(ssdInputCost.innerText);
  ssdInputCost.innerText = ssd512;
  console.log(ssdCost);
})
document.getElementById('ssd-1tb').addEventListener('click', function () {
  const ssd1TB = 180;
  const ssdInputCost = document.getElementById('extra-storage-cost');
  const ssdCost = parseInt(ssdInputCost.innerText);
  ssdInputCost.innerText = ssd1TB;
  console.log(ssdCost);
})

//Delivery charge
document.getElementById('free-delivery').addEventListener('click', function () {
  const freeDelevery = 0;
  const deliveryInputCost = document.getElementById('extra-delivery-cost');
  const deliveryCost = parseInt(deliveryInputCost.innerText);
  deliveryInputCost.innerText = freeDelevery;
  console.log(deliveryCost);
})
document.getElementById('delivery-cost').addEventListener('click', function () {
  const extraDeliveryCost = 20;
  const deliveryInputCost = document.getElementById('extra-delivery-cost');
  const deliveryCost = parseInt(deliveryInputCost.innerText);
  deliveryInputCost.innerText = extraDeliveryCost;
  console.log(deliveryCost);
})


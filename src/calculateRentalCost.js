/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const discountThreeDays = 20;
  const discountSevenDays = 50;
  const threeDays = 3;
  const sevenDays = 7;
  let total = 0;

  if (days >= sevenDays) {
    total = days * pricePerDay - discountSevenDays;
  } else if (days >= threeDays && days < sevenDays) {
    total = days * pricePerDay - discountThreeDays;
  } else {
    total = days * pricePerDay;
  }

  return total;
}

module.exports = calculateRentalCost;

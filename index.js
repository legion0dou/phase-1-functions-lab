// Code your solution in this file!
// Function to calculate the distance in blocks from Scuber's headquarters
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  
  // Function to calculate the distance in feet from Scuber's headquarters
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  // Function to calculate the distance in feet between two blocks
  function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264;
    return Math.abs(endBlock - startBlock) * feetPerBlock;
  }
  
  // Function to calculate the fare for a customer's ride
  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot for the distance between 400 and 2000 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare for distance between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // Distance exceeds 2500 feet
    }
  }
  
  // Test cases
  console.log(distanceFromHqInBlocks(50)); // Should return 8
  console.log(distanceFromHqInFeet(50)); // Should return 2112 (8 blocks * 264 feet per block)
  console.log(distanceTravelledInFeet(34, 38)); // Should return 1056 (4 blocks * 264 feet per block)
  console.log(calculatesFarePrice(34, 38)); // Should return 8.24 (1056 feet * $0.02 per foot)
  console.log(calculatesFarePrice(34, 42)); // Should return 0 (within the first 400 feet)
  console.log(calculatesFarePrice(34, 50)); // Should return 25 (flat fare for 2000-2500 feet)
  console.log(calculatesFarePrice(34, 60)); // Should return 'cannot travel that far' (distance exceeds 2500 feet)
  
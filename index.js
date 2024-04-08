// Code your solution here
function findMatching(drivers, searchTerm) {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().includes(lowercaseSearchTerm));
  }
  
  function fuzzyMatch(drivers, searchTerm) {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(lowercaseSearchTerm));
  }
  
  function matchName(drivers, searchTerm) {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    return drivers.filter(driver => driver.name.toLowerCase() === lowercaseSearchTerm);
  }
  
  // Example usage
  const drivers = ["Rufus", "ian", "Jayson", "SUSAN"];
  
  const matchingDrivers = findMatching(drivers, "iAn"); // ["Ian"] (case insensitive)
  const fuzzyMatchedDrivers = fuzzyMatch(drivers, "sus"); // ["susan", "CHARLIE BROWN"] (starts with)
  const matchedByName = matchName(drivers, "susan"); // ["SUSAN"] (exact match on name property)
  
  console.log(matchingDrivers);
  console.log(fuzzyMatchedDrivers);
  console.log(matchedByName);

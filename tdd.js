function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  
    // Check if there is a custom delimiter
    let delimiter = ",";
    if (numbers.startsWith("//")) {
      const delimiterIndex = numbers.indexOf("\n");
      delimiter = numbers.substring(2, delimiterIndex);
      numbers = numbers.substring(delimiterIndex + 1);
    }
  
    // Split the numbers string into an array using the delimiter
    const numberArray = numbers.split(new RegExp(`[${delimiter}\n]`));
  
    // Calculate the sum of the numbers
    let sum = 0;
    let negativeNumbers = [];
    for (let i = 0; i < numberArray.length; i++) {
      const number = parseInt(numberArray[i]);
      if (number < 0) {
        negativeNumbers.push(number);
      } else if (number <= 1000) {
        sum += number;
      }
    }
  
    // Throw an exception if there are negative numbers
    if (negativeNumbers.length > 0) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join()}`);
    }
  
    return sum;
  }
  
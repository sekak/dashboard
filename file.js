 // Function with intentional problems to debug
        function calculateAverage(numbers) {
            let sum = 0;
            for (let i = 0; i <= numbers.length; i++) { // BUG: should be < not <=
                sum += numbers[i];
            }
            
            const average = sum / numbers.length;
            return average;
        }

        // Function to find maximum number
        function findMax(arr) {
            let max = 0; // BUG: should handle negative numbers
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            return max;
        }

        // Run tests with problematic data
        function runTests() {
            
            // Test 1: Average calculation
            const avg1 = calculateAverage([1, 2, 3, 4, 5]);
            console.log('Test 1 Result:', avg1);
            
            // Test 2: Average with negative numbers
            const avg2 = calculateAverage([-2, 0, 2]);
            
            // Test 3: Find max in positive numbers
            const max1 = findMax([10, 5, 8, 3]);
            
            // Test 4: Find max with negative numbers (this will show the bug)
            const max2 = findMax([-10, -5, -8, -3]);

        }

        // Run tests when page loads
        runTests();
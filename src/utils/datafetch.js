
const fs = require('fs');

export class DataFetch {
    constructor(filename) {
        this.filePath = './src/data/'+filename+'.json'; // Hardcoded file path
        this.cachedData = null;
    }

    // Method to load and cache data from the JSON file
    loadData() {
        try {
            const rawData = fs.readFileSync(this.filePath, 'utf-8');
            this.cachedData = JSON.parse(rawData);
            console.log("Data loaded successfully:"); // Log to check if data is loaded correctly
        } catch (error) {
            console.error("Error loading the file or parsing JSON:", error);
        }
    }

    // Method to get test data by key (e.g., 'test1')
    getJsonArray(key) {
        if (!this.cachedData) {
            this.loadData(); // Ensure data is loaded before accessing
        }
        
        console.log("Fetching data for key:", this.cachedData[key]); // Log to check which key is being fetched
        return this.cachedData[key]; // Return the specific test data
    }
}

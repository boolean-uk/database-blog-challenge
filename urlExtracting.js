// Your URL-encoded data
const urlData = "authenticity_token=QItHqPMA8IUSZ5fJQlCYawNEJYNIF%2F3ppKD2cgsCdi910QiptY3dVMuaNSedsDWhZ0mAFewSzaPO7YMIhTQ90w%3D%3D&user%5Bsession_id%5D=29635cd4-ae2c-45ee-b1c8-f32d209e71f1&user%5Bemail%5D=parezdavis83%40yahoo.com&user%5Bpassword%5D=Usama%402020&remember_me=true&commit=Sign+in";

// Split the URL-encoded data by "&" to get individual key-value pairs
const keyValuePairs = urlData.split('&');


// Create an object to store the extracted values
const extractedValues = {};

// Iterate through key-value pairs
keyValuePairs.forEach(pair => {
    const [key, value] = pair.split('=');
    console.log(key, value)
    extractedKeys = decodeURIComponent(key)
    extractedValues[extractedKeys] = decodeURIComponent(value)
    
});


console.log('this is the result after successfully decoding', extractedValues)



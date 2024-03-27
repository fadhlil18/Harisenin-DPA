document.getElementById('accountForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Create account object
    const newAccount = {
        username: username,
        password: password
    };
    
    // Convert account object to JSON
    const accountJSON = JSON.stringify(newAccount);
    
    // Write JSON data to file
    const fs = require('fs');
    fs.writeFile('account.json', accountJSON, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('New account has been created and saved to new_account.json');
    });
});
<?php
$dbPath = __DIR__ . '/sqlite.db';

try {
    $db = new SQLite3($dbPath);
    
    // Create User table if it doesn't exist
    $createUserTable = "CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        display_name TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )";
    
    $db->exec($createUserTable);
    
    // Insert example users if they don't exist
    $exampleUsers = [
        ['email' => 'john.doe@example.com', 'display_name' => 'John Doe'],
        ['email' => 'jane.smith@example.com', 'display_name' => 'Jane Smith'],
        ['email' => 'alex.johnson@example.com', 'display_name' => 'Alex Johnson']
    ];
    
    foreach ($exampleUsers as $user) {
        $stmt = $db->prepare("INSERT OR IGNORE INTO users (email, display_name) VALUES (?, ?)");
        $stmt->bindValue(1, $user['email'], SQLITE3_TEXT);
        $stmt->bindValue(2, $user['display_name'], SQLITE3_TEXT);
        $stmt->execute();
    }
    
} catch (Exception $e) {
    throw new Exception("Unable to open database: " . $e->getMessage());
}
?>

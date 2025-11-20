<!DOCTYPE html>
<html lang="en">
<head>
    <title>Functional Web App Template</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="This is a sample HTML page for demonstration purposes.">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>">
    <link rel="stylesheet" type="text/css" href="../assets/style.css">
    <script src="../assets/script.js" defer></script>
</head>
<body>

<?php
require_once __DIR__ . '/../../db.php';
require_once __DIR__ . '/../../config.php';
?>

<header>
    <a href="/">👋 Functional Web App Template</a>
    <nav aria-label="Main Navigation">
        <ul>
            <?php include 'menu.php'; ?>
        </ul>
    </nav>
    <details>
        <summary> Menu </summary>
        <nav aria-label="Main Navigation">
            <ul>
                <?php include 'menu.php'; ?>
            </ul>
        </nav>
    </details>
</header>

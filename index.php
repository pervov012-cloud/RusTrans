<?php
session_start();

// Проверяем, если пользователь уже авторизован
if (isset($_SESSION['user_id'])) {
    // Если авторизован, перенаправляем на основную страницу
    header("Location: index.html");
    exit;
}

// Если пользователь не авторизован, перенаправляем на страницу регистрации
header("Location: register.html");
exit;
?>
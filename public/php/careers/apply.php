<?php

declare(strict_types=1);

require_once __DIR__ . '/../_shared/bootstrap.php';

require_method('POST');

$db = bt_db($databaseConfig);
enforce_rate_limit($db, 'careers-apply', 10, 3600, $privacySalt);

$input = json_input();

$fullName = require_field($input['full_name'] ?? '', 'Full name', 120);
$email = require_email_field($input['email'] ?? '');
$phone = clean_string($input['phone'] ?? '', 40);
$role = require_field($input['role'] ?? '', 'Role', 120);
$portfolioUrl = clean_string($input['portfolio_url'] ?? '', 500);
$message = require_field($input['message'] ?? '', 'Message', 4000);
require_privacy_consent($input['consent_given'] ?? false);

$db->beginTransaction();
$stmt = $db->prepare(
    'INSERT INTO career_applications
        (full_name, email, phone, role, portfolio_url, message, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?, "new", NOW())'
);
$stmt->execute([$fullName, $email, $phone, $role, $portfolioUrl, $message]);
$leadId = (int) $db->lastInsertId();
record_lead_metadata($db, 'career', $leadId, $input, $privacySalt);
$db->commit();

json_response(201, true, ['id' => $leadId], 'Thanks - your application has been received. We review every application personally.');

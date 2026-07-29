<?php

declare(strict_types=1);

require_once __DIR__ . '/../_shared/bootstrap.php';

require_method('POST');

$db = bt_db($databaseConfig);
enforce_rate_limit($db, 'investors-request-pack', 10, 3600, $privacySalt);

$input = json_input();

$fullName = require_field($input['full_name'] ?? '', 'Full name', 120);
$email = require_email_field($input['email'] ?? '');
$organization = clean_string($input['organization'] ?? '', 200);
$phone = clean_string($input['phone'] ?? '', 40);
$investorType = require_field($input['investor_type'] ?? '', 'Investor type', 60);
$message = clean_string($input['message'] ?? '', 4000);
require_privacy_consent($input['consent_given'] ?? false);

$db->beginTransaction();
$stmt = $db->prepare(
    'INSERT INTO investor_requests
        (full_name, email, organization, phone, investor_type, message, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?, "new", NOW())'
);
$stmt->execute([$fullName, $email, $organization, $phone, $investorType, $message]);
$leadId = (int) $db->lastInsertId();
record_lead_metadata($db, 'investor', $leadId, $input, $privacySalt);
$db->commit();

json_response(
    201,
    true,
    ['id' => $leadId],
    'Thanks - the investor pack request has been received. Our team will send it over shortly.'
);

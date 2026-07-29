<?php

declare(strict_types=1);

require_once __DIR__ . '/../_shared/bootstrap.php';

require_method('POST');

$db = bt_db($databaseConfig);
enforce_rate_limit($db, 'partners-apply', 10, 3600, $privacySalt);

$input = json_input();

$organizationName = require_field($input['organization_name'] ?? '', 'Organisation', 200);
$contactName = require_field($input['contact_name'] ?? '', 'Contact name', 120);
$email = require_email_field($input['email'] ?? '');
$phone = clean_string($input['phone'] ?? '', 40);
$partnerType = require_field($input['partner_type'] ?? '', 'Sector', 60);
$location = require_field($input['location'] ?? '', 'Site location', 200);
$siteDetails = clean_string($input['site_details'] ?? '', 300);
$message = require_field($input['message'] ?? '', 'Message', 4000);
require_privacy_consent($input['consent_given'] ?? false);

$db->beginTransaction();
$stmt = $db->prepare(
    'INSERT INTO partner_applications
        (organization_name, contact_name, email, phone, partner_type, location, site_details, message, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, "new", NOW())'
);
$stmt->execute([$organizationName, $contactName, $email, $phone, $partnerType, $location, $siteDetails, $message]);
$leadId = (int) $db->lastInsertId();
record_lead_metadata($db, 'partner', $leadId, $input, $privacySalt);
$db->commit();

json_response(
    201,
    true,
    ['id' => $leadId],
    'Thanks - your pilot proposal has been received. Our team will review it against the current roadmap stage and follow up.'
);

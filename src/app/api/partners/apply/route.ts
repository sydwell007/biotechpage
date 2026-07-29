import { submitLeadFromRequest } from "@/lib/api/leadSubmit";
import { cleanString, leadContext, requireEmail, requireString } from "@/lib/api/validate";

export async function POST(request: Request) {
  return submitLeadFromRequest(request, "partners/apply.php", (raw) => {
    const record = raw as Record<string, unknown>;
    return {
      organization_name: requireString(record.organizationName, "Organisation", 200),
      contact_name: requireString(record.contactName, "Contact name", 120),
      email: requireEmail(record.email),
      phone: cleanString(record.phone, 40),
      partner_type: requireString(record.partnerType, "Sector", 60),
      location: requireString(record.location, "Site location", 200),
      site_details: cleanString(record.siteDetails, 300),
      message: requireString(record.message, "Message", 4000),
      ...leadContext(record),
    };
  });
}

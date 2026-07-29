import { submitLeadFromRequest } from "@/lib/api/leadSubmit";
import { cleanString, leadContext, requireEmail, requireString } from "@/lib/api/validate";

const inquiryTypes = ["partner", "investor", "researcher", "press", "careers", "other"] as const;

function mapInquiryType(value: unknown): (typeof inquiryTypes)[number] {
  const clean = cleanString(value, 40).toLowerCase();
  return (inquiryTypes as readonly string[]).includes(clean) ? (clean as (typeof inquiryTypes)[number]) : "other";
}

export async function POST(request: Request) {
  return submitLeadFromRequest(request, "contact/submit.php", (raw) => {
    const record = raw as Record<string, unknown>;
    return {
      name: requireString(record.name, "Name", 120),
      email: requireEmail(record.email),
      phone: cleanString(record.phone, 40),
      inquiry_type: mapInquiryType(record.inquiryType ?? record.type),
      message: requireString(record.message, "Message", 4000),
      ...leadContext(record),
    };
  });
}

import { submitLeadFromRequest } from "@/lib/api/leadSubmit";
import { cleanString, leadContext, requireEmail, requireString } from "@/lib/api/validate";

export async function POST(request: Request) {
  return submitLeadFromRequest(request, "careers/apply.php", (raw) => {
    const record = raw as Record<string, unknown>;
    return {
      full_name: requireString(record.fullName, "Full name", 120),
      email: requireEmail(record.email),
      phone: cleanString(record.phone, 40),
      role: requireString(record.role, "Role", 120),
      portfolio_url: cleanString(record.portfolioUrl, 500),
      message: requireString(record.message, "Message", 4000),
      ...leadContext(record),
    };
  });
}

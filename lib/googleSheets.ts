import { google } from 'googleapis';

export async function appendOrderToSheet(order: {
  name: string;
  phone: string;
  items: string;
  total: number;
  deliveryType: string;
  deliveryDate: string;
}) {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) return;

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  const sheets = google.sheets({ version: 'v4', auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Orders!A:F',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[order.name, order.phone, order.items, order.total, order.deliveryType, order.deliveryDate]]
    }
  });
}

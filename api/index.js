// Memori sementara untuk menyimpan status fitur
let settings = {
  autoEsp: false,
  autoFarm: false
};

// Data dummy monitoring pesanan Itemku
let orders = [
  { id: "ORD-001", buyer: "ZarUser1", item: "100 Robux", status: "Pending" },
  { id: "ORD-002", buyer: "PlayerTwo", item: "Fruit Blox", status: "Completed" }
];

export default function handler(req, res) {
  // Buka akses CORS agar bisa dipanggil dari Roblox / Browser mana saja
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Route 1: Ambil / Ubah Status Fitur Roblox
  if (req.query.action === 'toggle-esp') {
    settings.autoEsp = !settings.autoEsp;
    return res.status(200).json({ success: true, autoEsp: settings.autoEsp });
  }

  if (req.query.action === 'get-settings') {
    return res.status(200).json(settings);
  }

  // Route 2: Panel Monitoring Pesanan Itemku
  if (req.query.action === 'get-orders') {
    return res.status(200).json(orders);
  }

  // Response default
  return res.status(200).json({
    status: "Online",
    settings: settings,
    orders: orders
  });
}

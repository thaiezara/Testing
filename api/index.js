let settings = {
  autoEsp: false,
  performanceMode: false
};

let orders = [
  { id: "ORD-001", buyer: "ZarUser1", item: "100 Robux", status: "Pending" },
  { id: "ORD-002", buyer: "PlayerTwo", item: "Fruit Blox", status: "Completed" }
];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.query.action === 'toggle-esp') {
    settings.autoEsp = !settings.autoEsp;
    return res.status(200).json({ success: true, autoEsp: settings.autoEsp });
  }
  if (req.query.action === 'toggle-perf') {
    settings.performanceMode = !settings.performanceMode;
    return res.status(200).json({ success: true, performanceMode: settings.performanceMode });
  }
  if (req.query.action === 'get-settings') {
    return res.status(200).json(settings);
  }
  if (req.query.action === 'get-orders') {
    return res.status(200).json(orders);
  }

  return res.status(200).json({ status: "Online", settings, orders });
}

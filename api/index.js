let state = { autoEsp: false, performanceMode: false };
let activePlayers = [];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Menangani data dari Roblox (Kirim Avatar/Username)
  if (req.method === 'POST' && req.query.action === 'update-status') {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const index = activePlayers.findIndex(p => p.userId === data.userId);
    if (index !== -1) { activePlayers[index] = data; } else { activePlayers.push(data); }
    return res.status(200).json({ success: true });
  }

  // Menangani perintah dari Dashboard Web
  if (req.query.action === 'toggle-esp') state.autoEsp = !state.autoEsp;
  if (req.query.action === 'toggle-perf') state.performanceMode = !state.performanceMode;
  
  // Mengirim data ke Web UI atau Script Roblox
  if (req.query.action === 'get-settings') return res.status(200).json(state);
  if (req.query.action === 'get-players') return res.status(200).json(activePlayers);

  return res.status(200).json({ state, activePlayers });
}

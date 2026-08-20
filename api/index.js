export default function handler(req, res) {
  res.status(200).json({
    status: "Online",
    message: "Bridge API Itemku Siap!"
  });
}

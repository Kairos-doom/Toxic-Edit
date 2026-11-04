export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { videoName, audioName } = req.body;

    return res.status(200).json({
      status: 'success',
      message: `Proyecto [${videoName}] listo para renderizar con audio [${audioName}].`,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return res.status(500).json({ error: 'Error interno en el servidor de edición' });
  }
}

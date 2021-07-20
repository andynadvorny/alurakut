import { siteClient } from 'datocms-client'

export default async function recebedorDeRequests(req, res) {
  if(req.method === 'POST') {
    const TOKEN = 'ff3189f6e2746ad9ef4a4e9adfd312';
    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({
      itemType: '980457',
      title: 'teste',
      imageUrl: 'teste',
      creatorSlug: 'teste'
    })

    res.json({
      registroCriado: registroCriado,
    })
  }
}
import * as Yup from 'yup';
import Album from '../models/Album';

class AlbumController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, name } = await Album.create(req.body);

    return res.json({ id, name });
  }

  async show(req, res) {
    const { id } = req.params;

    const album = await Album.findByPk(id, {
      include: [
        {
          association: 'files',
          as: 'photos',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(album);
  }

  async delete(req, res) {
    const album = await Album.findByPk(req.params.id);

    await album.destroy();

    return res.json();
  }
}

export default new AlbumController();

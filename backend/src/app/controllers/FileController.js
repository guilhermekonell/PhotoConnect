import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;
    const { album_id } = req.body;

    const file = await File.create({
      name,
      path,
      album_id,
    });

    return res.json(file);
  }

  async delete(req, res) {
    const file = await File.findByPk(req.params.id);

    await file.destroy();

    return res.json();
  }
}

export default new FileController();

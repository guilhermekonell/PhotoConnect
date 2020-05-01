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
}

export default new FileController();

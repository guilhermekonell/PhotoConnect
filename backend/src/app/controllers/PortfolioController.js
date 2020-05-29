import * as Yup from 'yup';
import Portfolio from '../models/Portfolio';
import User from '../models/User';
import File from '../models/File';
import Album from '../models/Album';

class PorfolioController {
  async store(req, res) {
    const schema = Yup.object().shape({
      event_type: Yup.string().required(),
      value_hour: Yup.number(),
      description: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const user = await User.findByPk(req.userId);

    if (user.provider) {
      return res.status(401).json({ error: 'User already has a portfolio' });
    }

    await user.update({ provider: true });

    const {
      id,
      event_type,
      value_hour,
      description,
      user_id,
    } = await Portfolio.create({
      ...req.body,
      user_id: req.userId,
    });

    return res.json({ id, event_type, value_hour, description, user_id });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      event_type: Yup.string(),
      value_hour: Yup.number(),
      description: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;

    const portfolio = Portfolio.findByPk(id);

    if (!portfolio) {
      return res.status(401).json({ error: 'Portfolio not found' });
    }

    const {
      event_type,
      value_hour,
      description,
      user_id,
    } = await portfolio.update({ ...req.body, user_id: req.userId });

    return res.json({ id, event_type, value_hour, description, user_id });
  }

  async index(req, res) {
    const portfolios = await Portfolio.findAll({
      order: [['id', 'ASC']],
      attributes: ['id', 'event_type', 'value_hour', 'description'],
      include: [
        {
          model: Album,
          as: 'album',
          attributes: ['name'],
          include: [
            {
              association: 'files',
              as: 'photos',
              attributes: ['name', 'path', 'url'],
            },
          ],
        },
        {
          model: User,
          as: 'user',
          attributes: [
            'name',
            'email',
            'phone_number',
            'street',
            'street_number',
            'complement',
            'state',
            'city',
            'neighborhood',
            'zip_code',
          ],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['name', 'path', 'url'],
            },
          ],
        },
      ],
    });

    return res.json(portfolios);
  }

  async show(req, res) {
    const { id } = req.params;

    const portfolio = await Portfolio.findOne({
      where: { id },
      attributes: ['id', 'event_type', 'value_hour', 'description'],
      include: [
        {
          model: Album,
          as: 'album',
          attributes: ['name'],
          include: [
            {
              association: 'files',
              as: 'photos',
              attributes: ['name', 'path', 'url'],
            },
          ],
        },
        {
          model: User,
          as: 'user',
          attributes: [
            'name',
            'email',
            'phone_number',
            'street',
            'street_number',
            'complement',
            'state',
            'city',
            'neighborhood',
            'zip_code',
          ],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['name', 'path', 'url'],
            },
          ],
        },
      ],
    });

    return res.json(portfolio);
  }

  async delete(req, res) {
    const user = await User.findByPk(req.userId);

    const portfolio = await Portfolio.findOne({ where: { user_id: user.id } });

    if (!portfolio) {
      return res.status(401).json({ error: 'Portfolio not found' });
    }

    await portfolio.destroy();

    await user.update({ provider: false });

    return res.json();
  }
}

export default new PorfolioController();

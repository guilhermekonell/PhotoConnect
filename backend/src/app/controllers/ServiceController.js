import * as Yup from 'yup';

import Service from '../models/Service';
import User from '../models/User';
import File from '../models/File';
import Album from '../models/Album';

class ServiceController {
  async indexUser(req, res) {
    const options = {
      attributes: [
        'id',
        'status',
        'event_type',
        'description',
        'street',
        'street_number',
        'state',
        'city',
        'neighborhood',
        'canceled_at',
        'start_event',
        'end_event',
      ],
      include: [
        {
          model: User,
          as: 'provider',
          attributes: [
            'name',
            'avatar_id',
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
        {
          model: User,
          as: 'client',
          attributes: [
            'name',
            'avatar_id',
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
        {
          model: Album,
          as: 'album',
          include: [
            {
              association: 'files',
              as: 'photos',
              attributes: ['name', 'path', 'url'],
            },
          ],
        },
      ],
    };

    const requested = await Service.findAll({
      where: { user_id: req.userId, status: 'requested' },
      ...options,
    });

    const pending = await Service.findAll({
      where: { user_id: req.userId, status: 'pending' },
      ...options,
    });

    const completed = await Service.findAll({
      where: { user_id: req.userId, status: 'completed' },
      ...options,
    });

    return res.json({ requested, pending, completed });
  }

  async indexProvider(req, res) {
    const options = {
      attributes: [
        'id',
        'status',
        'event_type',
        'description',
        'street',
        'street_number',
        'state',
        'city',
        'neighborhood',
        'canceled_at',
        'start_event',
        'end_event',
      ],
      include: [
        {
          model: User,
          as: 'provider',
          attributes: [
            'name',
            'avatar_id',
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
        {
          model: User,
          as: 'client',
          attributes: [
            'name',
            'avatar_id',
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
        {
          model: Album,
          as: 'album',
          include: [
            {
              association: 'files',
              as: 'photos',
              attributes: ['name', 'path', 'url'],
            },
          ],
        },
      ],
    };

    const requested = await Service.findAll({
      where: { provider_id: req.userId, status: 'requested' },
      ...options,
    });

    const pending = await Service.findAll({
      where: { provider_id: req.userId, status: 'pending' },
      ...options,
    });

    const completed = await Service.findAll({
      where: { provider_id: req.userId, status: 'completed' },
      ...options,
    });

    return res.json({ requested, pending, completed });
  }

  async show(req, res) {
    const options = {
      attributes: [
        'id',
        'status',
        'event_type',
        'description',
        'street',
        'street_number',
        'state',
        'city',
        'neighborhood',
        'canceled_at',
        'start_event',
        'end_event',
      ],
      include: [
        {
          model: User,
          as: 'provider',
          attributes: [
            'name',
            'avatar_id',
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
        {
          model: User,
          as: 'client',
          attributes: [
            'name',
            'avatar_id',
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
        {
          model: Album,
          as: 'album',
          include: [
            {
              association: 'files',
              as: 'photos',
              attributes: ['name', 'path', 'url'],
            },
          ],
        },
      ],
    };

    const { id } = req.params;

    const service = await Service.findOne({
      where: { id },
      ...options,
    });

    if (!service) {
      return res.status(401).json({ error: 'Service not found' });
    }

    return res.json(service);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      event_type: Yup.string().required(),
      description: Yup.string(),
      street: Yup.string().required(),
      street_number: Yup.number().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      neighborhood: Yup.string().required(),
      start_event: Yup.date().required(),
      end_event: Yup.date().required(),
      provider_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const provider = await User.findOne({
      where: {
        id: req.body.provider_id,
        provider: true,
      },
    });

    if (!provider) {
      return res.status(401).json({ error: 'Provider not found' });
    }

    const service = await Service.create({
      ...req.body,
      user_id: req.userId,
      status: 'requested',
    });

    return res.json(service);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      event_type: Yup.string(),
      description: Yup.string(),
      street: Yup.string(),
      street_number: Yup.number(),
      state: Yup.string(),
      city: Yup.string(),
      neighborhood: Yup.string(),
      start_event: Yup.date(),
      end_event: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;

    const service = await Service.findByPk(id);

    if (!service) {
      return res.status(401).json({ error: 'Service not found' });
    }

    if (service.user_id !== req.userId) {
      return res.status(401).json({ error: 'Service update not allowed' });
    }

    const service_updated = await service.update(req.body);

    return res.json(service_updated);
  }

  async cancel(req, res) {
    const { id } = req.params;

    const service = await Service.findByPk(id);

    if (!service) {
      return res.status(401).json({ error: 'Service not found' });
    }

    if (service.user_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'Service cancellation not allowed' });
    }

    if (service.status !== 'requested' && service.status !== 'pending') {
      return res.status(401).json({ error: 'Service cannot be canceled' });
    }

    const service_canceled = await service.update({
      status: 'canceled',
      canceled_at: new Date(),
    });

    return res.json(service_canceled);
  }

  async approve(req, res) {
    const { id } = req.params;

    const service = await Service.findByPk(id);

    if (!service) {
      return res.status(401).json({ error: 'Service not found' });
    }

    if (service.provider_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'You are not provider of this service' });
    }

    if (service.status !== 'requested') {
      return res
        .status(401)
        .json({ error: 'Service has already been approved' });
    }

    const service_pending = await service.update({ status: 'pending' });

    return res.json(service_pending);
  }

  async conclude(req, res) {
    const schema = Yup.object().shape({
      album_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;

    const service = await Service.findByPk(id);

    if (!service) {
      return res.status(401).json({ error: 'Service not found' });
    }

    if (service.provider_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'You are not provider of this service' });
    }

    const { album_id } = req.body;

    const service_completed = await service.update({
      status: 'completed',
      album_id,
    });

    return res.json(service_completed);
  }
}

export default new ServiceController();

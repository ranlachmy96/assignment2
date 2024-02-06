const FamilyReunificationRepository = require('../repositories/familyReunification.repository');

const familyReunificationRepository = new FamilyReunificationRepository();

exports.familyReunificationController = {
  async getAllReunificationCase(req, res) {
    const result = {
      status: 200,
      message: '',
      data: await familyReunificationRepository.find(),
    };
    res.status(result.status);
    res.json(result.message || result.data);
  },
  async getReunificationCase(req, res) {
    const result = {
      status: 200,
      message: '',
      data: await familyReunificationRepository.findById(id),
    };
    res.status(result.status);
    res.json(result.message || result.data);
  },
  async createReunificationCase(req, res) {
    const { body: reunificationCase } = req;
    const result = {
      status: 200,
      message: '',
      data: await familyReunificationRepository.create(reunificationCase),
    };
    res.status(result.status);
    res.json(result.message || result.data);
  },
  async updateReunificationCase(req, res) {
    const { body: reunificationCase, params: { id } } = req;
    const result = {
      status: 200,
      message: '',
      data: await familyReunificationRepository.update(id, reunificationCase),
    };
    res.status(result.status);
    res.json(result.message || result.data);
  },
  async deleteReunificationCase(req, res) {
    const { params: { id } } = req;
    const result = {
      status: 200,
      message: '',
      data: await familyReunificationRepository.delete(id),
    };
    res.status(result.status);
    res.json(result.message || result.data);
  },
};

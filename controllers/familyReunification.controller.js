const { familyReunificationRepository } = require('../repositories/familyReunification.repository');

const generateId = async () => {
  try {
    // Retrieve all reunification cases from the database
    const reunificationCases = await familyReunificationRepository.find();
    // If there are no cases in the database, start with _id = 1
    if (reunificationCases.length === 0) {
      return 1;
    }
    // Find the largest _id
    let maxId = 0;
    reunificationCases.forEach((reunificationCase) => {
      if (reunificationCase._id > maxId) {
        maxId = reunificationCase._id;
      }
    });
    // Increment the largest _id by 1
    return maxId + 1;
  } catch (error) {
    console.error('Error generating ID:', error);
    throw error; // Re-throw the error to handle it elsewhere
  }
};
// Retrieve all users from the database.
exports.getAllReunificationCase = async (req, res) => {
  try {
    const result = await familyReunificationRepository.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Find a single User with an id
exports.getReunificationCase = async (req, res) => {
  try {
    const result = await familyReunificationRepository.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create and Save a new user
exports.createReunificationCase = async (req, res) => {
  if (!req.body.parents) {
    res.status(400).send({ message: 'Content can not be empty!' });
  }
  const { body: reunificationCase } = req;
  reunificationCase._id = await generateId();
  const result = await familyReunificationRepository.create(reunificationCase);
  res.status(200).json(result);
};
// Update a user by the id in the request
exports.updateReunificationCase = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }
  const { body: reunificationCase, params: { id } } = req;
  const result = await familyReunificationRepository.update(id, reunificationCase);
  res.status(200).send(result);
};

// Delete a user with the specified id in the request
exports.deleteReunificationCase = async (req, res) => {
  const { params: { id } } = req;
  const result = await familyReunificationRepository.delete(id);
  res.status(200).send(result);
};

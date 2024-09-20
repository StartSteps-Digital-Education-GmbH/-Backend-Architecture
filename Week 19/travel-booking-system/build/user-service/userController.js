import User from "./userModel.js";
const get = async (req, res) => {
    const users = await User.find();
    res.send(users);
};
const getByID = async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).send(user); // Respond with the found user
};
const create = async (req, res) => {
    const { name, email } = req.body;
    const user = new User({
        name,
        email
    });
    await user.save();
    res.status(201).send(user);
};
const update = async (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(userId, { name, email }, { new: true });
    if (user) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).send(user); // Respond with the updated user
};
const remove = async (req, res) => {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    if (user) {
        return res.status(404).send({ message: 'User not found' });
    }
    res.status(204).send(); // Respond with no content
};
export default { get, getByID, create, update, remove };

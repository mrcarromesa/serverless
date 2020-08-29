import User from '../models/User';

class UsersController {
  async index(req, res) {
    const user = await User.scan().exec();
    return res.json(user);
  }

  async store(req, res) {
    const user = await User.create(req.body);
    return res.json(user);
  }

  async update(req, res) {
    
    const user = await User.update({id: req.params.id}, req.body);
    return res.json(user);
    
  }

  async delete(req, res) {
    await User.delete({id: req.params.id});
    return res.json({msg: 'Deleted'});
  }
}

export default new UsersController();
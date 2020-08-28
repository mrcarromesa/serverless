class PetsController {
  index(req, res) {
    return res.json({message: 'index Pets'})
  }

  store(req, res) {
    console.log(req.body.test);
    return res.json({ message: 'store Pets'});
  }
}

export default new PetsController();

exports.echo = (req, res, next) => {
  try {
    const data = req.body;
    res.json({ data });
  } catch (error) {
    next(error);
  }
};

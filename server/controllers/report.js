import Report from "../models/Report.js";

const getAllIssues = async (req, res, next) => {
  try {
    const resp = await Report.find({});
    res.status(200).json(resp);
  } catch (err) {
    next(err);
  }
};

const reportIssue = async (req, res, next) => {
  const newIssue = new Report({ ...req.body, userId: req.user.id });
  try {
    const savedIssue = await newIssue.save();
    res.status(200).send(savedIssue);
  } catch (err) {
    next(err);
  }
};

export { getAllIssues, reportIssue };

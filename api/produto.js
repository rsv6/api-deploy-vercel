const router = require('express').Router();

router.get("/", (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  };
});

module.exports = router;
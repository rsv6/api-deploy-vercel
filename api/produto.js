const router = require('express').Router();

router.get("/", (req, res) => {
  const nome = "rsv6"

  try {
    // res.json({
    //   status: 200,
    //   message: "Get data successfully 213213",
    // });

    res.status(200).send(`<center><strong><button onclick="alert('Development by ${nome}');">Welcome at page teste, deploy back in NodeJS on Vercel</strong></center>`);

  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  };
});

module.exports = router;
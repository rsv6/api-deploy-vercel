const router = require('express').Router();

router.get("/", (req, res) => {
  var nome = req.params.nome

  try {
    // res.json({
    //   status: 200,
    //   message: "Get data successfully 213213",
    // });

    res.status(200).send(`<center><strong><button onclick="alert('Development by ${nome}');">Pega nome da url</strong></center>
    
    <script type="text/javascript">
      console.log("Autor: ", ${nome})
    </script>
    `);

  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  };
});

module.exports = router;
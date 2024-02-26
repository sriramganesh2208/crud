const express =require("express")

const router =express.Router()
const crudController = require("../controllers/crudController")

router.get("/",crudController.all);
router.get("/get/:id",crudController.get)
router.post("/create",crudController.post)
router.put("/update/:id",crudController.update)
router.delete("/deleteuser/:id",crudController.del)

module.exports = router

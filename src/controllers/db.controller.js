import { DataModel } from "../models/db.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getData = asyncHandler(async (req, res) => {
    try {
        let data = await DataModel.find();
        res.send(data);
        // console.log(data)
      } catch (error) {
        res.status(404).send({ msg: error.message });
      }
});

export { getData }
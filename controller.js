var addBox = 0;
var remBox = 0;

const addBoxfun = async(req,res)=>{
    try {
        addBox++;
        res.cookie('addBox',addBox);
        res.cookie('remBox',remBox);
        res.status(200).json({"addBox":addBox,"remBox":remBox,});
    } catch (err) {
      console.log("Error: ",err.message)
      res.status(404).json({"status":"failed","msg":"Internal error!"});
    }
  };

  const removeBoxfun = async(req,res)=>{
    try {
        remBox++;
        res.cookie('addBox',addBox);
        res.cookie('remBox',remBox);
        res.status(200).json({"addBox":addBox,"remBox":remBox,});
    } catch (err) {
      console.log("Error: ",err.message)
      res.status(404).json({"status":"failed","msg":"Internal error!"});
    }
  };

  const clearAllfun = async(req,res)=>{
    try {
        remBox = 0;
        addBox = 0;
        res.cookie('addBox',addBox);
        res.cookie('remBox',remBox);
        res.status(200).json({"addBox":addBox,"remBox":remBox,});
    } catch (err) {
      console.log("Error: ",err.message)
      res.status(404).json({"status":"failed","msg":"Internal error!"});
    }
  };

  module.exports = {
    addBoxfun,
    removeBoxfun,
    clearAllfun

};
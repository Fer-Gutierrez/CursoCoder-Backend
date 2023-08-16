class ToyController {
  constructor() {}

  createToy(req, res) {
    console.log("Crearé juguetes");
  };
  getToy(req, res){
    console.log("Obtendré un juguete");
  };
  getToys(req, res){
    console.log("Obtendré juguetes");
  };
}

export default new ToyController();

class Api {
  constructor() {

  }


  /**
   * Заполняет строковый шаблон template данными из объекта object
   *
   * @author    User Name
   * @version    v.1.0 (dd/mm/yyyy)
   * @param    {object} object
   * @param    {string} template
   * @return    {string}
   */

  get_api_path(object, template) {
    let result = '';
  }
}


let user =
  {
    id: 20,
    name: 'John Dow',
    role: 'QA',
    salary: 100,
  };

let api_path_templates =
  [
    "/api/items/%id%/%name%",
    "/api/items/%id%/%role%",
    "/api/items/%id%/%salary%",
  ];

let api = new Api();

let api_paths = api_path_templates.map((api_path_template) => {
  return api.get_api_path(user, api_path_template);
});

console.log(JSON.stringify(api_paths));

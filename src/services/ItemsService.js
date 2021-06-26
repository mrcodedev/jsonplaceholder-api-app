import { env } from "../env.js";
import { myFetch } from "../utils/Fetch";

const listEndpoints = {
  posts: "posts",
  comments: "comments",
  albums: "albums",
  photos: "photos",
  todos: "todos",
  users: "users",
};

const getSelectedEndpoint = (selectedEndpoint) => {
  const endpoint = listEndpoints[selectedEndpoint];

  if (!endpoint) {
    throw new Error("[Items Service]: No existe el endpoint seleccionado");
  }

  return endpoint;
};

const getAllItems = ({ endpoint }) => {
  const selectedEndpoint = getSelectedEndpoint(endpoint);

  const fetchData = {
    url: env.api,
    endpoint: selectedEndpoint,
  };

  return myFetch(fetchData);
};

const getItem = ({ endpoint, id }) => {
  const selectedEndpoint = getSelectedEndpoint(endpoint);

  const parseId = Number(parseInt(id));

  if (isNaN(parseId)) {
    throw new Error(
      "ERROR: no has introducido la id o la id introducida no es un número"
    );
  }

  const fetchData = {
    url: env.api,
    endpoint: `${selectedEndpoint}/${id}`,
  };

  return myFetch(fetchData);
};

const itemsService = () => {
  const itemsService = {
    getAllItems: ({ endpoint }) => getAllItems({ endpoint }),
    getItem: (data) => getItem(data),
  };

  return itemsService;
};

export default itemsService();

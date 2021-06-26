import React, { useEffect, useState } from "react";
import itemsService from "../../services/ItemsService";
import generateTemplate from "../../utils/TemplateItems";

const listTypes = ["all", "item"];

const Items = ({ endpoint, title, type = "all", id = 0 }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    if (type === "all") {
      try {
        itemsService.getAllItems({ endpoint }).then((data) => {
          setItems(data);
          setIsLoading(false);
        });
      } catch (error) {
        console.error(error);
      }
    }

    if (type === "item") {
      try {
        itemsService.getItem({ endpoint, id }).then((data) => {
          if (!data) {
            setItems([]);
            setIsLoading(false);
            return;
          }
          setItems(data);
          setIsLoading(false);
        });
      } catch (error) {
        console.error(error);
      }
    }

    if (type !== "all" && type !== "item") {
      setIsLoading(false);
    }
  }, [endpoint, type, id]);

  return (
    <div>
      <h1>{title}</h1>
      {isLoading && <div>Cargando...</div>}
      {console.log(items)}
      {!isLoading && !items && <div>No hay datos</div>}
      {!listTypes.includes(type) && !isLoading && !!items.length && (
        <div>
          El type del item es incorrecto, valores válidos:{" "}
          {listTypes.join(", ")}.
        </div>
      )}
      <div>
        {listTypes.includes(type) &&
          Object.keys(items).length !== 0 &&
          !isLoading &&
          getTemplate(endpoint, items, type)}
      </div>
    </div>
  );
};

const getTemplate = (endpoint, items, type) => {
  if (type === "all") {
    const allItemsMethods = {
      posts: (items) => generateTemplate.allPosts(items),
      comments: (items) => generateTemplate.allComments(items),
      albums: (items) => generateTemplate.allAlbums(items),
      photos: (items) => generateTemplate.allPhotos(items),
      todos: (items) => generateTemplate.allTodos(items),
      users: (items) => generateTemplate.allUsers(items),
    };

    return allItemsMethods[endpoint]
      ? allItemsMethods[endpoint](items)
      : console.error("[Template Items]: Endpoint incorrecto");
  }

  if (type === "item") {
    const allItemsMethods = {
      posts: (items) => generateTemplate.post(items),
      comments: (items) => generateTemplate.comment(items),
      albums: (items) => generateTemplate.album(items),
      photos: (items) => generateTemplate.photo(items),
      todos: (items) => generateTemplate.todo(items),
      users: (items) => generateTemplate.user(items),
    };

    return allItemsMethods[endpoint]
      ? allItemsMethods[endpoint](items)
      : console.error("[Template Items]: Endpoint incorrecto");
  }
};

export default Items;

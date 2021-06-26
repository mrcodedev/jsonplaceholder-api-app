import React from "react";

const getTemplatePost = (post) => {
  return (
    <div>
      <div>
        <strong>UserId</strong>: {post.userId}
      </div>
      <div>
        <strong>Id</strong>: {post.id}
      </div>
      <div>
        <strong>Título</strong>: {post.title}
      </div>
      <div>
        <strong>Cuerpo</strong>: {post.body}
      </div>
    </div>
  );
};

const getTemplateComment = (comment) => {
  return (
    <div>
      <div>
        <strong>PostId</strong>: {comment.postId}
      </div>
      <div>
        <strong>Id</strong>: {comment.id}
      </div>
      <div>
        <strong>Nombre</strong>: {comment.name}
      </div>
      <div>
        <strong>Email</strong>: {comment.email}
      </div>
      <div>
        <strong>Cuerpo</strong>: {comment.body}
      </div>
    </div>
  );
};

const getTemplateAlbum = (album) => {
  return (
    <div>
      <div>
        <strong>PostId</strong>: {album.postId}
      </div>
      <div>
        <strong>Id</strong>: {album.id}
      </div>
      <div>
        <strong>Título</strong>: {album.title}
      </div>
    </div>
  );
};

const getTemplatePhoto = (photo) => {
  return (
    <div>
      <div>
        <strong>AlbumId</strong>: {photo.albumId}
      </div>
      <div>
        <strong>Id</strong>: {photo.id}
      </div>
      <div>
        <strong>Título</strong>: {photo.title}
      </div>
      <div>
        <strong>URL</strong>: {photo.url}
      </div>
      <div>
        <strong>ThumbnailURL</strong>: {photo.thumbnailUrl}
      </div>
    </div>
  );
};

const getTemplateTodo = (todo) => {
  return (
    <div>
      <div>
        <strong>UserId</strong>: {todo.userId}
      </div>
      <div>
        <strong>Id</strong>: {todo.id}
      </div>
      <div>
        <strong>Título</strong>: {todo.title}
      </div>
      <div>
        <strong>Completado</strong>:{" "}
        {todo.completed ? "Completado" : "No completado"}
      </div>
    </div>
  );
};

const getTemplateUser = (user) => {
  return (
    <div>
      <div>
        <strong>Id</strong>: {user.id}
      </div>
      <div>
        <strong>Nombre</strong>: {user.name}
      </div>
      <div>
        <strong>Nombre de usuario:</strong>: {user.username}
      </div>
      <div>
        <strong>Email:</strong>: {user.email}
      </div>
      <div>
        <strong>Teléfono:</strong>: {user.phone}
      </div>
      <div>
        <strong>Web:</strong>: {user.website}
      </div>
      <h2>Dirección</h2>
      <div>
        <strong>Calle:</strong>: {user.address.street}
      </div>
      <div>
        <strong>Suite:</strong>: {user.address.suite}
      </div>
      <div>
        <strong>Ciudad:</strong>: {user.address.city}
      </div>
      <div>
        <strong>Código Postal:</strong>: {user.address.zipcode}
      </div>
      <div>
        <strong>Latitud:</strong>: {user.address.geo.lat}
      </div>
      <div>
        <strong>Longitud:</strong>: {user.address.geo.lng}
      </div>
      <h2>Empresa</h2>
      <div>
        <strong>Nombre:</strong>: {user.company.name}
      </div>
      <div>
        <strong>Frase empresarial:</strong>: {user.company.catchPhrase}
      </div>
      <div>
        <strong>Sector:</strong>: {user.company.bs}
      </div>
    </div>
  );
};

const getTemplateItems = (items, template) => {
  const listTemplates = {
    posts: (item) => getTemplatePost(item),
    comments: (item) => getTemplateComment(item),
    albums: (item) => getTemplateAlbum(item),
    photos: (item) => getTemplatePhoto(item),
    todos: (item) => getTemplateTodo(item),
    users: (item) => getTemplateUser(item),
  };

  return items.map((item, index) => {
    return <div key={index}>{listTemplates[template](item)}</div>;
  });
};

const generateTemplate = {
  post: (data) => getTemplatePost(data),
  allPosts: (data) => getTemplateItems(data, "posts"),
  comment: (data) => getTemplateComment(data),
  allComments: (data) => getTemplateItems(data, "comments"),
  album: (data) => getTemplateAlbum(data),
  allAlbums: (data) => getTemplateItems(data, "albums"),
  photo: (data) => getTemplatePhoto(data),
  allPhotos: (data) => getTemplateItems(data, "photos"),
  todo: (data) => getTemplateTodo(data),
  allTodos: (data) => getTemplateItems(data, "todos"),
  user: (data) => getTemplateUser(data),
  allUsers: (data) => getTemplateItems(data, "users"),
};

export default generateTemplate;

const id = document.getElementById("record");
const articleName = document.getElementById("article_name");
const body = document.getElementById("article_body");
const date = document.getElementById("date");
const output = document.getElementById("response");

const postBtn = document.getElementById("postBtn");
const getBtn = document.getElementById("getBtn");
const putBtn = document.getElementById("putBtn");
const deleteBtn = document.getElementById("deleteBtn");

const postEndpoint = "https://httpbin.org/post";
const getEndpoint = "https://httpbin.org/get";
const putEndpoint = "https://httpbin.org/put";
const deleteEndpoint = "https://httpbin.org/delete";

const fetchAndUpdate = async (endpoint, options) => {
  const response = await fetch(endpoint, options);
  const data = await response.json();
  output.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
};

const getForm = async () => {
  const params = new URLSearchParams(new URL(getEndpoint).search);
  params.append("id", id.value);
  params.append("article_name", articleName.value);
  params.append("article_body", body.value);
  params.append("date", new Date().toISOString());

  fetchAndUpdate(`${getEndpoint}?${params.toString()}`, {
    method: "GET",
  });
};

const postForm = async () => {
  fetchAndUpdate(postEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id.value,
      article_name: articleName.value,
      article_body: body.value,
      date: new Date().toISOString(),
    }),
  });
};

const putForm = async () => {
  fetchAndUpdate(putEndpoint, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id.value,
      article_name: articleName.value,
      article_body: body.value,
      date: new Date().toISOString(),
    }),
  });
};

const deleteForm = async () => {
  fetchAndUpdate(deleteEndpoint, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id.value,
      date: new Date().toISOString(),
    }),
  });
};

postBtn.addEventListener("click", postForm);
getBtn.addEventListener("click", getForm);
putBtn.addEventListener("click", putForm);
deleteBtn.addEventListener("click", deleteForm);

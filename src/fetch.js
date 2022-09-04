const url = "https://jsonplaceholder.typicode.com/todos/1";

export function getTodo() {
  return fetch(url).then((res) => res.json());
}

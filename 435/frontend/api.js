const API_URL = "http://127.0.0.1:8000/api";

function getTopics() {
  return fetch(`${API_URL}/topics`)
    .then(res => res.json());
}
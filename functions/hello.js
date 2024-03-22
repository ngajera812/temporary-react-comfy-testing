const items = [
  { id: 1, name: "john" },
  { id: 1, name: "abc" },
]
exports.handler = async function (event, context) {
  return { statusCode: 200, body: "hello world" }
}

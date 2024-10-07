import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("todoApp");

  switch (req.method) {
    case 'GET':
      const todos = await db.collection("todos").find({}).toArray();
      res.json(todos);
      break;
    case 'POST':
      const newTodo = JSON.parse(req.body);
      const result = await db.collection("todos").insertOne(newTodo);
      res.json(result);
      break;
    case 'PUT':
      const updatedTodo = JSON.parse(req.body);
      await db.collection("todos").updateOne(
        { _id: updatedTodo._id },
        { $set: { completed: updatedTodo.completed } }
      );
      res.json({ message: "Updated successfully" });
      break;
    default:
      res.status(405).end();
      break;
  }
}
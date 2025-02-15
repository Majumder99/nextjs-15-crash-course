import { comments } from "../data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return Response.json(comments.find((comment) => comment.id === +id));
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = await request.json();
  const { text } = comment;
  const index = comments.findIndex((comment) => comment.id === +id);
  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === +id);
  const comment = comments[index];
  comments.splice(index, 1);
  return Response.json(comment);
}

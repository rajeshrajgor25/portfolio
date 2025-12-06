export async function POST(request: Request) {
  const data = await request.json()

  // Mock: store message
  console.log("Message received:", data)

  return Response.json(
    {
      id: Math.random().toString(36),
      ...data,
      createdAt: new Date(),
    },
    { status: 201 },
  )
}

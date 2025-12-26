export async function GET() {
  return Response.json({
    workspace: {
      root: process.cwd(),
      uuid: "2ef79e0a-e7ef-441d-99a8-c0d93877155c",
    },
  });
}

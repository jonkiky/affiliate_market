import { auth } from "@/auth"

export default async function getUser(req, res) {
  if (req.method === "GET") {
    try {
      const session = await auth()
    if (session?.user) {
      // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
      // filter out sensitive data before passing to client.
      session.user = {
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
      }
    }
      res.status(200).json({ message: session });
    } catch (error) {
      res.status(500).json({ message: "Failed to sign out", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
